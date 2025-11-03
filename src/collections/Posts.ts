import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'tagline',
      type: 'text',
      required: true
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true
    },
    {
      name: 'project-link',
      type: 'text',
    },
  ],
}
