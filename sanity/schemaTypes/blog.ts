export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title Of Blog',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'titleImage',
        type: 'image',
        title: 'Title Image',
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small Description',
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published At',
        initialValue: () => new Date().toISOString(),
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          },
        ],
      },
    ],
  }