# Testacular demo
A little demo on using [testacular](http://testacular.github.com/) as a JavaScript **testrunner**.
Note that I'm saying testrunner. Testacular is **not a testing framework**, but it uses existing testing frameworks (e.g. jasmine, qunit, mocha).

Testacular uses real browsers to run tests. It's even possible to run your tests in multiple browsers at the same time, which is really awesome.

## Using this demo
Obviously, testacular should be installed. It can be installed with npm.

	npm -g install testacular

Clone this repository

	git@github.com:lowiebenoot/testacular-demo.git
	
Fire up testacular (while being inside the repository folder)

	testacular start
	
Testacular will start and search for the default config `testacular.conf.js`. I created this config by running `testacular init`. This will create a config by guiding you through some options.
You run testacular with a custom config by just adding the file after the start command, e.g. `testacular start custom.conf.js`.

When testacular starts, it will fire up the browser(s) that were defined in the config. I only added Chrome, but it's perfectly possible to add multiple browsers. You could even add Internet Explorer if you're on Windows.

Testacular will now run your tests for the first time.
Because I set the autoWatch option to true in my config, testacular will rerun the (needed) tests if I save the source code/test code. 

If you did not set the autoWatch option to true, you can run the tests manully with `testacular run`.

Read more about testacular and all of its options on the [testacular website](http://testacular.github.com/).