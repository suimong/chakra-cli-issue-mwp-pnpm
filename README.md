# Steps to Reproduce `chakra-cli` Issues

## Scenario: `chakra-cli` works
1. clone this repo.
2. checkout any of the previous commits marked "chakra-cli success".
3. run `pnpm install`
4. run `pnpm chakra-cli tokens src/tw-theme --out tw-theme2.types.d.ts`
5. This will produce the correct type definition file, i.e. `tw-theme2.types.d.ts`

## Scenario: `chakra-cli` breaks
1. (run the steps in the previous section)
2. check out commit "c47cb977"
3. run `pnpm chakra-cli tokens src/tw-theme --out tw-theme2.types.d.ts`
4. This time, the type definition file becomes empty-ish like the following:

``` typescript
// regenerate by running
// npx @chakra-ui/cli tokens path/to/your/theme.(js|ts)
export interface ThemeTypings {
  blur: string & {};
  borders: string & {};
  borderStyles: string & {};
  borderWidths: string & {};
  breakpoints: string & {};
  colors: string & {};
  colorSchemes: string & {};
  fonts: string & {};
  fontSizes: string & {};
  fontWeights: string & {};
  layerStyles: string & {};
  letterSpacings: string & {};
  lineHeights: string & {};
  radii: string & {};
  shadows: string & {};
  sizes: string & {};
  space: string & {};
  textStyles: string & {};
  transition: string & {};
  zIndices: string & {};
  components: {};
}
```