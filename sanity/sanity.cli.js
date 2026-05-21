import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'f1ilb70v',
    dataset: 'production',
  },
  deployment: {
    appId: 'kpv1tauf37etcpygncn90gcr',
    autoUpdates: true,
  },
})
