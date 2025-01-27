# MARENS PORTFOLIO WEBSITE

This website is for now a portfolio page showing my works, but may be expanded in the future to become a personal blog, a planning tool, ...

## tech

I am using Craft CMS with the GraphQL API as a headless backend and vuejs as a frontend. The landing page animated mouse is made with p5js.

## orga

There's the landing page, the 'works' and the 'about' section. The 'works' section has single subpages for each single work with further information.

# INFORMATION SOURCES

## Including p5 Sketch

https://medium.com/front-end-weekly/learning-the-p5-canvas-drawing-library-in-es6-and-webpack-bf514a679544

# FOLDER STRUCTURE

The whole frontend code is in the 'vue-frontend' folder. There is no relevant content in the templates folder. The whole Craft CMS backend is configured through the Craft CMS control panel. 

The 'src' folder contains the following.

# Assets

Fonts, base and main CSS files and background.

# Components

All components. The Home Sketch and the Global Header.

# Pages

Home, About, Works, Work, Not Found

# App.vue

Main entry point into the App. The Header and the Router View.

# main.js

Set up the App with GraphQL endpoint, Router, Cache.

# router.js

Set up all the routes for all the pages.