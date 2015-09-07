# Joker Boilerplate

> ![gulp](https://img.shields.io/badge/gulp-%5E3.9.0-green.svg)
> ![del](https://img.shields.io/badge/del-%5E2.0.1-green.svg)
> ![browser-sync](https://img.shields.io/badge/browser--sync-%5E1.3.0-green.svg)
> ![gulp-imagemin](https://img.shields.io/badge/gulp--minify--css-%5E1.0.0-green.svg)
> ![gulp-minify-css](https://img.shields.io/badge/gulp--imagemin-%5E2.2.1-green.svg)
> ![gulp-minify-html](https://img.shields.io/badge/gulp--minify--html-%5E0.1.5-green.svg)
> ![gulp-replace](https://img.shields.io/badge/gulp--replace-%5E0.5.4-green.svg)
> ![gulp-sass](https://img.shields.io/badge/gulp--sass-%5E1.2.0-green.svg)
> ![gulp-uglify](https://img.shields.io/badge/gulp--uglify-%5E1.2.0-green.svg)
> ![run-sequence](https://img.shields.io/badge/run--sequence-%5E1.0.2-green.svg)
> ![wiredep](https://img.shields.io/badge/wiredep-~2.2.2-green.svg)
> ![wrench](https://img.shields.io/badge/wrench-~1.5.8-green.svg)


### Installing Gulp e Bower
OBS: to install gulp and bower, you must install NodeJS:

```
https://nodejs.org/
```

installing Gulp:

```
npm install -g gulp
```

installing Bower:

```
npm install -g bower
```

### Shortcuts

* gulp serve [start the server on port :3000]
* gulp serve:dist [start the server on port :3000 from dist/]
* gulp [build a distributed version to dist/]


### Structure

```
joker/
├── gulp/
│   ├── build.js
│   ├── config.js
│   ├── copy.js
│   ├── custom.js
│   ├── dependences.js
│   └── server.js  
├── node_modules/
├── src/
│    ├── index.html
│    ├── favicon.ico
│    ├── bower_components/
│    ├── downloads/
│    └── assets/
│	    ├── fonts/
│	    ├── images/
│	    ├── scripts/
│	    └── styles/
├── package.json
├── bower.json
├── gulpfile.js
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jshintrc
└── README.md
```

### Gustavo Melo - 2015




