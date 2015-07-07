# Template structure

<pre><code><a href="#index.html">index.html</a>
├── <a href="#base/title">base/title</a>
├── <a href="#base/header">base/header</a>
├── <a href="#base/body">base/body</a>
│   ├── <a href="#swagger/summary">swagger/summary</a>
│   ├── <a href="#swagger/securityDefinitions">swagger/securityDefinitions</a>
│   ├── <a href="#swagger/paths">swagger/paths</a>
│   │   └── <a href="#swagger/path">swagger/path</a>
│   │       └── <a href="#swagger/operation">swagger/operation</a>
│   │           ├── <a href="#swagger/request-body">swagger/request-body</a>
│   │           │   └── <a href="#swagger/model">swagger/model</a>
│   │           │       └── <a href="#json-schema/main-panel">json-schema/main-panel</a>
│   │           │           ├── <a href="#json-schema/datatype">json-schema/datatype</a>
│   │           │           │   └── <a href="#json-schema/reference">json-schema/reference</a>
│   │           │           └── <a href="#json-schema/body">json-schema/body</a>
│   │           │               ├── <a href="#json-schema/reference">*json-schema/reference*</a>
│   │           │               ├── <a href="#json-schema/properties">json-schema/properties</a>
│   │           │               │   ├── <a href="#json-schema/datatype">*json-schema/datatype*</a>
│   │           │               │   └── <a href="#json-schema/body">*json-schema/body*</a>
│   │           │               ├── <a href="#json-schema/additionalProperties">json-schema/additionalProperties</a>
│   │           │               │   ├── <a href="#json-schema/datatype">*json-schema/datatype*</a>
│   │           │               │   └── <a href="#json-schema/body">*json-schema/body*</a>
│   │           │               ├── <a href="#json-schema/array-items">json-schema/array-items</a>
│   │           │               │   └── <a href="#json-schema/body">*json-schema/body*</a>
│   │           │               ├── <a href="#json-schema/allOf">json-schema/allOf</a>
│   │           │               │   ├── <a href="#json-schema/reference">*json-schema/reference*</a>
│   │           │               │   └── <a href="#json-schema/body">*json-schema/body*</a>
│   │           │               └── <a href="#json-schema/anyOf">json-schema/anyOf</a>
│   │           │                   ├── <a href="#json-schema/datatype">*json-schema/datatype*</a>
│   │           │                   └── <a href="#json-schema/body">*json-schema/body*</a>
│   │           ├── <a href="#swagger/parameters">swagger/parameters</a>
│   │           │   ├── <a href="#json-schema/datatype">*json-schema/datatype*</a>
│   │           │   └── <a href="#json-schema/datatype">*json-schema/datatype*</a>
│   │           ├── <a href="#swagger/responses">swagger/responses</a>
│   │           │   ├── <a href="#swagger/model">*swagger/model*</a>
│   │           │   └── <a href="#swagger/model">*swagger/model*</a>
│   │           └── <a href="#swagger/security">swagger/security</a>
│   └── <a href="#swagger/definitions">swagger/definitions</a>
│       └── <a href="#swagger/model">*swagger/model*</a>
└── <a href="#base/footer">base/footer</a></code></pre>
# Partial reference

## <a name="base/body">base/body</a>

This partial renders the <body> of the HTML page.





Uses the following partials:
* [swagger/summary](#swagger/summary)
* [swagger/securityDefinitions](#swagger/securityDefinitions)
* [swagger/paths](#swagger/paths)
* [swagger/definitions](#swagger/definitions)

## <a name="base/footer">base/footer</a>


## <a name="base/header">base/header</a>


## <a name="base/title">base/title</a>

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

## <a name="json-schema/datatype">json-schema/datatype</a>

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


## <a name="swagger/definitions">swagger/definitions</a>

Renders the definition-section of the HTML-page.

* Parameters:
  * definitions: **Array<Definition>** - a list of JSON-subschemas.    




Uses the following partials:
* [swagger/model](#swagger/model)

## <a name="swagger/model">swagger/model</a>

Renders a json-schema model within swagger (calls json-schema-partials).

* Parameters:
  * model: **JsonSchema** - a JSON-schema definition    
  * title: **string** - the name of the definition    




Uses the following partials:
* [json-schema/main-panel](#json-schema/main-panel)

## <a name="swagger/operation">swagger/operation</a>

This partial renders a box containing information about a single operation of the service
(such as calling a POST on the "/pets" resource).





Uses the following partials:
* [swagger/request-body](#swagger/request-body)
* [swagger/parameters](#swagger/parameters)
* [swagger/responses](#swagger/responses)
* [swagger/security](#swagger/security)

## <a name="swagger/parameters">swagger/parameters</a>

Renders the parameter table within a operation definition.

* Parameters:
  * parameters: **Array<Parameter>** - a list of Swagger-Parameter objects    




Uses the following partials:
* [json-schema/datatype](#json-schema/datatype)
* [json-schema/datatype](#json-schema/datatype)

## <a name="swagger/path">swagger/path</a>

Renders a single path definition with all its methods (GET, POST).





Uses the following partials:
* [swagger/operation](#swagger/operation)

## <a name="swagger/paths">swagger/paths</a>

Renders the paths-section of the Rest-Service definition





Uses the following partials:
* [swagger/path](#swagger/path)

## <a name="swagger/request-body">swagger/request-body</a>

Renders the request-body section of an operation.

* Parameters:
  * consumes: **Array<string>** - a list of request content type eligible for this operation.    
  * body: **Parameter** - the Parameter-Object of the `body`-parameter    




Uses the following partials:
* [swagger/model](#swagger/model)

## <a name="swagger/responses">swagger/responses</a>

Renders the responses section of an operation

* Parameters:
  * responses: **Array<Response>** - a list of Swagger-Response definitions    
  * produces: **Array<string>** - a list of response content types produces by the operation    




Uses the following partials:
* [swagger/model](#swagger/model)
* [swagger/model](#swagger/model)

## <a name="swagger/security">swagger/security</a>

Renders the security definitions of the Rest-service.

* Parameters:
  * security: **Array<Security>** - TODO    





## <a name="swagger/securityDefinitions">swagger/securityDefinitions</a>

Renders the security-section of the HTML-page
TODO: Parameters






## <a name="swagger/summary">swagger/summary</a>

Renders a summary of this services, containing references to all operations and paths






