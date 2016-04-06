import Color from 'jsxstyle/lib/Color'

const primaryColor = Color.rgb(10, 0, 0)
const secondaryColor = Color.alpha(primaryColor, .8)
const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif"

const Style = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  gridUnit: 8,
  sans
}

export default Style
