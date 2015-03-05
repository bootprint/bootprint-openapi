
## Motivation

I think, [Swagger](http://swagger.io/) is a great tool to document a REST-API, especially since it already
has a nice [documented user interface](http://petstore.swagger.io/) included. However, sometimes you need to deliver a
static documentation to your customers. The first I did was use [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)
to create HTML and [PhantomJS-rasterize](https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js) to
create a PDF.

There were however, some points that I didn't like about Swagger Codegen:

* I think the setup is too complicated. It's not really suited for a non-CS guy. And you need to compile the project using
  maven before you can actually use it. Non-CS people probably would not want to do this.
* At the first glance, it did not seem to be very flexible. You cannot include any custom styles in the build (and
  I think on delivery, you might want to include your company's CI).

So `swagger-to-html`

* uses a bootstrap-css to provided clean an responsive styling,
* runs a lesscss-compiler, so that the bootstrap-theme can actually be adapted by redefining less-variables.
* uses a Handlebars template to generated HTML from a swagger-definition, the template and all partials
  can be replaced by custom ones.
* has the option to include custom handlebars-helpers to use in your custom templates
* provides suitable defaults for all customizable features.


## Customization vs Reporting Bugs

Since almost every part of the module can be customized, it is very easy to circumvent bugs in the template and
the styling by providing a customization for the buggy part. **Please do submit bugs, if you find them. And if
you make optimizations (especially ones from the todo-list below), please submit a pull request.**

Customizations are meant for providing non-generic adaptions to customer needs. You can use them temporarily to
resolve your generic problems, but if you think, your change would benefit everyone, please report them so that it
can be fixed here too.

## Command-line-interface

The package uses the `commander` package to parse cli-parameters. If you call it without parameters, the following help page
will be displayed:

```bash
  Usage: swagger-to-html [options] <swaggerfile> <targetdir>

  Convert a swagger-definition file into a static html-page.

  Options:

    -h, --help                output usage information
    -V, --version             output the version number
    -f, --config-file <file>  Specify a config file for custom configurations
    -C, --no-css              Omit css generation
    -d, --development-mode    Turn on file-watcher, less source maps and http-server with live-reload

```

### -f, --config-file

A custom configuration-file can be specified. It must be a json-file and can contain options to customize the behaviour
of `swagger-to-html`. The configuration-options are described [below](#configuration-options).

### -C, --no-css

Without this option, `swagger-to-html` will call `lesscss` to combine the `bootstrap`-less with the `atom-light-syntax`-less
and other less-directives in this module. This is a time-consuming process and can be skipped, e.g. if you have already
generated you files before and have only changed your swagger-definition.

This option might disappear in the future. I'm thinking about using a fs-watcher to perform live-updates of the template and
the css.

### -d, --development-mode

This options activates a development-mode. This means:

* The template-files, all partials, all less-files and the swagger-file are watched using [the chokidar module](https://www.npmjs.com/package/chokidar). CSS and/or HTML are rebuilt automatically when needed.
* A [live-server](https://www.npmjs.com/package/live-server) is run on the target directory to enable live-reloading html and css.
* LESS source-maps are generated and inlined into the CSS.


*Note: Generally, chokidar is used in a non-polling mode if a whole directory is referenced in the configuration (partial
templates and less-paths. For explicit files (swagger-file, less-files, directly referenced partials) the polling mode is
used. Otherwise, there are problems with text-editors that use "atomic writes".*

*Note: Chrome does not seem to repaint the page, if only the CSS changes, until the mouse hovers over the browser window*

## Programmatic usage

```js
// 'require' the module
var Swagger2Html = require('swagger-to-html');

// instantiate the converter class passing an 'options'-javascript-object.
var converter = new Swagger2Html({ /* options */ });

// call the lesscss-compiler to generate css
converter.generateCss(targetDir)

// call handlebars to generate the HTML-code
converter.generateHtml(swaggerJson, targetDir)
```


## Configuration options

*Disclaimer: I have not written any unit tests to verify these options yet.
 I am sure I will do so some time, but until then I cannot guarantee anything.
 You are welcome to test the options and submit bugs or even tests.*

The configuration object can contain the following options:

```js
{
  "partials": {
      "somePartial": "path/to/partial.hbs",
      "somePartialDirectory: "path/to/directory"

      "parameters": "...",
      "...": "..."
  },
  "template": "path/to/the/main/template.hbs",
  "helpers": {
      'aHandlebarsHelper': function(value) {
          return 'result';
      }
      // '...'
  }
  "less": {
      paths: [ "path/to/an/include-directory/" ],
      main: [ "path/to/a/less-file.less" ]
  }
}
```

### template

`swagger-to-html` uses a Handlebars-template to convert the swagger-definition into a static html-page. The default template
is part of the module. The path to a custom template can be specified in this option.

### partials

This option contains an object of partial-definitions that a registered with Handlebars to be used by the template.
The values in this object are generally paths to partial-files.

If the value of an entry is a file, the file is registered as partial by its key.
If the value of an entry is a directory, all ".hbs"-files within this directory are added as partial
the name of the partial is then `key/filename-without-extension`.

The following partials are included by default:

* `swagger-to-html/htmlBody`: This partial renders the whole html-body contents
* `swagger-to-html/path`: This partial renders a single path definition
* `swagger-to-html/method`: This partial renders a single method definition
* `swagger-to-html/parameters`: This partial renders the request-parameters of a single request (path-method)
* `swagger-to-html/responses`: This partial renders the response definitions of a request.
* `swagger-to-html/definitions`: This partial renders the `definitions` part of the swagger-json.

These keys can be extended or overridden in the provided configuration.

Example:

Consider a directory `path/to/directory` that contains the files `one.hbs` abd `two.hbs` and the following configuration:

```json
{
    partials: {
        "partialFile": "path/to/file.hbs",
        "partialDir": "path/to/directory"
    }
}
```

The following partials would be registered:

* `partialFile`: Contents of `path/to/file.hbs`,
* `partialDir/one`: Contents of `path/to/directory/one.hbs`
* `partialDir/two`: Contents of `path/to/directory/two.hbs`



### helpers

This object contains name-function mapping of Handlebars-helpers used by the template. Additional
helpers can be provided and existing helpers can be overridden. The following helpers exist in the default configuration:

* `toUpperCase`: Generate uppercase letters of a string (used to write the HTTP-method)
* `methodClass`: A mapping from HTTP-method to CSS-class
* `md`: Runs the input string through `marky-markdown` to allow markdown-content in description properties.
* `datatype`: Renders the "type" attribute of a parameter. Array types are rendered as `type[]`
* `json`: Used to render schema-properties. The javascript object defining the schema is `json-stable-stringify`d.
  `$ref`-tags pointing to `#/definitions/...` are changed into links to the particular definition.


### less.paths

This option is a list of additional lesscss include-paths. Use this option, if your main lesscss-file needs
to @import files from some directories.

### less.main

This option is an array of additional lesscss-files that can contain theme-adaptions.
You can use it (for example) to specify different color schemes for the css. Take a look at
[the bootstrap documention](http://getbootstrap.com/css/#less) to see what can be changed in the bootstrap-theme.

The less-file provided here, is imported after all other less-files in use, so you should be able
to override all properties in here.

## Module structure

* **bin** contains the command-line-interface javascript
* **src** contains the javascript-files source files
* **example** contains the petstore-example and the generated html
* **styles** contains the less-files adapting the bootstrap-theme
* **templates** contains the default Handlebars-template and partials
* **target** is the directory that is created when you run `npm test`
* **tests** contains some unit tests

## TODOs

I think that the following things are needed for this module to be finished (i.e. Version 1.0).

* Provide a more complex example with custom configuration file
* The Handlebars template is not complete yet. Missing parts:
  * Request-Content-Type
  * Tags
  * Most parts of the "info"-block are still missing.
  * Provide a nicer template for the JSON-Schema parts
* Write unit tests
* Include css-directives for [CSS Paged Media Module Level 3](http://www.w3.org/TR/css3-page/) in order to
  create a nicer print version (printable e.g. with [WeasyPrint](http://weasyprint.org)). This should include:
  * Appropriate page header- and footer-lines.
  * Cross-references containing page- or chapter-numbers
* Include better navigation [affix](http://getbootstrap.com/javascript/#affix) for browser view and a table of contents
  for printing.
* Production version with inlined css
* Option to run WeasyPrint to generate a PDF.
* **Extract the code part into its own module so that it can be reused with other templates**



## Changelog

#### 0.2.0, 2015-03-05

* Development mode with file-system-watcher, live-reload server and LESS-source-maps
* Partial-configurations can now contain directories.
* Use [marked](https://www.npmjs.com/package/marked), [highlight.js](https://www.npmjs.com/package/highlight.js)
  and [cheerio](https://www.npmjs.com/package/cheerio) instead of
  [marky-markdown](https://www.npmjs.com/package/marky-markdown). The latter does not seem to work on MS-Windows.



#### 0.1.0, 2015-03-02

* Refactoring: More main template divided into more partials
* Changing config-options for lesscss
* Define custom css classes for method-headers (GET, POST, PUT, ...)

#### 0.0.2 - 0.0.5, 2015-03-01

* Changes in README

#### 0.0.1, 1.3.2015

* Initial version


