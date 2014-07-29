Helios
======

Helios IDE for Amber Smalltalk

How to contribute
====

There are two ways how to contribute. In both way you need to fork this repo first.

First way is by cloning your fork and setting it up (have `node` and `npm` installed,
have `bower`, `grunt-cli` and `amber-cli` npm packages installed globally,
then run `npm install` and `bower install` in the project directory,
after what you can go the classical Amber project way of running `amber serve` from CLI
and go to `http://localhost:4000/` in the browser). This way you can only contribute
to Helios itself.

As Helios is still coupled with Amber, you need occasionally make change to Amber itself,
not just to Helios code. Thus, recommended way is to fork and clone Amber repository itself
for development (see https://github.com/amber-smalltalk/amber/blob/master/CONTRIBUTING.md,
"Setup your Amber clone" part and use your own fork in the "clone Helios" step).
This allows you to develop Amber itself, `amber-cli` and Helios at once.
