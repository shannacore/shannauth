# Shanna Auth — Shanna Studio

Shanna Auth is a privacy-focused browser extension for generating two-factor authentication codes. This project is maintained by Shanna Studio.

## Documentation

Read the documentation at [auth.shanna.id/docs](https://auth.shanna.id/docs). The English version is available at [auth.shanna.id/docs/en](https://auth.shanna.id/docs/en). The source pages are also included in `docs/`.

> Shanna Auth generates two-step verification codes in your browser.

## Available for Chrome, Firefox, and Microsoft Edge

[<img src="images/badge-chrome.svg" alt="Download Shanna Auth for Google Chrome" width="220" height="64" />](https://github.com/shannacore/shannauth/releases/latest) [<img src="images/badge-firefox.svg" alt="Download Shanna Auth for Firefox" width="220" height="64" />](https://github.com/shannacore/shannauth/releases/latest) [<img src="images/badge-edge.svg" alt="Download Shanna Auth for Microsoft Edge" width="220" height="64" />](https://github.com/shannacore/shannauth/releases/latest)


## Build Setup

``` bash
# install development dependencies
npm install
# compile
npm run [chrome, firefox, prod]
```

To reproduce a build:

``` bash
npm ci
npm run prod
```

For contribution guidelines, please open an issue or pull request in the [Shanna Auth repository](https://github.com/shannacore/shannauth).

## Development (Chrome)

``` bash
# install development dependencies
npm install
# compiles the Chrome extension to the `./test/chrome` directory
npm run dev:chrome
# load the unpacked extension from the `./test/chrome/ directory in Chrome
```

Note that Windows users should download a tool like [Git Bash](https://git-scm.com/download/win) or [Cygwin](http://cygwin.com/) to build.

## Acknowledgment

We would like to extend our heartfelt thanks to Laurent, the Chief Information Security Officer (CISO) of the University of Luxembourg, for the invaluable support and contribution to this project. During the development process, the CISO team provided critical security recommendations that helped us identify and address potential vulnerabilities, significantly enhancing the security and reliability of the project.

We especially want to acknowledge the University of Luxembourg's information security team for their selfless contribution, which not only facilitated the progress of this project but also had a positive impact on the broader open-source community. We recognize that the success of open-source software depends heavily on collaboration and support from various stakeholders, and the involvement of the University of Luxembourg has allowed us to offer a more secure and dependable product to a wider audience.

We understand that while open-source software is free, maintaining and improving these projects requires significant resources. The University of Luxembourg’s information security team has demonstrated their strong commitment to the open-source community, contributing not just within their university but to users and developers globally. We hope this acknowledgment will help them continue to secure the support and resources necessary to further advance open-source initiatives.

Once again, we express our sincere gratitude to the University of Luxembourg's CISO team for their valuable advice and assistance.
