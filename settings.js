module.exports = {
  prompts: [
    {
      type: 'input',
      name: 'projectName',
      message: 'What do you want to call your project?',
      validate: function (userInput) {
        return (userInput && userInput !== '') ? true : 'Project name is required'
      }
    }
  ]
}
