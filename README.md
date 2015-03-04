# Widths Responsive

The Predix Experience Widths Responsive module is an extension of the default [px-widths-design](https://github.sw.ge.com/pxc/px-widths-design) module and provides breakpoint-based classes for widths on elements. This module is a fork of inuitcss' [widths-responsive](https://github.com/inuitcss/trumps.widths-responsive) module.

The Widths Responsive module loops through the breakpoints defined in inuitcss' [settings.responsive](https://github.com/inuitcss/settings.responsive) to generate prefixed breakpoint-based classes. If you are using inuitcss’ default breakpoints, you will be given classes like `lap-and-up-1/4`, or `desk-one-half`, etc.

Widths Responsive will inherit the same settings used for the Widths module (i.e. namespaces and fraction vs. spoken-word format).

Based on the breakpoints defined in the `$breakpoints` Sass list, then widths determined by classes in your markup will be triggered.

For example, a `$breakpoint` named `desk` which defines a media-query for viewports wider than 1024 pixels, the class `.desk-1/2` would apply a width of 50% on an element with a viewport above 1024 pixels. At narrower viewports `.desk-1/2` has no effect.

## Dependencies

Px's Widths Responsive module depends on five other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [settings.responsive](https://github.com/inuitcss/settings.responsive)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)
* [tools.responsive](https://github.com/inuitcss/tools.responsive)
* [px-widths-design](https://github.sw.ge.com/pxc/px-widths-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/pxc/px-widths-responsive-design.git

Once installed, `@import` into your project's Sass file in its Trumps layer:

    @import "../px-spacing-responsive-design/trumps.widths-responsive";

See [px-getting-started](https://github.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('trumps.widths-responsive') { ... }

## Options

For each "breakpoint" set in inuitcss' [settings.responsive](https://github.com/inuitcss/settings.responsive) `$breakpoint` Sass list, the classes below will be appended i.e. `[breakpoint-name]-classname`. Width dimensions are set in Px's [Widths](https://github.sw.ge.com/pxc/px-widths-design) module.

All widths are expressed in percentages, rounded to seven decimal points.

Whole:

* `*-1/1|one-whole`

Halves:

* `*-1/2|one-half`
* `*-2/4|two-quarters`
* `*-3/6|three-sixths`
* `*-4/8|four-eigths`
* `*-5/10|five-tenths`
* `*-6/12|six-twelfths`

Thirds:

* `*-1/3|one-third`
* `*-2/6|two-sixths`
* `*-3/9|three-ninths`
* `*-4/12|four-twelfths` 
* `*-2/3|two-thirds`
* `*-4/6|four-sixths`
* `*-6/9|six-ninths`
* `*-8/12|eight-twelfths`

Quarters:

* `*-1/4|one-quarter`
* `*-2/8|two-eigths`
* `*-3/12|three-twelfths`
* `*-3/4|three-quarters`
* `*-6/8|six-eighths`
* `*-9/12|nine-twelfths`

Fifths:

* `*-1/5|one-fifth`
* `*-2/10|two-tenths`
* `*-2/5|two-fifths`
* `*-4/10|four-tenths`
* `*-3/5|three-fifths`
* `*-6/10|six-tenths`
* `*-4/5|four-fifths`
* `*-8/10|eight-tenths`

Sixths:

* `*-1/6|one-sixth`
* `*-2/12|two-twelfths`
* `*-5/6|five-sixths`
* `*-10/12|ten-twelfths`

Eighths:

* `*-1/8|one-eighth`
* `*-3/8|three-eighths`
* `*-5/8|five-eighths`
* `*-7/8|seven-eighths`

Ninths:

* `*-1/9|one-ninth`
* `*-2/9|two-ninths`
* `*-4/9|four-ninths`
* `*-5/9|five-ninths`
* `*-7/9|seven-ninths`
* `*-8/9|eight-ninths`

Tenths:

* `*-1/10|one-tenth`
* `*-3/10|three-tenths`
* `*-7/10|seven-tenths`
* `*-9/10|nine-tenths`

Twelfths:

* `*-1/12|one-twelfth`
* `*-5/12|five-twelfths`
* `*-7/12|seven-twelfths`
* `*-11/12|eleven-twelfths`
