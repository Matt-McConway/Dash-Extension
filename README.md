<!-- Elaborate template from: https://github.com/othneildrew/Best-README-Template -->


<!-- PROJECT HEADER -->
<br />
<p align="center">
  <a href="https://github.com/Matt-McConway/Dash-Extension">
    <img src="docs/images/temp-logo.png" alt="Dash Logo" width="80" height="80">
  </a>

  <h1 align="center">Dash</h1>

  <p align="center">
    Dash is a helpful browser extension that enhances your experience with Trade Me
    <br />
    <!-- Link to store
    <a href="">Try it out</a>
    ·
    --> 
    <a href="https://github.com/Matt-McConway/Dash-Extension/issues">Request Feature 💡</a>
    ·
    <a href="https://github.com/Matt-McConway/Dash-Extension/issues">Report Bug 🐛</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

<!-- Screenshot to come [![Screenshot of Dash][dash-screenshot]](link to listing on chrome store) -->
I love browsing TradeMe's One Dollar Listings, and I wanted a way to do that with a little less friction. So I created Dash, a browser extension that provides quick and easy access to those listings no matter what web page you're on.

I also took this project as an opportunity to build on my react and web dev skills, and learn new things such as:

* Publishing/Owning/managing a product
* Project configuration & architecture/structure
* Intentional/minimal inclusion of dependencies
* Accessibility
* OAuth flow
* Building reusable hooks
* Unit tests
* Tailwind CSS
* Typescript


### Built With

* [Preact](https://preactjs.com/)
* [TailwindCSS](https://tailwindcss.com/)


## Getting Started

The following will get you set up to work on the project:


### Prerequisites

I use [Volta](https://volta.sh/) to pin versions of node/yarn to ensure consistency between environments.


### Installation

1. Clone the repo
2. Install packages
   ```sh
   yarn
   ```
3. Register a test application for [TradeMe Sandbox](https://developer.trademe.co.nz/api-overview/registering-an-application/)
4. Enter your API details in a `.env` file at the root of the project - see `sample.env` for an example.


## Usage

There are a couple of scripts included in the project


### Start
To run a local dev server that watches your code for hot reload thanks to this Parcel [config](https://www.npmjs.com/package/@parcel/config-webextension)
```sh
  yarn start
```
And add the unpacked extension from the `dist` folder [here](chrome://extensions/)

### Build
To build for production run:
```sh
  yarn build
```
You can then pack the extension that was built in `dist/prod`


## Roadmap

Using this [Github Project](https://github.com/Matt-McConway/Dash-Extension/projects/1) as a Kanban board / roadmap

You can also take a look at the [open issues](https://github.com/Matt-McConway/Dash-Extension/issues).


## Contributing

Have an idea to improve the project? Any contributions you make are **greatly** appreciated!

1. Fork the project
2. Create your feature branch as `feature/feature-name` or `fix/fix-name`
3. Commit your changes - I try to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
4. Push your changes
5. Open a pull request here, and I'll take a look 😁


## License

Distributed under the MIT License. See `LICENSE.md` for more information.


## Contact

Matt McConway - [@MatthewMcConway](https://twitter.com/MatthewMcConway) - matt@mcconway.nz

Project Link: [https://github.com/Matt-McConway/Dash-Extension](https://github.com/Matt-McConway/Dash-Extension)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[dash-screenshot]: docs/images/screenshot.png