<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# defaults

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Default ndarray settings.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import defaults from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { get } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@deno/mod.js';
```

#### defaults()

Returns default ndarray settings.

```javascript
var out = defaults();
// returns {...}
```

The returned object has the following properties:

-   **dtypes**: default data types.

    -   **default**: default data type.
    -   **numeric**: default numeric data type.
    -   **real**: default real-valued data type.
    -   **floating_point**: default floating-point data type.
    -   **real_floating_point**: default real-valued floating-point data type.
    -   **complex_floating_point**: default complex-valued floating-point data type.
    -   **integer**: default integer data type.
    -   **signed_integer**: default signed integer data type.
    -   **unsigned_integer**: default unsigned integer data type.

-   **order**: default memory layout.

-   **casting**: default casting mode.

-   **index_mode**: default index mode.

#### defaults.get( name )

Returns the setting value for a provided setting `name`.

```javascript
var v = defaults.get( 'order' );
// returns <string>

v = defaults.get( 'dtypes.floating_point' );
// returns <string>
```

The setting `name` corresponds to a flattened object path. For example, the setting name `'dtypes.default'` maps to the nested path `o.dtypes.default` as found in the object returned by `defaults()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import defaults from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@deno/mod.js';

var o = defaults();

var buf = [ [ 1, 2 ], [ 3, 4 ] ];
var opts = {
    'order': o.order,
    'casting': 'unsafe',
    'mode': o.index_mode
};

opts.dtype = o.dtypes.default;
var x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.floating_point;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.real_floating_point;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.integer;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.signed_integer;
x = array( buf, opts );
console.log( x.dtype );

opts.dtype = o.dtypes.unsigned_integer;
x = array( buf, opts );
console.log( x.dtype );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-defaults.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-defaults

[test-image]: https://github.com/stdlib-js/ndarray-defaults/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/ndarray-defaults/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-defaults/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-defaults?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-defaults.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-defaults/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-defaults/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-defaults/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-defaults/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-defaults/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-defaults/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-defaults/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-defaults/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-defaults/main/LICENSE

</section>

<!-- /.links -->
