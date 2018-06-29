# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I incrementally converted a static webpage to a mobile-ready web application. In **Stage One**, I took a static design that lacks accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for my users.

### Specification

I had been provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features, and it didn’t work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality. 

### What do you do from here?

1. Navigate to the project folder and start up a simple HTTP server to serve up the site files on your local computer. You will need to have Python2 or Python3 installed.  I used Python3.  If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server 8000`. 

2. With your server running, visit the site: `http://localhost:8000`.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, I tried to maintain use of ES6 in any additional JavaScript I wrote. 

Credits:
Back to Basics: Skip to Main Content Links tutorial by Terril Thompson: http://terrillthompson.com/blog/161

