# react-flask-demo
#### Made by Pejomi (Peter, Jonas & Mie)

## Introduction
This project demonstrates how to create a simple web application using React and Flask. 

The project is split into two parts: 
- **backend** - a simple Flask server with some endpoints that can be used to deliver data to the frontend. Find the backend code in the `backend` directory.

- **frontend** - a simple React app that displays data from the backend. Find the frontend code in the `frontend` directory.



## How to run the project

### Install dependencies
First, you need to install the dependencies for the frontend and the backend. Start by running the following commands in the root directory of the project:

```bash
cd backend
pip install flask
```

```bash
cd frontend
npm install
```
### Run project
To run the project, you need to start the backend server and the frontend. 

To run the ```flask server``` , run the following command in the root directory of the project:

```bash
cd backend
python app.py
```
To run the ```react app``` , run the following command in the root directory of the project:
```bash
cd frontend
npm start
```