# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-05-26)

<section class="features">

### Features

-   [`83b4397`](https://github.com/stdlib-js/stdlib/commit/83b4397ead81f62400301a333ada0882da688ee8) - add default `indexing` data type

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ebe55b2`](https://github.com/stdlib-js/stdlib/commit/ebe55b2015d81d3b0f7288dc87451a2f0d362d47) - update hash table

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`ebe55b2`](https://github.com/stdlib-js/stdlib/commit/ebe55b2015d81d3b0f7288dc87451a2f0d362d47) - **fix:** update hash table _(by Athan Reines)_
-   [`e842143`](https://github.com/stdlib-js/stdlib/commit/e8421431fa8e811d57761310af0460c6f0ea37b5) - **refactor:** rename `indexing` to `index` and add defaults for specialized index data types _(by Athan Reines)_
-   [`83b4397`](https://github.com/stdlib-js/stdlib/commit/83b4397ead81f62400301a333ada0882da688ee8) - **feat:** add default `indexing` data type _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-26)

<section class="features">

### Features

-   [`e92152b`](https://github.com/stdlib-js/stdlib/commit/e92152baba61ab358640cba9d0506d75123a5f60) - add boolean dtype support to `ndarray/defaults` [(#2551)](https://github.com/stdlib-js/stdlib/pull/2551)

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`e92152b`](https://github.com/stdlib-js/stdlib/commit/e92152baba61ab358640cba9d0506d75123a5f60) - **feat:** add boolean dtype support to `ndarray/defaults` [(#2551)](https://github.com/stdlib-js/stdlib/pull/2551) _(by Jaysukh Makvana, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-21)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-03)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2023-09-21)

<section class="features">

### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12) - rename `integral` to `integer`
-   [`bd1017d`](https://github.com/stdlib-js/stdlib/commit/bd1017ddb8dd6fe552675221570186440cdbb4f5) - add `numeric` and `real` dtype defaults
-   [`9363dc3`](https://github.com/stdlib-js/stdlib/commit/9363dc3376fcb9ba18d181716fae8fbb731771bd) - add `get` method for retrieving a single default setting
-   [`35de20d`](https://github.com/stdlib-js/stdlib/commit/35de20d9359f2497eb0527c7cd99778dd7bff038) - add `ndarray/defaults`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12): rename `integral` to `integer`

    -   To migrate, users should update their code to use `integer` rather
        than `integral` to refer to the policy/kind which includes both
        signed and unsigned integer dtypes.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d45a05b`](https://github.com/stdlib-js/stdlib/commit/d45a05b03973bf5b6a5e97cb4bc8c0aba3a68a12) - **feat:** rename `integral` to `integer` _(by Athan Reines)_
-   [`bd1017d`](https://github.com/stdlib-js/stdlib/commit/bd1017ddb8dd6fe552675221570186440cdbb4f5) - **feat:** add `numeric` and `real` dtype defaults _(by Athan Reines)_
-   [`9363dc3`](https://github.com/stdlib-js/stdlib/commit/9363dc3376fcb9ba18d181716fae8fbb731771bd) - **feat:** add `get` method for retrieving a single default setting _(by Athan Reines)_
-   [`35de20d`](https://github.com/stdlib-js/stdlib/commit/35de20d9359f2497eb0527c7cd99778dd7bff038) - **feat:** add `ndarray/defaults` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

