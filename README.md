# Rems to px converter

A Node.js utility app for converting rules in css files from rem units to px. While rems is the preferred method when styling, sometimes it is necesary to convert a vendor css file over so that it plays nicely within a larger site which may have different rem values.

## Usage

1. Run `$ npm install`
2. Place any css files to convert, into the `input-css` folder
3. Run `$ npm run start`
4. All converted filed will be placed into the `output-css` folder.
