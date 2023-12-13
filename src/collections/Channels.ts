import { CollectionConfig } from 'payload/types'

const Channels: CollectionConfig = {
  slug: 'channels',
 // auth: true,
  fields: [
    {
      name: 'channel',
      type: 'text',
      required: true,
    },

  ],
}

export default Channels