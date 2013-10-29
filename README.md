karma-complexity-preprocessor
=============================

A preprocessor for [karma](http://karma-runner.github.io/0.10/index.html) runner to give some metrics about code complexity. It uses [complexityReport](https://github.com/philbooth/complexityReport.js) (from philbooth)

## Usage

* install the module using ``npm install karma-complexity-preprocessor``
* in your karma configuration file add the preprocessor to the files you want to have the metrics (under the name ``complexity``)

```javascript
//configuration file (ie karma.conf.js)
preprocessors: {
  'src/*.j':['complexity']
}
```
*lauch your test as usual

## Available options

you can specify options in the karma config file under the property complexityConfig
```javascript
complexityConfig:{
  dir:'output dir',
  logicalor:true,
  switchace:true,
  forin:true,
  trycatch:true,
  newmi:true
}
```

* `dir`: String indicating the output directory (default to 'complexity_output'), the results be under json files 
* `logicalor`: Boolean indicating whether operator `||`
  should be considered a source of cyclomatic complexity,
  defaults to `true`.
* `switchcase`: Boolean indicating whether `switch` statements
  should be considered a source of cyclomatic complexity,
  defaults to `true`.
* `forin`: Boolean indicating whether `for`...`in` loops
  should be considered a source of cyclomatic complexity,
  defaults to `false`.
* `trycatch`: Boolean indicating whether `catch` clauses
  should be considered a source of cyclomatic complexity,
  defaults to `false`.
* `newmi`: Boolean indicating whether the maintainability
  index should be rebased on a scale from 0 to 100.

For more information see the [philboot project](https://github.com/philbooth/complexityReport.js)

## licence
> Copyright (C) 2013 Laurent Renard.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
