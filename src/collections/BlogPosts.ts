import type { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
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
      name: 'project-link',
      type: 'text',
    },
  ],
}
