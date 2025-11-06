import React from "react";

const styles = {
  root: {
    fontFamily: "'Inter', Arial, sans-serif",
    background: "#fff",
    minHeight: "100vh",
    color: "#333",
    margin: 0,
    padding: 0,
  },
  container: {
    margin: "0 auto",
    maxWidth: 1000,
    background: "#fff",
    boxShadow: "0 0 30px #eee",
    borderRadius: 8,
    padding: "32px 40px 40px 40px",
    marginTop: 32
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 32
  },
  logoSection: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    marginRight: 16
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 18
  },
  navButton: {
    background: "#fff",
    color: "#F5821F",
    border: "2px solid #F5821F",
    borderRadius: 6,
    padding: "6px 16px",
    marginRight: 12,
    fontWeight: 600,
    cursor: "pointer"
  },
  loginBtn: {
    background: "#F5821F",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "7px 18px",
    fontWeight: 700,
    cursor: "pointer"
  },
  mainTitle: {
    textAlign: "center",
    margin: "40px 0 10px 0",
    color: "#F5821F",
    fontWeight: 800,
    fontSize: "2.8rem"
  },
  subtitle: {
    textAlign: "center",
    color: "#F5821F",
    fontWeight: 500,
    fontSize: "1.2rem"
  },
  cta: {
    textAlign: "center",
    marginTop: 26
  },
  ctaTitle: {
    color: "#F5821F",
    fontWeight: 700,
    fontSize: "1.15rem",
    marginBottom: 12
  },
  ctaBtn: {
    background: "#F5821F",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    fontWeight: 700,
    fontSize: "1.06rem",
    padding: "14px 32px",
    cursor: "pointer"
  },
  purpose: {
    marginTop: 48
  },
  purposeTitle: {
    color: "#F5821F",
    fontWeight: 700,
    fontSize: "1.7rem",
    marginBottom: 22
  },
  purposeGrid: {
    display: "flex",
    gap: 32,
    justifyContent: "space-between"
  },
  card: {
    flex: 1,
    background: "#fcfcfc",
    borderRadius: 8,
    padding: "24px 18px 18px 18px",
    boxShadow: "0 2px 15px #eee",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  illustration: { 
    width: "96px", 
    height: "80px", 
    background: "#f0e5e0", 
    borderRadius: 8, 
    marginBottom: 18 
  },
  cardTitle: {
    color: "#F5821F",
    fontWeight: 700,
    fontSize: "1.1rem",
    marginBottom: 9
  },
  cardText: {
    fontSize: "1rem",
    marginBottom: 19,
    textAlign: "center"
  },
  testimonials: {
    display: "flex",
    gap: 24,
    marginTop: 22,
    justifyContent: "center"
  },
  testimonial: {
    background: "#fff",
    borderRadius: 7,
    boxShadow: "0 1px 7px #eee",
    padding: "15px 20px",
    fontSize: "1.1rem",
    minWidth: 180,
    textAlign: "center"
  },
  person: { fontWeight: 700, marginTop: 3 },
  job: { fontSize: "0.96rem", color: "#666" }
};

export default function LandingPage() {
  return (
    <div style={styles.root}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logoSection}>
            {/* Replace with <img src="logo.png" /> if you have a real asset */}
            <div style={styles.logo}><span style={{fontWeight:700, color:'#307054',fontSize:'1.08em',position:'relative',top:'13px',left:'7px'}}>GetAJob</span></div>
            <button style={styles.navButton}>Previous Page</button>
          </div>
          <nav style={styles.nav}>
            <a href="#jobs" style={{color:"#F5821F", textDecoration:"none", fontWeight:600}}>Find Jobs</a>
            <a href="#maps" style={{color:"#F5821F", textDecoration:"none", fontWeight:600}}>Maps</a>
            <button style={styles.loginBtn}>Log In</button>
          </nav>
        </div>
  
        {/* Title and Subtitle */}
        <div style={styles.mainTitle}>GetAJob</div>
        <div style={styles.subtitle}>Your user friendly job finder</div>
        <div style={styles.cta}>
          <div style={styles.ctaTitle}>Only one step away from finding your future</div>
          <button style={styles.ctaBtn}>Get Started</button>
        </div>
  
        {/* Purpose Section */}
        <div style={styles.purpose}>
          <div style={styles.purposeTitle}>Our Purpose</div>
          <div style={styles.purposeGrid}>
            {/* Card 1 */}
            <div style={styles.card}>
              <div style={styles.illustration}>
                {/* Placeholder for illustration */}
                <span role="img" aria-label="community" style={{fontSize:"3em"}}>🧑‍🤝‍🧑</span>
              </div>
              <div style={styles.cardTitle}>Helping our community find jobs</div>
              <div style={styles.cardText}>
                Nowadays finding job opportunities is difficult, that's where we come in. Our goal is help others find employment, whether it be odd jobs or tenured positions, we have it.
              </div>
              <div style={styles.testimonials}>
                <div style={styles.testimonial}>
                  “I never found a job so quick”<br/>
                  <span style={styles.person}>Herky</span>
                  <div style={styles.job}>Contractor</div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div style={styles.card}>
              <div style={styles.illustration}>
                <span role="img" aria-label="audience" style={{fontSize:"3em"}}>👥</span>
              </div>
              <div style={styles.cardTitle}>Our Audience</div>
              <div style={styles.cardText}>
                No matter who you are or where you are, everyone is welcome to use our website. We welcome everyone no matter the situation.
              </div>
              <div style={styles.testimonials}>
                <div style={styles.testimonial}>
                  “I love the design of this site!”<br/>
                  <span style={styles.person}>Benjamin Franklin</span>
                  <div style={styles.job}>Client</div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div style={styles.card}>
              <div style={styles.illustration}>
                <span role="img" aria-label="features" style={{fontSize:"3em"}}>💼</span>
              </div>
              <div style={styles.cardTitle}>What We Can Do</div>
              <div style={styles.cardText}>
                Enjoy our filtered search, mapping features, easy-2-use interface, fast application and more!
              </div>
              <div style={styles.testimonials}>
                <div style={styles.testimonial}>
                  “So much better than Indeed”<br/>
                  <span style={styles.person}>Mike Tyson</span>
                  <div style={styles.job}>Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
