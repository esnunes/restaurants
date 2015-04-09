# Restaurants - Isomorphic Flux Application

Restaurants is an isomorphic sample application based on Flux architecture. Restaurants integrates the following libraries:

- [React](https://github.com/facebook/react) - 0.13
- [Flummox](https://github.com/acdlite/flummox) - 3.x
- [React Router](https://github.com/bobpace/react-router/tree/transitionContext) - [@bobpace](https://github.com/bobpace) transitionContext branch
- [Axios](https://github.com/mzabriskie/axios)
- [Twitter Bootstrap](getbootstrap.com)
- [Babel](https://babeljs.io/) - ES6 + ES7
- [Webpack](https://github.com/webpack/webpack)
- [React-hot-loader](https://github.com/gaearon/react-hot-loader)


## Live example
- http://restaurants.enunes.com

## Install and run instructions
```bash
# clone git repository
git clone git@github.com:esnunes/restaurants.git
# access project folder
cd restaurants
# download dependencies
npm install
# run
POI_SERVICE_URL=http://poi-service.enunes.com npm start
# open http://localhost:8080
```

## Notes
This project is a **Work In Progress** project. I could spent more time reviewing the source code, improving readability, adding comments but I was eager to get feedback from you, so I decided to release *AS IS*. Pull requests are welcome!

## Decisions made
1. One of the challenges of isomorphic flux web applications is how to fetch data on server-side due to its client-side nature of async fetching and optimistic rendering. I've been researching about it for a while and I identified - base on sample apps and flux libraries - that most of the solutions take one of the two approaches:
  - pre-fetch data on server-side based on route;
  - call a specific View Controller / Container static method before call ```React.renderToString```;

  Applying any of the approaches you will end up having the fetching code in two or three different places, specially using react-router. To avoid DRY I decided to add fetching code on ```willTransitionTo```.

  To be able to access ```Stores```, ```Actions``` and ```Flux``` I had to use [@bobpace](https://github.com/bobpace) fork of react-router. His fork adds a ```transitionContext``` router parameter which in my approach contains Flummox flux object. I hope this sample code helps somehow the approval of the [most commented](https://github.com/rackt/react-router/pull/590) pull request of react-router.

  I'm **very welcome** for feedbacks regarding this approach, please use [this issue](https://github.com/esnunes/restaurants/issues/1) to discuss about it.


## Goals
- Integrate all libraries needed to develop a fully capable isomorphic web application;
- Use the patterns achieved in this application to easily bootstrap new isomorphic web applications;
- Support common web applications requirements (SEO, speed, public / private sections, master-detail, etc);


## TODO

- [ ] Extract html render from Containers to Components
- [ ] Break ```dashboard``` container in sub containers
- [ ] Migrate Stores' state to [Immutable-js](https://github.com/facebook/immutable-js) data collections;
- [ ] Show navigation alternatives based on platform (mobile / desktop, Android / iOS)
- [ ] Improve source code documentation
- [ ] Add feature: user authentication
- [ ] Add feature: restaurants management
- [ ] Add feature: add activities to restaurants (e.g. pros and cons comments, delivery experience, tried dishes, etc)
- [ ] Add unit tests
- [ ] Create a [Yeoman](http://yeoman.io/) generator based on this project


## License

(MIT License)

Copyright (c) 2015 Eduardo Nunes esnunes@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
