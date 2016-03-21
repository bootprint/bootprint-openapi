# Template structure

<pre><code>
<b><a href="#index.html">index.html</a></b>
│ <i>Default template for rendering the...</i>
├── <b><a href="#basetitle">base/title</a></b>
│   <i>Renders the page title</i>
├── <b><a href="#baseheader">base/header</a></b>
│   <i>This partial is displayed at the top of the...</i>
├─┬ <b><a href="#basebody">base/body</a></b>
│ │ <i>This partial renders the <body> of the HTML page.</i>
│ ├── <b><a href="#swaggertags">swagger/tags</a></b>
│ │   <i>Renders a summary based on the tags of this...</i>
│ ├── <b><a href="#swaggersummary">swagger/summary</a></b>
│ │   <i>Renders a summary of this services ignoring...</i>
│ ├── <b><a href="#swaggersecuritydefinitions">swagger/securityDefinitions</a></b>
│ │   <i>Renders the security-section of the...</i>
│ ├─┬ <b><a href="#swaggerpaths">swagger/paths</a></b>
│ │ │ <i>Renders the paths-section of the Rest-Service...</i>
│ │ └─┬ <b><a href="#swaggerpath">swagger/path</a></b>
│ │   │ <i>Renders a single path definition with all its...</i>
│ │   └─┬ <b><a href="#swaggeroperation">swagger/operation</a></b>
│ │     │ <i>This partial renders a box containing...</i>
│ │     ├─┬ <b><a href="#swaggerrequest-body">swagger/request-body</a></b>
│ │     │ │ <i>Renders the request-body section of an operation.</i>
│ │     │ ├── <b><a href="#swaggerlist-of-labels">swagger/list-of-labels</a></b>
│ │     │ │   <i>Renders an array of strings as list of labels</i>
│ │     │ ├── <b><a href="#swaggerlist-of-labels">*swagger/list-of-labels*</a></b>
│ │     │ │   
│ │     │ └─┬ <b><a href="#swaggermodel">swagger/model</a></b>
│ │     │   │ <i>Renders a json-schema model within swagger...</i>
│ │     │   └─┬ <b><a href="#json-schemamain-panel">json-schema/main-panel</a></b>
│ │     │     │ 
│ │     │     ├── <b><a href="#json-schemadatatype">json-schema/datatype</a></b>
│ │     │     │   <i>Enum values</i>
│ │     │     ├── <b><a href="#json-schemareference">json-schema/reference</a></b>
│ │     │     │   
│ │     │     └─┬ <b><a href="#json-schemabody">json-schema/body</a></b>
│ │     │       │ 
│ │     │       ├─┬ <b><a href="#json-schematype-object">json-schema/type-object</a></b>
│ │     │       │ │ <i>Renders the properties of an `object`</i>
│ │     │       │ ├─┬ <b><a href="#json-schemaproperties">json-schema/properties</a></b>
│ │     │       │ │ │ 
│ │     │       │ │ ├── <b><a href="#json-schemadatatype">*json-schema/datatype*</a></b>
│ │     │       │ │ │   
│ │     │       │ │ └── <b><a href="#json-schemabody">*json-schema/body*</a></b>
│ │     │       │ │     
│ │     │       │ └─┬ <b><a href="#json-schemaadditionalproperties">json-schema/additionalProperties</a></b>
│ │     │       │   │ 
│ │     │       │   ├── <b><a href="#json-schemadatatype">*json-schema/datatype*</a></b>
│ │     │       │   │   
│ │     │       │   └── <b><a href="#json-schemabody">*json-schema/body*</a></b>
│ │     │       │       
│ │     │       ├─┬ <b><a href="#json-schemaarray-items">json-schema/array-items</a></b>
│ │     │       │ │ 
│ │     │       │ ├── <b><a href="#json-schemadatatype">*json-schema/datatype*</a></b>
│ │     │       │ │   
│ │     │       │ └── <b><a href="#json-schemabody">*json-schema/body*</a></b>
│ │     │       │     
│ │     │       ├── <b><a href="#json-schematype-object">*json-schema/type-object*</a></b>
│ │     │       │   
│ │     │       ├─┬ <b><a href="#json-schemaallof">json-schema/allOf</a></b>
│ │     │       │ │ 
│ │     │       │ ├── <b><a href="#json-schemareference">*json-schema/reference*</a></b>
│ │     │       │ │   
│ │     │       │ └── <b><a href="#json-schemabody">*json-schema/body*</a></b>
│ │     │       │     
│ │     │       └─┬ <b><a href="#json-schemaanyof">json-schema/anyOf</a></b>
│ │     │         │ 
│ │     │         ├── <b><a href="#json-schemadatatype">*json-schema/datatype*</a></b>
│ │     │         │   
│ │     │         └── <b><a href="#json-schemabody">*json-schema/body*</a></b>
│ │     │             
│ │     ├─┬ <b><a href="#swaggerparameters">swagger/parameters</a></b>
│ │     │ │ <i>Renders the parameter table within a operation...</i>
│ │     │ ├── <b><a href="#swaggerparameterrow">swagger/parameterRow</a></b>
│ │     │ │   <i>Display a single parameter in a table row.</i>
│ │     │ └── <b><a href="#swaggerparameterrow">*swagger/parameterRow*</a></b>
│ │     │     
│ │     ├─┬ <b><a href="#swaggerresponses">swagger/responses</a></b>
│ │     │ │ <i>Renders the responses section of an operation</i>
│ │     │ ├── <b><a href="#swaggerlist-of-labels">*swagger/list-of-labels*</a></b>
│ │     │ │   
│ │     │ ├── <b><a href="#swaggerlist-of-labels">*swagger/list-of-labels*</a></b>
│ │     │ │   
│ │     │ ├─┬ <b><a href="#swaggerresponse">swagger/response</a></b>
│ │     │ │ │ <i>Renders details about a single response</i>
│ │     │ │ ├── <b><a href="#swaggermodel">*swagger/model*</a></b>
│ │     │ │ │   
│ │     │ │ ├─┬ <b><a href="#swaggerresponseheaderrow">swagger/responseHeaderRow</a></b>
│ │     │ │ │ │ <i>Display a single parameter in a table row.</i>
│ │     │ │ │ ├── <b><a href="#json-schemadatatype">*json-schema/datatype*</a></b>
│ │     │ │ │ │   
│ │     │ │ │ └── <b><a href="#json-schemadatatype">*json-schema/datatype*</a></b>
│ │     │ │ │     
│ │     │ │ └── <b><a href="#swaggerresponseheaderrow">*swagger/responseHeaderRow*</a></b>
│ │     │ │     
│ │     │ └── <b><a href="#swaggerresponse">*swagger/response*</a></b>
│ │     │     
│ │     └── <b><a href="#swaggersecurity">swagger/security</a></b>
│ │         <i>Renders the security definitions of the...</i>
│ ├─┬ <b><a href="#swaggerparameterdefinitions">swagger/parameterDefinitions</a></b>
│ │ │ <i>Global parameter definitions (see...</i>
│ │ └── <b><a href="#swaggerparameterrow">*swagger/parameterRow*</a></b>
│ │     
│ ├─┬ <b><a href="#swaggerresponsedefinitions">swagger/responseDefinitions</a></b>
│ │ │ <i>Renders the response definitions</i>
│ │ └── <b><a href="#swaggerresponse">*swagger/response*</a></b>
│ │     
│ └─┬ <b><a href="#swaggerdefinitions">swagger/definitions</a></b>
│   │ <i>Renders the definition-section of the HTML-page.</i>
│   └── <b><a href="#swaggermodel">*swagger/model*</a></b>
│       
└── <b><a href="#basefooter">base/footer</a></b>
    <i>This partial is displayed at the bottom of the...</i>
</code></pre>
# Partial reference

## base/body

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/base/body.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


This partial renders the <body> of the HTML page.





Uses the following partials:
* [swagger/tags](#swaggertags)
* [swagger/summary](#swaggersummary)
* [swagger/securityDefinitions](#swaggersecuritydefinitions)
* [swagger/paths](#swaggerpaths)
* [swagger/parameterDefinitions](#swaggerparameterdefinitions)
* [swagger/responseDefinitions](#swaggerresponsedefinitions)
* [swagger/definitions](#swaggerdefinitions)

## base/footer

(<a href="https://github.com/bootprint/bootprint-base/blob/v0.7.2/handlebars/partials/base/footer.hbs">jump to source in <code>bootprint-base@0.7.2</code></a>)


This partial is displayed at the bottom of the HTML-body.
It is empty and can be overridden to include custom content in
the Bootprint-result.

* Parameters:
  * $context$: **object** - the whole input data    





## base/header

(<a href="https://github.com/bootprint/bootprint-base/blob/v0.7.2/handlebars/partials/base/header.hbs">jump to source in <code>bootprint-base@0.7.2</code></a>)


This partial is displayed at the top of the HTML-body.
It is empty and can be overridden to include custom content in
the Bootprint-result.

* Parameters:
  * $context$: **object** - the whole input data    





## base/title

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/base/title.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the page title

* Parameters:
  * $context$: **object** - the whole swagger definition    





## json-schema/additionalProperties

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/additionalProperties.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schemadatatype)
* [json-schema/body](#json-schemabody)

## json-schema/allOf

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/allOf.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/reference](#json-schemareference)
* [json-schema/body](#json-schemabody)

## json-schema/anyOf

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/anyOf.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schemadatatype)
* [json-schema/body](#json-schemabody)

## json-schema/array-items

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/array-items.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schemadatatype)
* [json-schema/body](#json-schemabody)

## json-schema/body

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/body.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/type-object](#json-schematype-object)
* [json-schema/array-items](#json-schemaarray-items)
* [json-schema/type-object](#json-schematype-object)
* [json-schema/allOf](#json-schemaallof)
* [json-schema/anyOf](#json-schemaanyof)

## json-schema/datatype

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/datatype.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Enum values





min- and max-values





Default values (for non-enum types)






## json-schema/definitions

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/definitions.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/main-panel](#json-schemamain-panel)

## json-schema/main-panel

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/main-panel.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schemadatatype)
* [json-schema/reference](#json-schemareference)
* [json-schema/body](#json-schemabody)

## json-schema/properties

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/properties.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Uses the following partials:
* [json-schema/datatype](#json-schemadatatype)
* [json-schema/body](#json-schemabody)

## json-schema/reference

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/reference.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)



## json-schema/type-object

(<a href="https://github.com/nknapp/bootprint-json-schema/blob/v0.8.4/handlebars/partials/json-schema/type-object.hbs">jump to source in <code>bootprint-json-schema@0.8.4</code></a>)


Renders the properties of an `object`





Uses the following partials:
* [json-schema/properties](#json-schemaproperties)
* [json-schema/additionalProperties](#json-schemaadditionalproperties)

## swagger/definitions

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/definitions.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the definition-section of the HTML-page.

* Parameters:
  * definitions: **Array<Definition>** - a list of JSON-subschemas.    




Uses the following partials:
* [swagger/model](#swaggermodel)

## swagger/list-of-labels

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/list-of-labels.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders an array of strings as list of labels

* Parameters:
  * values: **Array<string>**     





## swagger/model

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/model.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders a json-schema model within swagger (calls json-schema-partials).

* Parameters:
  * model: **JsonSchema** - a JSON-schema definition    
  * title: **string** - the name of the definition    




Uses the following partials:
* [json-schema/main-panel](#json-schemamain-panel)

## swagger/operation

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/operation.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


This partial renders a box containing information about a single operation of the service
(such as calling a POST on the "/pets" resource).

* Parameters:
  * operation: **Operation** - a Swagger-Operation object.    
  * method: **string** - the http-method (GET, POST, DELETE, PUT, PATCH)    




Uses the following partials:
* [swagger/request-body](#swaggerrequest-body)
* [swagger/parameters](#swaggerparameters)
* [swagger/responses](#swaggerresponses)
* [swagger/security](#swaggersecurity)

## swagger/parameterDefinitions

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/parameterDefinitions.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Global parameter definitions (see https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#parametersDefinitionsObject)

* Parameters:
  * parameters: **object<Parameter>** - the parameter-definitions object    




Uses the following partials:
* [swagger/parameterRow](#swaggerparameterrow)

## swagger/parameterRow

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/parameterRow.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Display a single parameter in a table row.

* Parameters:
  * parameter: **Parameter** - a parameter object    
  * key: **string=** - a reference key (if present, this is display in an additional 
    column in front of the other columns    
  * $ref: **string=** - the reference path of the parameter, in case it is a reference to a default parameter    





## swagger/parameters

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/parameters.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the parameter table within a operation definition.

* Parameters:
  * parameters: **(Array<Parameter> | Object<Parameter>)** - a list of Swagger-Parameter objects
   If this is an object, an it is expected to be the global parameter list 
   https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#parametersDefinitionsObject
   and the key of each entry is display in a column in front of the other columns.    




Uses the following partials:
* [swagger/parameterRow](#swaggerparameterrow)
* [swagger/parameterRow](#swaggerparameterrow)

## swagger/path

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/path.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders a single path definition with all its methods (GET, POST).

* Parameters:
  * path: **string** - the request path    
  * pathItems: **object<Operation>** - a swagger [path-item-object](http://swagger.io/specification/#pathItemObject)    




Uses the following partials:
* [swagger/operation](#swaggeroperation)

## swagger/paths

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/paths.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the paths-section of the Rest-Service definition





Uses the following partials:
* [swagger/path](#swaggerpath)

## swagger/request-body

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/request-body.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the request-body section of an operation.

* Parameters:
  * consumes: **Array<string>** - a list of request content type eligible for this operation.    
  * body: **Parameter** - the Parameter-Object of the `body`-parameter    




Uses the following partials:
* [swagger/list-of-labels](#swaggerlist-of-labels)
* [swagger/list-of-labels](#swaggerlist-of-labels)
* [swagger/model](#swaggermodel)

## swagger/response

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/response.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders details about a single response

* Parameters:
  * response: **Response** - a swagger response-object    




Uses the following partials:
* [swagger/model](#swaggermodel)
* [swagger/responseHeaderRow](#swaggerresponseheaderrow)
* [swagger/responseHeaderRow](#swaggerresponseheaderrow)

## swagger/responseDefinitions

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/responseDefinitions.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the response definitions





Uses the following partials:
* [swagger/response](#swaggerresponse)

## swagger/responseHeaderRow

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/responseHeaderRow.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Display a single parameter in a table row.

* Parameters:
  * header: **Header** - a (Header)[https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#headerObject] object    
  * name: **string** - the name of  the response header    




Uses the following partials:
* [json-schema/datatype](#json-schemadatatype)
* [json-schema/datatype](#json-schemadatatype)

## swagger/responses

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/responses.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the responses section of an operation

* Parameters:
  * responses: **Array<Response>** - a list of Swagger-Response definitions    
  * produces: **Array<string>** - a list of response content types produced by the operation    




Uses the following partials:
* [swagger/list-of-labels](#swaggerlist-of-labels)
* [swagger/list-of-labels](#swaggerlist-of-labels)
* [swagger/response](#swaggerresponse)
* [swagger/response](#swaggerresponse)

## swagger/security

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/security.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the security definitions of the Rest-service.

* Parameters:
  * security: **Array<Security>** - TODO    





## swagger/securityDefinitions

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/securityDefinitions.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders the security-section of the HTML-page
TODO: Parameters






## swagger/summary

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/summary.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders a summary of this services ignoring tags, containing references to all operations and paths






## swagger/tags

(<a href="https://github.com/bootprint/bootprint-openapi/blob/v0.14.1/handlebars/partials/swagger/tags.hbs">jump to source in <code>bootprint-openapi@0.14.1</code></a>)


Renders a summary based on the tags of this services, containing references to all operations and paths

* Parameters:
  * tags: **Array<{name: string, summary: string, operations: object}>** - a list of tags    





