// Client map script for templates/maps.html
// - Uses window.JOBS if present (server-rendered list)
// - Otherwise fetches /api/jobs/locations (GeoJSON FeatureCollection)
// - Renders markers, popups, and builds a clickable listing in #results

(function () {
  const mapEl = document.getElementById('map');
  const listEl = document.getElementById('results');
  if (!mapEl || !listEl) return;

  const DEFAULT_CENTER = [38.5816, -121.4944];
  const DEFAULT_ZOOM = 12;

  const map = L.map('map').setView(DEFAULT_CENTER, DEFAULT_ZOOM);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  const markersById = new Map();

  // Convert server-passed JOBS array to GeoJSON FeatureCollection if possible
  function jobsArrayToGeoJSON(jobs) {
    const features = [];
    if (!Array.isArray(jobs)) return null;
    jobs.forEach((j) => {
      // tolerate several naming conventions
      const lat = parseFloat(j.lat ?? j.latitude ?? j.latitude_float ?? NaN);
      const lng = parseFloat(j.lng ?? j.longitude ?? j.lon ?? j.longitude_float ?? NaN);
      if (!isFinite(lat) || !isFinite(lng)) return;
      features.push({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [lng, lat] },
        properties: {
          id: j.id ?? j.job_id ?? null,
          title: j.title ?? j.name ?? 'Untitled',
          description: j.description ?? '',
          location: j.location ?? '',
          url: j.url ?? null,
        },
      });
    });
    return { type: 'FeatureCollection', features };
  }

  function loadFromGeoJSON(geojson) {
    markersById.clear();
    listEl.innerHTML = '';

    if (!geojson || !Array.isArray(geojson.features) || geojson.features.length === 0) {
      listEl.innerText = 'No job locations available.';
      return;
    }

    const geoLayer = L.geoJSON(geojson, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
      },
      onEachFeature: function (feature, layer) {
        const p = feature.properties || {};
        const title = p.title || 'Untitled';
        const description = p.description || '';
        const id = p.id ?? '';
        const url = p.url || (id ? `/job/${id}` : '#');

        const popupHtml = `<div class="popup">
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(description)}</p>
          <p><a href="${escapeAttr(url)}" target="_blank" rel="noopener">Open listing</a></p>
        </div>`;

        layer.bindPopup(popupHtml);
        if (id !== null && id !== undefined) markersById.set(String(id), layer);
      },
    }).addTo(map);

    buildListPanel(geojson.features);

    // Fit bounds to shown features
    const featureLayers = geoLayer.getLayers();
    if (featureLayers.length) {
      const g = new L.featureGroup(featureLayers);
      map.fitBounds(g.getBounds(), { maxZoom: 15, padding: [40, 40] });
    }
  }

  function buildListPanel(features) {
    listEl.innerHTML = '';
    features.forEach((f) => {
      const p = f.properties || {};
      const id = p.id ?? '';
      const title = p.title || 'Untitled';
      const location = p.location || '';
      const description = p.description || '';

      const item = document.createElement('div');
      item.className = 'result-item';
      item.innerHTML = `
        <div class="result-title">${escapeHtml(title)}</div>
        <div class="result-location">${escapeHtml(location)}</div>
        <div class="result-desc">${escapeHtmlShort(description)}</div>
        <div class="result-actions">
          <button class="view-on-map" data-id="${escapeAttr(id)}">View on map</button>
          <a class="open-listing" href="${escapeAttr(p.url || (id ? `/job/${id}` : '#'))}" target="_blank" rel="noopener">Open</a>
        </div>
      `;
      listEl.appendChild(item);

      const viewBtn = item.querySelector('.view-on-map');
      viewBtn.addEventListener('click', () => {
        const marker = markersById.get(String(id));
        if (marker) {
          map.setView(marker.getLatLng(), Math.max(map.getZoom(), 14));
          marker.openPopup();
        }
      });
    });
  }

  // Utilities to escape text
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
  function escapeAttr(str) {
    return escapeHtml(str).replaceAll('\n', '');
  }
  function escapeHtmlShort(s) {
    const t = escapeHtml(s || '');
    return t.length > 120 ? t.slice(0, 117) + '...' : t;
  }

  // Primary initialization: use window.JOBS if provided, else fetch API
  (function init() {
    // If template passed JOBS, prefer that (backwards-compatible)
    try {
      if (window.JOBS && Array.isArray(window.JOBS) && window.JOBS.length) {
        const gj = jobsArrayToGeoJSON(window.JOBS);
        if (gj && gj.features.length) {
          loadFromGeoJSON(gj);
          return;
        }
      }
    } catch (e) {
      console.warn('Error using window.JOBS:', e);
    }

    // Otherwise, fetch server-side GeoJSON
    fetch('/api/jobs/locations')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((geojson) => loadFromGeoJSON(geojson))
      .catch((err) => {
        console.error('Failed to load job locations:', err);
        listEl.innerText = 'Unable to load listings at the moment.';
      });
  })();
})();
