module.exports = {
  prompts: function(options) {
    return [
      {
        type: 'input',
        name: 'projectName',
        message: 'What do you want to call your project?',
        default: options.dirName,
        validate: function (userInput) {
          return (userInput && userInput !== '') ? true : 'Project name is required'
        }
      }
    ]
  }
}
