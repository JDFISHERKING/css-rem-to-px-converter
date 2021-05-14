# Rems to px converter

A Node.js utility app for converting rules in css files from rem units to px. While rems is the preferred method when styling, sometimes it is necesary to convert a vendor css file over so that it plays nicely within a larger site which may have different rem values.

## Usage

1. Run `$ npm install`
2. Place any css files to convert, into the `input-css` folder
3. Run `$ npm run start`
4. All converted filed will be placed into the `output-css` folder.

## Options

Type: `Object | Null`  
Default:

```js
{
    rootValue: 16,
    unitPrecision: 5,
    propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minRemValue: 0
}
```

- `rootValue` (Number) The root element font size.
- `unitPrecision` (Number) The decimal precision px units are allowed to use, floored (rounding down on half).
- `propList` (Array) The properties that can change from rem to px.
  - Values need to be exact matches.
  - Use wildcard `*` to enable all properties. Example: `['*']`
  - Use `*` at the start or end of a word. (`['*position*']` will match `background-position-y`)
  - Use `!` to not match a property. Example: `['*', '!letter-spacing']`
  - Combine the "not" prefix with the other prefixes. Example: `['*', '!font*']`
- `selectorBlackList` (Array) The selectors to ignore and leave as rem.
  - If value is string, it checks to see if selector contains the string.
    - `['body']` will match `.body-class`
  - If value is regexp, it checks to see if the selector matches the regexp.
    - `[/^body$/]` will match `body` but not `.body`
- `replace` (Boolean) replaces rules containing rems instead of adding fallbacks.
- `mediaQuery` (Boolean) Allow rem to be converted in media queries.
- `minRemValue` (Number) Set the minimum rem value to replace.
