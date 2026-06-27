import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
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
