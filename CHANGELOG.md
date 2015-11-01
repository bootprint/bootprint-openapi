# Release notes

## v0.13.1 - 2015-11-01

### Fix

* bootprint-swagger#44: Path Item `parameters' rendered as an Operation Object
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

* bootprint-swagger#40: Wrong default request / response content-types

## v0.9.1 - 2015-09-27

### Fix

* Testcase for bootprint-swagger#35: "allOf" renders incorrect HTML doc
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

* `bootprint-swagger#19`: Parameters of type `body` not being displayed 

## v0.6.3 - 2015-08-13
### Fix

* `bootprint-swagger#16`: md-helper is not loosing html-tags anymore

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
