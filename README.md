Tiny Indiegogo Campaigns App
--------------

### Setup Instructions
0. Clone and `cd` into the repo
0. Run `bundle install` to install Middleman (used to build and serve web files)
0. Run `npm install bower` to install Bower
0. Run `bower install` to download front-end dependencies

### End Product
You can checkout the end product on this repo's [GitHub Pages](http://www.donny.io/indiegogo-campaigns/).

### Server Mode
Running `middleman server` will spin up a server instance and the default address is at `localhost:4567`.

### Build It Yourself
Run `middleman build`, and open `index.html` from `build/`.

### Stack & Structure
This tiny app uses Middleman to build static assets and Angular.js for the application itself. In addition, I also used Foundation and Hover.css for CSS layout and effects.

    root/
        source/ # where all my code is
            assets/
                javascripts/ # contains Angular.js code
                stylesheets/ # contains stylesheets, including a Foundation override and normalizer
            layouts/
                layout.erb # boilerplate
            index.html.slim # main app
        vendor/ # where the bower components go
        config.rb # my configuration file for Middleman