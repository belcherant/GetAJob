from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import datetime
import random
import os

app = Flask(__name__, template_folder='templates', static_folder='static')
app.secret_key = os.urandom(24)

@app.route('/')
def home():
    return render_template('index.html', title='Home')

@app.route('/login')
def login():
    return render_template('login.html', title='login')

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)