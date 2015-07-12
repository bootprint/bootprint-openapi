# Template structure

<pre><code><b><a href="#index.html">index.html</a></b>
<i>Default template for rendering the...</i>
├── <b><a href="#base/title">base/title</a></b>
│   <i>Renders the page title</i>
├── <b><a href="#base/header">base/header</a></b>
│   <i>This partial is displayed at the top of the...</i>
├── <b><a href="#base/body">base/body</a></b>
│   <i>This partial renders the <body> of the HTML page.</i>
│   ├── <b><a href="#swagger/summary">swagger/summary</a></b>
│   │   <i>Renders a summary of this services, containing...</i>
│   ├── <b><a href="#swagger/securityDefinitions">swagger/securityDefinitions</a></b>
│   │   <i>Renders the security-section of the...</i>
│   ├── <b><a href="#swagger/paths">swagger/paths</a></b>
│   │   <i>Renders the paths-section of the Rest-Service...</i>
│   │   └── <b><a href="#swagger/path">swagger/path</a></b>
│   │       <i>Renders a single path definition with all its...</i>
│   │       └── <b><a href="#swagger/operation">swagger/operation</a></b>
│   │           <i>This partial renders a box containing...</i>
│   │           ├── <b><a href="#swagger/request-body">swagger/request-body</a></b>
│   │           │   <i>Renders the request-body section of an operation.</i>
│   │           │   └── <b><a href="#swagger/model">swagger/model</a></b>
│   │           │       <i>Renders a json-schema model within swagger...</i>
│   │           │       └── <b><a href="#json-schema/main-panel">json-schema/main-panel</a></b>
│   │           │           ├── <b><a href="#json-schema/datatype">json-schema/datatype</a></b>
│   │           │           │   <i>Enum values</i>
│   │           │           │   └── <b><a href="#json-schema/reference">json-schema/reference</a></b>
│   │           │           └── <b><a href="#json-schema/body">json-schema/body</a></b>
│   │           │               ├── <b><a href="#json-schema/reference">*json-schema/reference*</a></b>
│   │           │               ├── <b><a href="#json-schema/properties">json-schema/properties</a></b>
│   │           │               │   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b>
│   │           │               ├── <b><a href="#json-schema/additionalProperties">json-schema/additionalProperties</a></b>
│   │           │               │   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b>
│   │           │               ├── <b><a href="#json-schema/array-items">json-schema/array-items</a></b>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b>
│   │           │               ├── <b><a href="#json-schema/allOf">json-schema/allOf</a></b>
│   │           │               │   ├── <b><a href="#json-schema/reference">*json-schema/reference*</a></b>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b>
│   │           │               └── <b><a href="#json-schema/anyOf">json-schema/anyOf</a></b>
│   │           │                   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b>
│   │           │                   └── <b><a href="#json-schema/body">*json-schema/body*</a></b>
│   │           ├── <b><a href="#swagger/parameters">swagger/parameters</a></b>
│   │           │   <i>Renders the parameter table within a operation...</i>
│   │           │   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b>
│   │           │   └── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b>
│   │           ├── <b><a href="#swagger/responses">swagger/responses</a></b>
│   │           │   <i>Renders the responses section of an operation</i>
│   │           │   ├── <b><a href="#swagger/model">*swagger/model*</a></b>
│   │           │   └── <b><a href="#swagger/model">*swagger/model*</a></b>
│   │           └── <b><a href="#swagger/security">swagger/security</a></b>
│   │               <i>Renders the security definitions of the...</i>
│   └── <b><a href="#swagger/definitions">swagger/definitions</a></b>
│       <i>Renders the definition-section of the HTML-page.</i>
│       └── <b><a href="#swagger/model">*swagger/model*</a></b>
└── <b><a href="#base/footer">base/footer</a></b>
    <i>This partial is displayed at the bottom of the...</i></code></pre>
# Partial reference

## base/body

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/base/body.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


This partial renders the <body> of the HTML page.





Uses the following partials:
* [swagger/summary](#swagger/summary)
* [swagger/securityDefinitions](#swagger/securityDefinitions)
* [swagger/paths](#swagger/paths)
* [swagger/definitions](#swagger/definitions)

## base/footer

(<a href="https://github.com/nknapp/bootprint-base/blob/v0.4.0/handlebars/partials/base/footer.hbs">jump to source in <code>bootprint-base@0.4.0</code></a>)


This partial is displayed at the bottom of the HTML-body.
It is empty and can be overridden to include custom content in
the Bootprint-result.

* Parameters:
  * $context$: **object** - the whole input data    





## base/header

(<a href="https://github.com/nknapp/bootprint-base/blob/v0.4.0/handlebars/partials/base/header.hbs">jump to source in <code>bootprint-base@0.4.0</code></a>)


This partial is displayed at the top of the HTML-body.
It is empty and can be overridden to include custom content in
the Bootprint-result.

* Parameters:
  * $context$: **object** - the whole input data    





## base/title

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/base/title.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the page title

* Parameters:
  * $context$: **object** - the whole swagger definition    





## json-schema/additionalProperties

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/additionalProperties.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## json-schema/allOf

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/allOf.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/reference](#json-schema/reference)
* [json-schema/body](#json-schema/body)

## json-schema/anyOf

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/anyOf.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## json-schema/array-items

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/array-items.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/body](#json-schema/body)

## json-schema/body

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/body.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/reference](#json-schema/reference)
* [json-schema/properties](#json-schema/properties)
* [json-schema/additionalProperties](#json-schema/additionalProperties)
* [json-schema/array-items](#json-schema/array-items)
* [json-schema/allOf](#json-schema/allOf)
* [json-schema/anyOf](#json-schema/anyOf)

## json-schema/datatype

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/datatype.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Enum values





Default values (for non-enum types)





Uses the following partials:
* [json-schema/reference](#json-schema/reference)

## json-schema/definitions

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/definitions.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/main-panel](#json-schema/main-panel)

## json-schema/main-panel

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/main-panel.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## json-schema/properties

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/properties.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## json-schema/reference

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.5.0/handlebars/partials/json-schema/reference.hbs">jump to source in <code>bootprint-json-schema@0.5.0</code></a>)



## swagger/definitions

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/definitions.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the definition-section of the HTML-page.

* Parameters:
  * definitions: **Array<Definition>** - a list of JSON-subschemas.    




Uses the following partials:
* [swagger/model](#swagger/model)

## swagger/model

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/model.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders a json-schema model within swagger (calls json-schema-partials).

* Parameters:
  * model: **JsonSchema** - a JSON-schema definition    
  * title: **string** - the name of the definition    




Uses the following partials:
* [json-schema/main-panel](#json-schema/main-panel)

## swagger/operation

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/operation.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


This partial renders a box containing information about a single operation of the service
(such as calling a POST on the "/pets" resource).





Uses the following partials:
* [swagger/request-body](#swagger/request-body)
* [swagger/parameters](#swagger/parameters)
* [swagger/responses](#swagger/responses)
* [swagger/security](#swagger/security)

## swagger/parameters

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/parameters.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the parameter table within a operation definition.

* Parameters:
  * parameters: **Array<Parameter>** - a list of Swagger-Parameter objects    




Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/datatype](#json-schema/datatype)

## swagger/path

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/path.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders a single path definition with all its methods (GET, POST).





Uses the following partials:
* [swagger/operation](#swagger/operation)

## swagger/paths

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/paths.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the paths-section of the Rest-Service definition





Uses the following partials:
* [swagger/path](#swagger/path)

## swagger/request-body

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/request-body.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the request-body section of an operation.

* Parameters:
  * consumes: **Array<string>** - a list of request content type eligible for this operation.    
  * body: **Parameter** - the Parameter-Object of the `body`-parameter    




Uses the following partials:
* [swagger/model](#swagger/model)

## swagger/responses

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/responses.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the responses section of an operation

* Parameters:
  * responses: **Array<Response>** - a list of Swagger-Response definitions    
  * produces: **Array<string>** - a list of response content types produces by the operation    




Uses the following partials:
* [swagger/model](#swagger/model)
* [swagger/model](#swagger/model)

## swagger/security

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/security.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the security definitions of the Rest-service.

* Parameters:
  * security: **Array<Security>** - TODO    





## swagger/securityDefinitions

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/securityDefinitions.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders the security-section of the HTML-page
TODO: Parameters






## swagger/summary

(<a href="https://github.com/nknapp/bootprint-swagger/blob/v0.6.1/handlebars/partials/swagger/summary.hbs">jump to source in <code>bootprint-swagger@0.6.1</code></a>)


Renders a summary of this services, containing references to all operations and paths






