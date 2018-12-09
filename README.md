# Digital Sketchbook

This is a digital sketch flip-through notebook for showcasing early sketchwork for my animated projects. The core functionality is powered by the [Real3D FlipBook Plugin](https://codecanyon.net/item/real3d-flipbook-jquery-plugin/4281720).

Live demo available [on Heroku](https://anim-sketchbooks.herokuapp.com/).

## Making Modifications

The app was created with React JS, but the core mechanic is handled in `/public` between the HTML and jQuery. To edit the app locally:

- get a copy of this repo on your local machine
- install purchased Real3D FlipBook `/deploy` files under `/public/real3d-flipbook/`
- edit `/public/index.html`
  - to reflect desired flipbook settings
  - to contain desired flipbook pages (images or PDF)
- update React components in `/src`
