import type { CollectionConfig } from 'payload'

// TODO: make projects randomly shuffle

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'project link',
      type: 'text',
      required: true,
    },
    {
      name: 'stack',
      type: 'json',
      required: true,
      defaultValue: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "C#" }
      ]
    },
  ],
  upload: true,
}
