module.exports = {
  prompts: function(options) {
    return [
      {
        type: 'input',
        name: 'projectName',
        message: 'What do you want to call your project?',
        default: options.dirName
      },
      {
        type: 'input',
        name: 'dbHost',
        message: 'Mongo host url:',
        default: '127.0.0.1'
      },
      {
        type: 'input',
        name: 'dbName',
        message: 'Mongo database name:',
        default: options.dirName,
        validate: function (userInput) {
          return (userInput && userInput !== '') ? true : 'Database name is required'
        }
      }
    ]
  }
}
