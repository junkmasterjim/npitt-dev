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
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (typeof value === 'undefined' || value === null || value === '') {
              return siblingData.title.toLowerCase().replace(/ /g, '-');
            }
            return value.toLowerCase().replace(/ /g, '-');
          }
        ]
      }
    },
    {
      name: 'tagline',
      type: 'text',
      required: true
    },
    {
      name: 'type',
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
    {
      name: 'is-featured',
      type: 'checkbox',
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        //trigger revalidation
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}`, {
          method: 'POST',
        });
      }
    ]
  }
}
