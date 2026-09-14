import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader"
import remarkFootnotesExtra from "remark-footnotes-extra"

const config = await loadQuartzConfig()

config.plugins.transformers.push({
  name: "InlineFootnotes",
  markdownPlugins() {
    return [remarkFootnotesExtra]
  },
})

config.plugins.transformers.unshift({
  name: "FixBlockLatex",

  textTransform(_ctx, src) {
    return src.toString().replace(
      /\$\$([\s\S]*?)\$\$/g,
      (_match, equation: string) =>
        `\n\n$$\n${equation.trim()}\n$$\n\n`,
    )
  },
})

export default config

export const layout = await loadQuartzLayout()

// export const layout = await loadQuartzLayout({
//   defaults: {
//     afterBody: [
//       ExternalPlugin.Comments({
//         provider: "giscus",
//         options: {
//           // Other options...
//           themeUrl: "https://rupadarshiray.github.io/static/giscus",
//           lightTheme: "light",
//           darkTheme: "dark",
//         },
//       }),
//     ],
//   },
// })
