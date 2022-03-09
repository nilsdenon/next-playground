import { extendTheme, theme as base, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const semanticTokens = {
  colors: {
    error: "red.500",
    text: {
      default: "gray.900",
      _dark: "gray.50",
    },
  },
}
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    200: "#ff3300",
  },
}

const fonts = {
  heading: "Helvetica",
  body: `Inter, ${base.fonts?.body}`,
}

const webfolio = extendTheme({ config, colors, fonts })

export default webfolio
