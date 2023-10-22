import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  // schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  schemaFile: 'specs.yaml',
  apiFile: '../src/redux/services/baseApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: '../src/redux/services/hackerNewsApi.ts',
  exportName: 'hackerNewsApi',
  hooks: true,
  useEnumType: true,
}

export default config