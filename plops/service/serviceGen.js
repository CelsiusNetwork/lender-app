module.exports = {
  description: 'Creates a service for fetching data from server',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your service name? (eg. ethereum)'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/services/{{pascalCase name}}Service.js',
      templateFile: 'plops/service/Service.js.txt'
    }
  ]
}
