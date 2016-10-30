# ember-cli-bootstrap3-sass [![GitHub version](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-sass.svg)](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-sass)

[![npm version](https://badge.fury.io/js/ember-cli-bootstrap3-sass.svg)](https://badge.fury.io/js/ember-cli-bootstrap3-sass) [![CircleCI](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-sass.svg?style=shield)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-sass) [![Code Climate](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-sass/badges/gpa.svg)](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-sass) ![Dependencies](https://david-dm.org/cybertoothca/ember-cli-bootstrap3-sass.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-sass.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-sass) [![License](https://img.shields.io/npm/l/ember-cli-bootstrap3-sass.svg)](LICENSE.md)

This addon installs the bootstrap3 javascript components and 
fonts.  Once installed, you can compile the bootstrap sass into 
your app.  Understand that this addon is for Ember applications 
that are compiling their styles using SASS.

__If your Ember
application is using pure CSS or LESS, than this addon is NOT for you.__

## What Does This Addon Do?

This addon will make sure that the latest version of the
[`ember-cli-sass` Ember Addon](https://github.com/aexmachina/ember-cli-sass) is
installed in your Ember-App.  In addition, the latest version of the
[`bootstrap-sass` library](https://github.com/twbs/bootstrap-sass) from 
bower will be downloaded in order to acquire the javascript, fonts, 
and SASS source.  The relevant javascript and font files are copied to 
your Ember-App's `assets` directory and are then referred to from the
stylesheet.

## Requirements

* Ember >= 1.13.0
* Ember CLI

## Installation

Installation is basically two simple steps: one install the addon,
and two import the SASS source into your `app.scss` file.

The following will install this addon along with the bootstrap-sass 
source and fonts:

    $ ember install ember-cli-bootstrap3-sass

Next, inside your `app/styles/app.scss` file you must compile the 
bootstrap source into your application's stylesheet:

    // `app/styles/app.scss`
    ...
    @import 'ember-cli-bootstrap3-sass';
    ...

### Alternate Bootstrap _Theme_ With Fancier Buttons?

Access to Bootstrap's alternate theme is as simple as adding one
more import: `ember-cli-bootstrap3-theme`.  So your 
`app/styles/app.scss` should look like this:

    // `app/styles/app.scss`
    ...
    @import 'ember-cli-bootstrap3-sass';
    @import 'ember-cli-bootstrap3-theme';
    ...

So it should go without saying, if you want to include some other
_canned_ theme from bower or _wherever_, you can include it just after
the aforementioned import(s).

### Alternate Glyphicon Font Path?

By default, this addon takes care of the Glyphicon font paths for you.
If for some reason you need to customize this path, you can do so
by supplying the `$icon-font-path` variable value before you import
`ember-cli-bootstrap3-sass`.  __Make sure the path you specify includes
the trailing slash!__

    // `app/styles/app.scss`
    ...
    $icon-font-path: '/some/absolute/path/'
    @import 'ember-cli-bootstrap3-sass';
    ...

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-bootstrap3-sass` command once 
you are done to get the latest version of the addon.  Notice that this
will likely update the `bootstrap-sass` bower dependency to the latest
3.x.x version.

### Troubleshooting And Tips

1. You need `ember-cli-sass` to be configured in your application.  This means
that by default your styles have been compiled inside your
`app/styles/app.scss` file.  If you've adjusted the configuration to use a
different file, then you must add the 
`@import 'ember-cli-bootstrap3-sass'` directive there.
1. As bootstrap-3 version updates are made available, simply reinstall your
bower packages and in some cases update your `bower.json` to ensure the version
you want is being brought into your application.  __Understand that this
addon does not entertain installing bootstrap-4 at this time.__

---

# Ember Addon Building And Testing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-bootstrap3-sass.git`
* `npm install`
* `bower install`

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Addon Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Addon

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Addon For Local Testing

## Linking

1. From the command line at the root of __this__ project run the 
`npm link` command to _link_ this addon within your local 
node repository.
1. From the _other_ Ember project that you wish to test this addon 
in, execute the following command:
`npm link ember-cli-bootstrap3-sass`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember addon with the version _*_.  It will
look something like this: `"ember-cli-bootstrap3-sass": "*"`.  Now
when/if you execute `npm install` on this _other_ project it 
will know to look for the linked addon rather than fetch it from
the central repository.

## Unlinking

1. Remove the addon from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-cli-bootstrap3-sass`
1. Remove the reference to the `ember-cli-bootstrap3-sass` 
in your _other_ project's `package.json`.
1. Run an `npm prune` from the root of your _other_ project's command line.
