# Time Table Management System

A Django-based web application for managing time tables for educational institutions.
Overview

This project provides a simple and intuitive way to manage time tables for schools, colleges, and universities. It allows administrators to create and manage time tables for different classes and teachers.
Backend

The backend is built using Django 3.x and uses a SQLite database. It provides REST APIs for creating, reading, updating, and deleting time tables, classes, and teachers.
Frontend

The frontend is built using HTML, CSS, JavaScript, and Bootstrap. It consumes the REST APIs provided by the backend to display and manage time tables, classes, and teachers.
Features

    Time Table Creation: Create time tables for different classes and teachers.
    Class Management: Manage classes, including adding, editing, and deleting classes.
    Teacher Management: Manage teachers, including adding, editing, and deleting teachers.
    Time Table Generation: Generate time tables based on class and teacher availability.
    Time Table Display: Display time tables for different classes and teachers.

Technical Details

    Backend: Django 3.x
    Database: SQLite
    Frontend: HTML, CSS, JavaScript, Bootstrap
    API: REST API

Installation

Backend

    Clone the repository: git clone https://github.com/ashcode002x/time-table
    Install dependencies: pip install -r requirements.txt
    Run migrations: python manage.py migrate
    Create a superuser: python manage.py createsuperuser
    Run the development server: python manage.py runserver


Usage

    Access the backend API at http://localhost:8000/api/
    Access the frontend at http://localhost:8080 by liveshare
    Use the frontend to create, read, update, and delete time tables, classes, and teachers.

