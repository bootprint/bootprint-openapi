# Partial reference

## [base/body](handlebars/partials/base/body.hbs)

This partial renders the <body> of the HTML page.




## [base/title](handlebars/partials/base/title.hbs)

Renders the page title

* Parameters:
  * $context$: **object** - the whole swagger definition    



## [json-schema/datatype](../bootprint-json-schema/handlebars/partials/json-schema/datatype.hbs)

Enum values




## [json-schema/datatype](../bootprint-json-schema/handlebars/partials/json-schema/datatype.hbs)

Default values (for non-enum types)




## [swagger/definitions](handlebars/partials/swagger/definitions.hbs)

Renders the definition-section of the HTML-page.

* Parameters:
  * definitions: **Array<Definition>** - a list of JSON-subschemas.    



## [swagger/model](handlebars/partials/swagger/model.hbs)

Renders a json-schema model within swagger (calls json-schema-partials).

* Parameters:
  * model: **JsonSchema** - a JSON-schema definition    
  * title: **string** - the name of the definition    



## [swagger/operation](handlebars/partials/swagger/operation.hbs)

This partial renders a box containing information about a single operation of the service
(such as calling a POST on the "/pets" resource).




## [swagger/parameters](handlebars/partials/swagger/parameters.hbs)

Renders the parameter table within a operation definition.

* Parameters:
  * parameters: **Array<Parameter>** - a list of Swagger-Parameter objects    



## [swagger/path](handlebars/partials/swagger/path.hbs)

Renders a single path definition with all its methods (GET, POST).




## [swagger/paths](handlebars/partials/swagger/paths.hbs)

Renders the paths-section of the Rest-Service definition




## [swagger/request-body](handlebars/partials/swagger/request-body.hbs)

Renders the request-body section of an operation.

* Parameters:
  * consumes: **Array<string>** - a list of request content type eligible for this operation.    
  * body: **Parameter** - the Parameter-Object of the `body`-parameter    



## [swagger/responses](handlebars/partials/swagger/responses.hbs)

Renders the responses section of an operation

* Parameters:
  * responses: **Array<Response>** - a list of Swagger-Response definitions    
  * produces: **Array<string>** - a list of response content types produces by the operation    



## [swagger/security](handlebars/partials/swagger/security.hbs)

Renders the security definitions of the Rest-service.

* Parameters:
  * security: **Array<Security>** - TODO    



## [swagger/securityDefinitions](handlebars/partials/swagger/securityDefinitions.hbs)

Renders the security-section of the HTML-page
TODO: Parameters




## [swagger/summary](handlebars/partials/swagger/summary.hbs)

Renders a summary of this services, containing references to all operations and paths




