// fix_block_latex.ts
import { QuartzTransformerPlugin } from "../types"

const blockLatexRegex = new RegExp(/\$\$([\s\S]*?)\$\$/, "g")

export const FixBlockLatex: QuartzTransformerPlugin = () => {
      return {
            name: "FixBlockLatex",
            textTransform(_ctx, src) {
                  src = src.toString()
                  src = src.replaceAll(blockLatexRegex, (value, ...capture) => {
                        const [eqn] = capture
                        return `
$$
${eqn}
$$
`        })
                  return src
            },
      }
}