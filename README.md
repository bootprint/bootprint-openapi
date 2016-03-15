# bootprint-openapi 

[![NPM version](https://badge.fury.io/js/bootprint-openapi.svg)](http://badge.fury.io/js/bootprint-openapi)
     [![Travis Build Status](https://travis-ci.org/bootprint/bootprint-openapi.svg?branch=master)](https://travis-ci.org/bootprint/bootprint-openapi)
   [![Coverage Status](https://img.shields.io/coveralls/bootprint/bootprint-openapi.svg)](https://coveralls.io/r/bootprint/bootprint-openapi)


> Converts a openapi-definition into a static html page

## Maintainers / Contributors wanted

*I'm sorry to say that I won't be able to develop new features for this project in the near future. 
But: I will probably be able to discuss and merge pull-requests, and to publish new versions.*

Please understand that I'm not using `bootprint-openapi` myself at the moment and all I'm doing (or not doing 
at the moment) is for other people to fill their needs. I have a limited time each week to work on open-source
projects and I want to work on some other projects.

#### Here is my proposal

* If you want to start maintaining the module(s), please let me know and I'll give you push access.
* I will help you by giving pointers to code-lines that need to be changed for a given feature.
* I will try to publish new versions as fast as possible.
* I might also give you publishing-rights on npm, although that seems like a large step and I would have to 
  be confident that you don't misuse it. Asking doesn't cost.

## Overview

This package contains a template, partials and styles for [bootprint](http://npmjs.com/bootprint) to convert
OpenAPI-Specifications into a static HTML-page.

This package was formerly known as `bootprint-swagger` and has been renamed, because 
Swagger-Specification has been renamed to OpenAPI-Specification
## Installation

In order to use `bootprint-openapi` from the command line
you have to install `bootprint` and `bootprint-openapi` globally:

```bash
npm install -g bootprint
npm install -g bootprint-openapi
```

**Check this out:** You can now [try out the new bootprint-openapi playground](http://bootprint.knappmeier.de/).
Just paste a OpenAPI-specification and make it readable. 


## Usage

```
bootprint openapi http://petstore.swagger.io/v2/swagger.json target
```

The directory "target" should now contain a file `index.html` and `main.css` which contain a readable
form of the [Swagger-Petstore-Example](http://petstore.swagger.io/).

For details about command line parameters, please refer to the
[documentation of Bootprint](https://github.com/nknapp/bootprint)

`bootprint-openapi` is just a template-module for `bootprint`. That means, it contains
[LessCss-file](less), [Handlebars-partials](handlebars/partials) and a
[preprocessor](lib/preprocessor.js) that converts
[an OpenAPI-Specification](http://openapis.org) into the JSON actually needed by the templates.

### Create a single file.

If you want to have a single HTML-file, not one HTML and one CSS, you can use substack's [html-inline](https://github.com/substack/html-inline)
package to generate a self-cotnained file:

```
npm -g install html-inline
html-inline target/index.html
```



### Javascript-Usage

The does essentially the same, just in a the above command line, just in JavaScript (i.e. `node`)

```js
// Load bootprint
require('bootprint')
  // Load bootprint-swagger
  .load(require('bootprint-openapi'))
  // Customize configuration, override any options
  .merge({ /* Any other configuration */})
  // Specify build source and target
  .build('http://petstore.swagger.io/v2/swagger.json', 'target')
  // Generate swagger-documentation into "target" directory
  .generate()
  .done(console.log)
```

## API

The API of `bootprint-openapi` consists of Handlebars-partials that can be overridden and
LessCss-Definitions, that can be adapted.

### Handlebars partials
                                               
About 26 Handlebars partials are used to render this openapi-html-page.
The following documentation is not final yet and there are a lot of partials without real documentation, but you may already have a look
at it: The [partials documentation](handlebars-partials.md) describes the partials in use
and the order in which they are called. You can override these partials in a
[Bootprint configuration file](https://github.com/nknapp/bootprint/blob/master/doc/config.md#overriding-and-adding-partials).


## License

`bootprint-openapi` is published under the MIT-license.
See []() for details.

Some of the example specs have been provided by contributors who opened issues on github,
those files are in the `test/*`-directories.

* **test/all-of/swagger.json** [msh321](https://github.com/msh321) (issue #35)
* **test/missing-items/swagger.json** [yewton](https://github.com/yewton) (issue #44)
* **test/path-parameters/swagger.json** [asieira](https://github.com/asieira) (issue #18)
* **test/read-only-property/swagger.json** [asieira](https://github.com/asieira) (issue #28)

## Release-Notes
 
For release notes, see [CHANGELOG.md](CHANGELOG.md)
 
## Contributing guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md).