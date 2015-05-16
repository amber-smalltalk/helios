Helios
======

Helios IDE for Amber Smalltalk

How to contribute
====

Prerequisites
===

The following packages need to be installed globally:

* `node` (NodeJS)
* `npm` (NodeJS package manager)
* `bower` (JavaScript package manager)
* `grunt-cli` (build packages on the commandline)
* `amber-cli` (for serving and creating Amber applications)

Helios development setup
===

There are two ways how to contribute. Both ways require forking this repo first and fetching all required packages via NPM and Bower.

* `git clone https://github.com/amber-smalltalk/helios.git`
* `cd helios`
* `npm install`
* `bower install`
* `grunt devel`

If you only want to contribute to Helios itself you can now run Helios as a regular Amber application by executing

* `amber serve`

and visiting `http://localhost:4000/` in the browser.

As Helios is still coupled with Amber, you need occasionally make change to Amber itself,
not just to Helios code.
The recommended way is to fork and clone Amber repository itself for development
(see https://github.com/amber-smalltalk/amber/blob/master/CONTRIBUTING.md,
"Setup your Amber clone" part and use your own fork in the "clone Helios" step).
This allows you to develop Amber itself, `amber-cli` and Helios simultaneously.

