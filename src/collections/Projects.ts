import type { CollectionConfig } from 'payload'

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
      name: 'repo link',
      type: 'text',
      required: true
    },
    {
      name: 'date',
      type: 'date',
      required: true
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
    {
      name: 'is featured',
      type: 'checkbox',
    },
  ],
  upload: true,
}
