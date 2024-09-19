<h1 align="center"> My CLI Tool </h1>

![Custom CLI Tool For Learning](https://socialify.git.ci/king04aman/My-Custom-CLI-Tool/image?description=1&font=Jost&language=1&logo=https%3A%2F%2Fimages.weserv.nl%2F%3Furl%3Dhttps%3A%2F%2Favatars.githubusercontent.com%2Fu%2F62813940%3Fv%3D4%26h%3D250%26w%3D250%26fit%3Dcover%26mask%3Dcircle%26maxage%3D7d&name=1&owner=1&pattern=Floating%20Cogs&theme=Dark)


Welcome to My CLI Tool! This command line interface (CLI) tool is designed for learning. It serves as a practice project to learn about creating command line applications in javascript.

## Features

- **Command Line Interface**: Intuitive commands for easy usage.
- **Configuration Management**: Load and validate configuration files.
- **User Communication**: Clear logging for user feedback.

## Libraries Used

This CLI tool utilizes the following libraries:

- **arg**: For parsing command line arguments.
- **chalk**: For styling terminal string output.
- **debug**: For debugging and logging messages.
- **cosmi**: For configuration management.
- **ajv**: For JSON schema validation.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- NodeJS

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/king04aman/My-Custom-CLI-Tool.git
   cd My-Custom-CLI-Tool
   ```

### Install the required dependencies:
```bash
npm install
```

### Make the tool executable (if necessary):

```bash
chmod +x my_cli_tool
```

## Usage

Run the tool from the command line:
```bash
tool [command]
```
## Commands
- --start: Starting Application Command
- --build: Build Application

## Logging

The tool utilizes a comprehensive logging mechanism to provide feedback, warnings, and errors. 

- **Debugging**: Use the `DEBUG` environment variable to enable detailed debugging logs, which will help you track the internal workings of the tool.
- **Warnings and Errors**: The logger will display warning and error messages to inform you of any issues that arise during execution.

Logs will be printed to the console and can also be redirected to a file for later review:

```bash
tool [command] [options] > output.log
```

To enable debugging logs, you can run:
```bash
DEBUG=my_cli_tool ./my_cli_tool [command] [options]
```

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request.

1. Fork the project
1. Create your feature branch (git checkout -b feature/YourFeature)
1. Commit your changes (git commit -m 'Add some feature')
1. Push to the branch (git push origin feature/YourFeature)
1. Open a pull request

## License
This project is licensed under the [MIT License](LICENSE).

