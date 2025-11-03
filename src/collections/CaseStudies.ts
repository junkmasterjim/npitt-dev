import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
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
