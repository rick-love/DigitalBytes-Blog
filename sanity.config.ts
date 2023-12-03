import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'ys1lmrkx',
  dataset: 'production',
  title: 'AI Blog',
  apiVersion: '2023-03-04',
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas
  }

})

export default config
