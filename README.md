## Overview

This package contains a template, partials and styles for [bootprint](http://npmjs.com/bootprint) to convert
JSON-schema files into a static HTML-page.

## Usage

```bash
npm install -g bootprint
npm install -g bootprint-swagger
bootprint swagger http://petstore.swagger.io/v2/swagger.json target
```

The directory "target" should now contain a file `index.html` and `main.css` which contain a readble
form of the [Swagger-Petstore-Example](http://petstore.swagger.io/).


*More documentation coming soon*

## Style details