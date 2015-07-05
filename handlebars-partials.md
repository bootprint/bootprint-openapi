# Partial reference

## [base/body](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/base/body.hbs#L7)

This partial renders the <body> of the HTML page.




## [base/title](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/base/title.hbs#L6)

Renders the page title

* Parameters:
  * $context$: **object** - the whole swagger definition    



## [json-schema/datatype](https://github.com/nknapp/bootprint-json-schema/blob/master/handlebars/partials/json-schema/datatype.hbs#L18)

Enum values




## [json-schema/datatype](https://github.com/nknapp/bootprint-json-schema/blob/master/handlebars/partials/json-schema/datatype.hbs#L32)

Default values (for non-enum types)




## [swagger/definitions](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/definitions.hbs#L7)

Renders the definition-section of the HTML-page.

* Parameters:
  * definitions: **Array<Definition>** - a list of JSON-subschemas.    



## [swagger/model](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/model.hbs#L8)

Renders a json-schema model within swagger (calls json-schema-partials).

* Parameters:
  * model: **JsonSchema** - a JSON-schema definition    
  * title: **string** - the name of the definition    



## [swagger/operation](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/operation.hbs#L9)

This partial renders a box containing information about a single operation of the service
(such as calling a POST on the "/pets" resource).




## [swagger/parameters](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/parameters.hbs#L7)

Renders the parameter table within a operation definition.

* Parameters:
  * parameters: **Array<Parameter>** - a list of Swagger-Parameter objects    



## [swagger/path](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/path.hbs#L9)

Renders a single path definition with all its methods (GET, POST).




## [swagger/paths](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/paths.hbs#L6)

Renders the paths-section of the Rest-Service definition




## [swagger/request-body](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/request-body.hbs#L8)

Renders the request-body section of an operation.

* Parameters:
  * consumes: **Array<string>** - a list of request content type eligible for this operation.    
  * body: **Parameter** - the Parameter-Object of the `body`-parameter    



## [swagger/responses](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/responses.hbs#L8)

Renders the responses section of an operation

* Parameters:
  * responses: **Array<Response>** - a list of Swagger-Response definitions    
  * produces: **Array<string>** - a list of response content types produces by the operation    



## [swagger/security](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/security.hbs#L6)

Renders the security definitions of the Rest-service.

* Parameters:
  * security: **Array<Security>** - TODO    



## [swagger/securityDefinitions](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/securityDefinitions.hbs#L7)

Renders the security-section of the HTML-page
TODO: Parameters




## [swagger/summary](https://github.com/nknapp/bootprint-swagger/blob/master/handlebars/partials/swagger/summary.hbs#L6)

Renders a summary of this services, containing references to all operations and paths




