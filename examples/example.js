// Load bootprint
require('bootprint')
  // Load bootprint-swagger
  .load(require('../'))
  // Customize configuration, override any options
  .merge({ /* Any other configuration */})
  // Specify build source and target
  .build('http://petstore.swagger.io/v2/swagger.json', 'target')
  // Generate swagger-documentation into "target" directory
  .generate()
  .done(console.log)
