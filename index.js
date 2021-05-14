var fs = require('fs')
const path = require('path')
var postcss = require('postcss')
var remToPx = require('postcss-rem-to-pixel')

// get all css files in the input folder
const files = fs.readdirSync('./input-css').filter((fn) => fn.endsWith('.css'))

const options = {
  propList: ['*'],
  replace: true,
}

files.forEach((file) => {
  if (file === '.gitkeep') return

  const baseFileName = file.split('.css')[0]
  const css = fs.readFileSync(path.join(__dirname, `/input-css/${file}`), 'utf8')
  const processedCss = postcss(remToPx(options)).process(css).css

  fs.writeFile(path.join(__dirname, `./output-css/${baseFileName}.css`), processedCss, function (err) {
    if (err) {
      throw err
    }
    console.log(`${baseFileName}.css converted from rem to px.`)
  })
})
