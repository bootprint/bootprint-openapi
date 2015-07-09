# Template structure

<pre><code><b><a href="#index.html">index.html</a></b><br/>
<i>Default template for rendering the...</i>
├── <b><a href="#base/title">base/title</a></b><br/>
│   <i>Renders the page title</i>
├── <b><a href="#base/header">base/header</a></b><br/>
│   <i>This partial is displayed at the top of the...</i>
├── <b><a href="#base/body">base/body</a></b><br/>
│   <i>This partial renders the <body> of the HTML page.</i>
│   ├── <b><a href="#swagger/summary">swagger/summary</a></b><br/>
│   │   <i>Renders a summary of this services, containing...</i>
│   ├── <b><a href="#swagger/securityDefinitions">swagger/securityDefinitions</a></b><br/>
│   │   <i>Renders the security-section of the...</i>
│   ├── <b><a href="#swagger/paths">swagger/paths</a></b><br/>
│   │   <i>Renders the paths-section of the Rest-Service...</i>
│   │   └── <b><a href="#swagger/path">swagger/path</a></b><br/>
│   │       <i>Renders a single path definition with all its...</i>
│   │       └── <b><a href="#swagger/operation">swagger/operation</a></b><br/>
│   │           <i>This partial renders a box containing...</i>
│   │           ├── <b><a href="#swagger/request-body">swagger/request-body</a></b><br/>
│   │           │   <i>Renders the request-body section of an operation.</i>
│   │           │   └── <b><a href="#swagger/model">swagger/model</a></b><br/>
│   │           │       <i>Renders a json-schema model within swagger...</i>
│   │           │       └── <b><a href="#json-schema/main-panel">json-schema/main-panel</a></b><br/>
│   │           │           ├── <b><a href="#json-schema/datatype">json-schema/datatype</a></b><br/>
│   │           │           │   <i>Enum values</i>
│   │           │           │   └── <b><a href="#json-schema/reference">json-schema/reference</a></b><br/>
│   │           │           └── <b><a href="#json-schema/body">json-schema/body</a></b><br/>
│   │           │               ├── <b><a href="#json-schema/reference">*json-schema/reference*</a></b><br/>
│   │           │               ├── <b><a href="#json-schema/properties">json-schema/properties</a></b><br/>
│   │           │               │   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b><br/>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b><br/>
│   │           │               ├── <b><a href="#json-schema/additionalProperties">json-schema/additionalProperties</a></b><br/>
│   │           │               │   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b><br/>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b><br/>
│   │           │               ├── <b><a href="#json-schema/array-items">json-schema/array-items</a></b><br/>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b><br/>
│   │           │               ├── <b><a href="#json-schema/allOf">json-schema/allOf</a></b><br/>
│   │           │               │   ├── <b><a href="#json-schema/reference">*json-schema/reference*</a></b><br/>
│   │           │               │   └── <b><a href="#json-schema/body">*json-schema/body*</a></b><br/>
│   │           │               └── <b><a href="#json-schema/anyOf">json-schema/anyOf</a></b><br/>
│   │           │                   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b><br/>
│   │           │                   └── <b><a href="#json-schema/body">*json-schema/body*</a></b><br/>
│   │           ├── <b><a href="#swagger/parameters">swagger/parameters</a></b><br/>
│   │           │   <i>Renders the parameter table within a operation...</i>
│   │           │   ├── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b><br/>
│   │           │   └── <b><a href="#json-schema/datatype">*json-schema/datatype*</a></b><br/>
│   │           ├── <b><a href="#swagger/responses">swagger/responses</a></b><br/>
│   │           │   <i>Renders the responses section of an operation</i>
│   │           │   ├── <b><a href="#swagger/model">*swagger/model*</a></b><br/>
│   │           │   └── <b><a href="#swagger/model">*swagger/model*</a></b><br/>
│   │           └── <b><a href="#swagger/security">swagger/security</a></b><br/>
│   │               <i>Renders the security definitions of the...</i>
│   └── <b><a href="#swagger/definitions">swagger/definitions</a></b><br/>
│       <i>Renders the definition-section of the HTML-page.</i>
│       └── <b><a href="#swagger/model">*swagger/model*</a></b><br/>
└── <b><a href="#base/footer">base/footer</a></b><br/>
    <i>This partial is displayed at the bottom of the...</i></code></pre>
# Partial reference

## <a name="base/body">base/body</a> (bootprint-swagger)

This partial renders the <body> of the HTML page.





Uses the following partials:
* [swagger/summary](#swagger/summary)
* [swagger/securityDefinitions](#swagger/securityDefinitions)
* [swagger/paths](#swagger/paths)
* [swagger/definitions](#swagger/definitions)

## <a name="base/footer">base/footer</a> (bootprint-base)

This partial is displayed at the bottom of the HTML-body.
It is empty and can be overridden to include custom content in
the Bootprint-result.

* Parameters:
  * $context$: **object** - the whole input data    





## <a name="base/header">base/header</a> (bootprint-base)

This partial is displayed at the top of the HTML-body.
It is empty and can be overridden to include custom content in
the Bootprint-result.

* Parameters:
  * $context$: **object** - the whole input data    





## <a name="base/title">base/title</a> (bootprint-swagger)

Renders the page title

* Parameters:
  * $context$: **object** - the whole swagger definition    





## <a name="json-schema/additionalProperties">json-schema/additionalProperties</a> 

Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## <a name="json-schema/allOf">json-schema/allOf</a> 

Uses the following partials:
* [json-schema/reference](#json-schema/reference)
* [json-schema/body](#json-schema/body)

## <a name="json-schema/anyOf">json-schema/anyOf</a> 

Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## <a name="json-schema/array-items">json-schema/array-items</a> 

Uses the following partials:
* [json-schema/body](#json-schema/body)

## <a name="json-schema/body">json-schema/body</a> 

Uses the following partials:
* [json-schema/reference](#json-schema/reference)
* [json-schema/properties](#json-schema/properties)
* [json-schema/additionalProperties](#json-schema/additionalProperties)
* [json-schema/array-items](#json-schema/array-items)
* [json-schema/allOf](#json-schema/allOf)
* [json-schema/anyOf](#json-schema/anyOf)

## <a name="json-schema/datatype">json-schema/datatype</a> (bootprint-json-schema)

Enum values





Default values (for non-enum types)





Uses the following partials:
* [json-schema/reference](#json-schema/reference)

## <a name="json-schema/definitions">json-schema/definitions</a> 

Uses the following partials:
* [json-schema/main-panel](#json-schema/main-panel)

## <a name="json-schema/main-panel">json-schema/main-panel</a> 

Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## <a name="json-schema/properties">json-schema/properties</a> 

Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/body](#json-schema/body)

## <a name="json-schema/reference">json-schema/reference</a> 


## <a name="swagger/definitions">swagger/definitions</a> (bootprint-swagger)

Renders the definition-section of the HTML-page.

* Parameters:
  * definitions: **Array<Definition>** - a list of JSON-subschemas.    




Uses the following partials:
* [swagger/model](#swagger/model)

## <a name="swagger/model">swagger/model</a> (bootprint-swagger)

Renders a json-schema model within swagger (calls json-schema-partials).

* Parameters:
  * model: **JsonSchema** - a JSON-schema definition    
  * title: **string** - the name of the definition    




Uses the following partials:
* [json-schema/main-panel](#json-schema/main-panel)

## <a name="swagger/operation">swagger/operation</a> (bootprint-swagger)

This partial renders a box containing information about a single operation of the service
(such as calling a POST on the "/pets" resource).





Uses the following partials:
* [swagger/request-body](#swagger/request-body)
* [swagger/parameters](#swagger/parameters)
* [swagger/responses](#swagger/responses)
* [swagger/security](#swagger/security)

## <a name="swagger/parameters">swagger/parameters</a> (bootprint-swagger)

Renders the parameter table within a operation definition.

* Parameters:
  * parameters: **Array<Parameter>** - a list of Swagger-Parameter objects    




Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/datatype](#json-schema/datatype)

## <a name="swagger/path">swagger/path</a> (bootprint-swagger)

Renders a single path definition with all its methods (GET, POST).





Uses the following partials:
* [swagger/operation](#swagger/operation)

## <a name="swagger/paths">swagger/paths</a> (bootprint-swagger)

Renders the paths-section of the Rest-Service definition





Uses the following partials:
* [swagger/path](#swagger/path)

## <a name="swagger/request-body">swagger/request-body</a> (bootprint-swagger)

Renders the request-body section of an operation.

* Parameters:
  * consumes: **Array<string>** - a list of request content type eligible for this operation.    
  * body: **Parameter** - the Parameter-Object of the `body`-parameter    




Uses the following partials:
* [swagger/model](#swagger/model)

## <a name="swagger/responses">swagger/responses</a> (bootprint-swagger)

Renders the responses section of an operation

* Parameters:
  * responses: **Array<Response>** - a list of Swagger-Response definitions    
  * produces: **Array<string>** - a list of response content types produces by the operation    




Uses the following partials:
* [swagger/model](#swagger/model)
* [swagger/model](#swagger/model)

## <a name="swagger/security">swagger/security</a> (bootprint-swagger)

Renders the security definitions of the Rest-service.

* Parameters:
  * security: **Array<Security>** - TODO    





## <a name="swagger/securityDefinitions">swagger/securityDefinitions</a> (bootprint-swagger)

Renders the security-section of the HTML-page
TODO: Parameters






## <a name="swagger/summary">swagger/summary</a> (bootprint-swagger)

Renders a summary of this services, containing references to all operations and paths






