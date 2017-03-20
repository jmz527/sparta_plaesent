# sparta_plaesent
Webpage for IdeaWork Studios coding challenge

# Description

This is a simple, responsive webpage with a carousel

# Technologies Used:

NodeJS + Express + ReactJS + Babel + Webpack + Gulp + SASS


# Installation Instructions:

First, clone this repo to a directory on your local machine and run npm install:

```sh
git@github.com:jmz527/sparta_plaesent.git
cd sparta_plaesent/
npm install
```

After that's done, run the "gulp build" command:

```sh
gulp build
```

Now with your packages installed, your SASS & JS files minified & the database populated...

...it's now time to start up your express server:

```sh
node server.js
```

And you should be good to go! Open up [http://localhost:3000](http://localhost:3000) and take a look!


# Routes:

```sh
GET  '/'
```

# Planning & Wireframes:


# Issues:

- Express Server is a bit of overkill here, caused me some greif
- Much of the MaterializeCSS framework went unused, flexbox saved the day


# TODO:


# Directory Tree:

```sh
.
├── INSTRUCTIONS.md
├── Procfile
├── README.md
├── app
│   ├── components
│   │   ├── carousel.js
│   │   ├── carousel_item.js
│   │   ├── footer.js
│   │   ├── grid_item.js
│   │   ├── header.js
│   │   ├── main.js
│   │   └── masonry_grid.js
│   ├── fonts
│   │   ├── ACaslonPro-Regular.otf
│   │   └── Springville-Regular3.otf
│   ├── index.js
│   ├── public
│   │   ├── imgs
│   │   │   ├── grid-img-1.png
│   │   │   ├── grid-img-2.png
│   │   │   ├── grid-img-3.png
│   │   │   ├── grid-img-4.png
│   │   │   ├── grid-img-5.png
│   │   │   ├── grid-img-6.png
│   │   │   ├── hamburger.png
│   │   │   ├── hero-img-1.jpg
│   │   │   ├── hero-img-2.jpg
│   │   │   ├── hero.png
│   │   │   ├── logo.eps
│   │   │   ├── logo.png
│   │   │   └── logo.svg
│   │   ├── js/
│   │   ├── materialize.css
│   │   └── style.css
│   └── sass
│       ├── components/
│       ├── materialize.scss
│       ├── splice
│       │   ├── base.scss
│       │   ├── carousel.scss
│       │   ├── footer.scss
│       │   ├── header.scss
│       │   ├── masonry_grid.scss
│       │   └── media.scss
│       └── style.scss
├── build
│   ├── bundle.js
│   ├── imgs
│   │   ├── grid-img-1.png
│   │   ├── grid-img-2.png
│   │   ├── grid-img-3.png
│   │   ├── grid-img-4.png
│   │   ├── grid-img-5.png
│   │   ├── grid-img-6.png
│   │   ├── hamburger.png
│   │   ├── hero-img-1.jpg
│   │   ├── hero-img-2.jpg
│   │   ├── hero.png
│   │   ├── logo.eps
│   │   ├── logo.png
│   │   └── logo.svg
│   ├── index.html
│   ├── js/
│   ├── materialize.css
│   └── style.css
├── gulpfile.js
├── package.json
├── routes
│   └── index.js
├── sample
│   ├── fonts
│   │   ├── ACaslonPro-Regular.otf
│   │   └── Springville-Regular3.otf
│   ├── logo.ai
│   ├── logo.eps
│   ├── sample.png
│   └── sample.psd
├── server.js
├── views
│   ├── index.jsx
│   └── layout.jsx
└── webpack.config.js
```
