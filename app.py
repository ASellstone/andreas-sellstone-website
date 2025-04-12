#!/usr/bin/env python3
"""
My personal flask website
"""

import traceback
import os
import re
from flask import Flask, render_template, request, redirect, url_for, session


app = Flask(__name__)
app.secret_key = re.sub(r"[^a-z\d]", "", os.path.realpath(__file__))


@app.route("/")
def main():
    """
    Main route
    """
    return render_template("index.html")


@app.route("/projects")
def projects_page():
    """
    Projects page
    """
    return render_template("projects.html")


@app.route("/about")
def about_page():
    """
    About page
    """
    return render_template("about.html")


@app.route("/contact")
def contact_page():
    """
    Contact page
    """
    return render_template("contact.html")

# Project pages
@app.route("/projects/theses/second-year-thesis")
def second_year_thesis_page():
    """
    Second year master thesis page
    """
    return render_template("/projects/theses/second-year-thesis.html")


@app.route("/projects/theses/first-year-thesis")
def first_year_thesis_page():
    """
    First year master thesis page
    """
    return render_template("/projects/theses/first-year-thesis.html")


@app.route("/projects/ux-design/book-finder")
def book_finder_page():
    """
    Book finder project page
    """
    return render_template("/projects/ux-design/book-finder.html")


@app.route("/projects/ux-design/infotainment_user-interface_design")
def infotainment_page():
    """
    Infotainment project page
    """
    return render_template("/projects/ux-design/infotainment_user-interface_design.html")


@app.route("/projects/technical-writing/GGXLOG-how-to")
def ggxlog_how_to_page():
    """
    GGXLog how to project page
    """
    return render_template("projects/technical-writing/GGXLOG-how-to.html")


# Errors
@app.errorhandler(404)
def page_not_found(e):
    """
    Handler for page not found 404
    """
    #pylint: disable=unused-argument
    return "Flask 404 here, but not the page you requested."


@app.errorhandler(500)
def internal_server_error(e):
    """
    Handler for internal server error 500
    """
    #pylint: disable=unused-argument
    return "<p>Flask 500<pre>" + traceback.format_exc()


if __name__ == "__main__":
    app.run()