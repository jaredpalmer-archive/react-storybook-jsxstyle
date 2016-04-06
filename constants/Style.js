// Use es5 so react-storybook can process

var Color = require('jsxstyle/lib/Color')

var primaryColor = Color.rgb(10, 0, 0)
var secondaryColor = Color.alpha(primaryColor, .8)
var sans = "'Helvetica Neue', Helvetica, Arial, sans-serif"

var Style = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  gridUnit: 8,
  sans: sans
}

module.exports = Style
