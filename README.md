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

# MINSTD Shuffle

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an array containing pseudorandom numbers generated using a [linear congruential pseudorandom number generator][@stdlib/random/base/minstd-shuffle] (LCG) whose output is shuffled.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-array-minstd-shuffle
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var minstd = require( '@stdlib/random-array-minstd-shuffle' );
```

#### minstd( len\[, options] )

Returns an array containing pseudorandom integers on the interval `[1, 2147483646]`.

```javascript
var out = minstd( 10 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued data type][@stdlib/array/typed-real-dtypes] or "generic". Default: `'float64'`.

By default, the function returns a [`Float64Array`][@stdlib/array/float64]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = minstd( 10, opts );
// returns [...]
```

#### minstd.normalized( len\[, options] )

Returns an array containing pseudorandom numbers on the interval `[0, 1)`.

```javascript
var out = minstd.normalized( 10 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

By default, the function returns a [`Float64Array`][@stdlib/array/float64]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = minstd.normalized( 10, opts );
// returns [...]
```

#### minstd.factory( \[options] )

Returns a function for creating arrays containing pseudorandom numbers generated using a [linear congruential pseudorandom number generator][@stdlib/random/base/minstd-shuffle] (LCG) whose output is shuffled.

```javascript
var random = minstd.factory();

var out = random( 10 );
// returns <Float64Array>

var len = out.length;
// returns 10

out = random.normalized( 10 );
// returns <Float64Array>

len = out.length;
// returns 10
```

The function accepts the following `options`:

-   **seed**: pseudorandom number generator seed.
-   **state**: an [`Int32Array`][@stdlib/array/int32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.
-   **idtype**: default output array data type when generating integers. Must be a [real-valued data type][@stdlib/array/typed-real-dtypes] or "generic". Default: `'float64'`.
-   **ndtype**: default output array data type when generating normalized numbers. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = minstd.factory( opts );

var out = random( 10, opts );
// returns <Float64Array>
```

The returned function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued data type][@stdlib/array/typed-real-dtypes] or "generic". This overrides the default output array data type.

The returned function has a `normalized` method which accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". This overrides the default output array data type.

To override the default output array data type, set the `dtype` option.

```javascript
var random = minstd.factory();

var out = random( 10 );
// returns <Float64Array>

var opts = {
    'dtype': 'generic'
};
out = random( 10, opts );
// returns [...]
```

#### minstd.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = minstd.PRNG;
// returns <Function>
```

#### minstd.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = minstd.seed;
// returns <Int32Array>
```

#### minstd.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = minstd.seedLength;
// returns <number>
```

#### minstd.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = minstd.state;
// returns <Int32Array>
```

#### minstd.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = minstd.stateLength;
// returns <number>
```

#### minstd.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = minstd.byteLength;
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Before output from a simple linear congruential generator ([LCG][@stdlib/random/base/minstd-shuffle]) is returned, the output is shuffled using the Bays-Durham algorithm. This additional step considerably strengthens the "randomness quality" of a simple [LCG][@stdlib/random/base/minstd-shuffle]'s output.
-   An [LCG][@stdlib/random/base/minstd-shuffle] is fast and uses little memory. On the other hand, because the generator is a simple [linear congruential generator][@stdlib/random/base/minstd-shuffle], the generator has recognized shortcomings. By today's PRNG standards, the generator's period is relatively short. More importantly, the "randomness quality" of the generator's output is lacking. These defects make the generator unsuitable, for example, in Monte Carlo simulations and in cryptographic applications.
-   If PRNG state is "shared" (meaning a state array was provided during function creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the function returned by the `factory` method does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant creation function and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other creation functions and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logEach = require( '@stdlib/console-log-each' );
var minstd = require( '@stdlib/random-array-minstd-shuffle' );

// Create a function for generating random arrays originating from the same state:
var random = minstd.factory({
    'state': minstd.state,
    'copy': true
});

// Generate 3 arrays:
var x1 = random.normalized( 5 );
var x2 = random.normalized( 5 );
var x3 = random.normalized( 5 );

// Print the contents:
logEach( '%f, %f, %f', x1, x2, x3 );

// Create another function for generating random arrays with the original state:
random = minstd.factory({
    'state': minstd.state,
    'copy': true
});

// Generate a single array which replicates the above pseudorandom number generation sequence:
var x4 = random.normalized( 15 );

// Print the contents:
logEach( '%f', x4 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-array/minstd`][@stdlib/random/array/minstd]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="package-name">[`@stdlib/random-array/randu`][@stdlib/random/array/randu]</span><span class="delimiter">: </span><span class="description">create an array containing uniformly distributed pseudorandom numbers between 0 and 1.</span>
-   <span class="package-name">[`@stdlib/random-base/minstd-shuffle`][@stdlib/random/base/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="package-name">[`@stdlib/random-strided/minstd-shuffle`][@stdlib/random/strided/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-array-minstd-shuffle.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-array-minstd-shuffle

[test-image]: https://github.com/stdlib-js/random-array-minstd-shuffle/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-array-minstd-shuffle/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-array-minstd-shuffle/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-array-minstd-shuffle?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-array-minstd-shuffle.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-array-minstd-shuffle/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-array-minstd-shuffle/tree/deno
[umd-url]: https://github.com/stdlib-js/random-array-minstd-shuffle/tree/umd
[esm-url]: https://github.com/stdlib-js/random-array-minstd-shuffle/tree/esm
[branches-url]: https://github.com/stdlib-js/random-array-minstd-shuffle/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-array-minstd-shuffle/main/LICENSE

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random-base-minstd-shuffle

[@stdlib/array/typed-real-float-dtypes]: https://github.com/stdlib-js/array-typed-real-float-dtypes

[@stdlib/array/typed-real-dtypes]: https://github.com/stdlib-js/array-typed-real-dtypes

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32

<!-- <related-links> -->

[@stdlib/random/array/minstd]: https://github.com/stdlib-js/random-array-minstd

[@stdlib/random/array/randu]: https://github.com/stdlib-js/random-array-randu

[@stdlib/random/strided/minstd-shuffle]: https://github.com/stdlib-js/random-strided-minstd-shuffle

<!-- </related-links> -->

</section>

<!-- /.links -->
