# bootprint-swagger

> Converts a swagger-definition into a static html page

## Overview

This package contains a template, partials and styles for [bootprint](http://npmjs.com/bootprint) to convert
JSON-schema files into a static HTML-page.

## Installation

In order to use `bootprint-swagger` from the command line
you have to install `bootprint` and `bootprint-swagger` globally:

```bash
npm install -g bootprint
npm install -g bootprint-swagger
```


## Usage

```
bootprint swagger http://petstore.swagger.io/v2/swagger.json target
```

The directory "target" should now contain a file `index.html` and `main.css` which contain a readble
form of the [Swagger-Petstore-Example](http://petstore.swagger.io/).

For details about command line parameters, please refer to the
[documentation of the Bootprint](https://github.com/nknapp/bootprint)

`bootprint-swagger` is just a template-module for `bootprint`. That means, it contains
[LessCss-file](less), [Handlebars-partials](handlebars/partials) and a
[preprocessor](lib/preprocessor.js) that converts
[a Swagger-Specification](http://swagger.io) into the JSON actually needed by the templates.


### Javascript-Usage

The does essentially the same, just in a the above command line, just in JavaScript (i.e. `node`)

```js
// Load bootprint
var bootprint = require('bootprint')
    // Load bootprint-swagger
   .load(require('bootprint-swagger'))
    // Customize configuration, override any options
   .merge({ /* Any other configuration */ })
    // Specify build source and target
   .build('http://petstore.swagger.io/v2/swagger.json','target')
    // Generate swagger-documentation into "target" directory
   .generate()
   .done(console.log);
```

##  API-reference

## bootprintSwagger

Create a bootprint template-module that can be loaded via `Bootprint#load`:

* Parameters:
  * builder: **BootprintBuilder** - the current bootprint builder    

* Returns:
  * **BootprintBuilder** - a bootprint-builder containing the template and Less settings for `bootprint-swagger`



## License

`bootprint-swagger` is published under the MIT-license. 
See [LICENSE](LICENSE) for details.

## Contributing Guidelines

<!-- Taken from @tunnckoCore: https://github.com/tunnckoCore/coreflow-templates/blob/master/template/CONTRIBUTING.md -->

Contributions are always welcome!

**Before spending lots of time on something, ask for feedback on your idea first!**

Please search issues and pull requests before adding something new to avoid duplicating
efforts and conversations.


### Installing

Fork and clone the repo, then `npm install` to install all dependencies and `npm test` to
ensure all is okay before you start anything.


### Testing

Tests are run with `npm test`. Please ensure all tests are passing before submitting
a pull request (unless you're creating a failing test to increase test coverage or show a problem).

### Code Style

[![standard][standard-image]][standard-url]

This repository uses [`standard`][standard-url] to maintain code style and consistency,
and to avoid style arguments.
```
npm i standard -g
```

It is intentional to don't have `standard`, `istanbul` and `coveralls` in the devDependencies. Travis will handle all that stuffs. That approach will save bandwidth also installing and development time.

[standard-image]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standard-url]: https://github.com/feross/standard
