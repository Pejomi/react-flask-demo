""" Flask documentation: https://flask.palletsprojects.com/en/3.0.x/quickstart/ """

from flask import Flask, render_template
from flask import request
from flask import send_file
import example

# Initializing flask app
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html') # Showing the endpoint documentation
 
@app.route('/demo')
def get_demo(): 
    return {
            'Name':"Hello world"
    } 

@app.route('/img')
def get_img(): 
    return send_file('./images/helloworld.png')
     
@app.route('/name/<name>')
def get_name(name): 
    return {
            'Name':"Hello " + name
    }   

# Running app
if __name__ == '__main__':
    app.run()