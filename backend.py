from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import datetime
import random

app = Flask(__name__)
