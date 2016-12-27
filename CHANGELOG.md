# Release notes

<a name="current-release"></a>
# Version 1.0.1 (Tue, 27 Dec 2016 22:24:26 GMT)

* [fc14a0d](https://github.com/bootprint/bootprint-openapi/commit/fc14a0d) Update the maintainer-notice to reflect the current state (#84) - Nils Knappmeier



# Version 1.0.0 (Tue, 27 Dec 2016 21:33:17 GMT)

* [d0d74da](https://github.com/bootprint/bootprint-openapi/commit/d0d74da) Prepare for 1.0 release (#83) - Nils Knappmeier
* Bump version of bootprint-json-schema dependency to 1.0 (Make datatype-helper more consistent (render unspecific arrays as object[] instead of array))

# Version 0.17.1 (Sat, 17 Dec 2016 08:24:37 GMT)

* [fa9f407](https://github.com/bootprint/bootprint-openapi/commit/fa9f407) Render response examples as highlighted text, if it is not an Object. (#82) - Nils Knappmeier

# Version 0.17.0 (Fri, 01 Jul 2016 07:53:44 GMT)

* [cc65bcb](https://github.com/bootprint/bootprint-openapi/commit/cc65bcb) Add baseUrl property to generated output body (#71) - Taylor Hicks

# Version 0.16.0 (Fri, 22 Apr 2016 04:45:01 GMT)

* [31de1ba](https://github.com/bootprint/bootprint-openapi/commit/31de1ba) Improved the look of the security definitions which now properly converts markdown to HTML in the description field. - aberman

# Version 0.15.0 (Mon, 11 Apr 2016 20:30:20 GMT)

* [4206c7f](https://github.com/bootprint/bootprint-openapi/commit/4206c7f) Added info.version to the generated output - mada4586

# Version 0.14.1 (Tue, 15 Mar 2016 14:29:44 GMT)

* [5478346](https://github.com/bootprint/bootprint-openapi/commit/5478346) Adjust travis-configuration - Nils Knappmeier
* [f154097](https://github.com/bootprint/bootprint-openapi/commit/f154097) Move to bootprint-organization and enable ghook for StandardJS - Nils Knappmeier
* [1bcac94](https://github.com/bootprint/bootprint-openapi/commit/1bcac94) "Maintainers wanted" notice in the README - Nils Knappmeier
* [a116faf](https://github.com/bootprint/bootprint-openapi/commit/a116faf) Typo in test-spec - Nils Knappmeier
* [0fb4577](https://github.com/bootprint/bootprint-openapi/commit/0fb4577) Create borders around markdown-tables - Nils Knappmeier
* [ff51859](https://github.com/bootprint/bootprint-openapi/commit/ff51859) Fix mocha-call for coverage tests in TravisCI - Nils Knappmeier
* [1876285](https://github.com/bootprint/bootprint-openapi/commit/1876285) Slight readme changes - Nils Knappmeier


## v0.14.0 - 2016-01-16

### Rename

* Swagger has been renamed to "OpenAPI", so `bootprint-swagger` has been renamed to `bootprint-openapi`.
  the `bootprint-swagger`-module will still be in place and depend on this module for updates.

## v0.13.1 - 2015-11-01

### Fix

* #44: Path Item `parameters' rendered as an Operation Object
  (thanks to [@yewton](https://github.com/yewton) for the test-fixture)

## v0.13.0 - 2015-10-28

### Add

* Add more http-response-code (thanks to [@Klamath233](https://github.com/Klamath233))

## v0.12.0 - omitted

## v0.11.2 - 2015-10-21

* Remove `bootprint` as peer-dependency, because `npm` versions 1 and 2 download it needlessly.


## v0.11.1 - 2015-10-19

### Fix

* Add `files`-property to package.json

## v0.11.1 - 2015-10-17

* Ignore unneeded files

## v0.11.0 - 2015-10-17

* Support for response-examples

## v0.10.0 - 2015-10-17

### Change

* JSON-schema definitions are now sorted by name. 

## v0.9.2 - 2015-10-05

### Fix

* #40: Wrong default request / response content-types

## v0.9.1 - 2015-09-27

### Fix

* Testcase for #35: "allOf" renders incorrect HTML doc
  The fix was done in bootprint-swagger v0.7.1 

## v0.8.0 - 2015-09-22

### Added

* Support for response-headers

## v0.7.1 - 2015-09-19
### Fix 

* Fix tests failing due to the new HTML-structure.

## v0.7.0 - 2015-09-18
### Update 

* Inline global parameter definitions (#32)

## v0.6.9 - 2015-09-13
### Added

* Support for global parameter definitions (#10)


## v0.6.8 - 2015-09-12 

### Added

* Support for tags (#6): If the swagger-specification contains a tag-element, the summary
  at the top is based on the tags instead of displaying a complete table of contents.

## v0.6.7 - 2015-09-05

* Testcase for read-only badges

## v0.6.6 - 2015-09-05

### Added
* Support for global responses
* Support for default parameters (#20) 

## v0.6.5 - 2015-09-01
### Added

* Response table-rows now have a css-class containing their response code (e.g. `sw-response-code-200`)

## v0.6.4 - 2015-08-31
### Fix

* `#19`: Parameters of type `body` not being displayed 

## v0.6.3 - 2015-08-13
### Fix

* `#16`: md-helper is not loosing html-tags anymore

## v0.6.1 - 2015-07-20
### Fix

- Correct use of swagger/model partial (@karlvr)
- Model should pass on anchor value to (@karlvr)
- Compute anchor of `path` section with `htmlId` to match 
  the href in `summary.hbs`

## v0.6.0 - 2015-06-28
### Update

- Config-format of bootprint 0.5 used

## v0.5.3 - 2015-06-17
### Fixed

- Issue #5 POST/PUT Request payload JSON schema is not captured
- Change HTML-IDs to contain only valid characters.
