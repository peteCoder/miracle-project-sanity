export default {
  type: 'document',
  name: 'featured',
  title: 'Featured',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bannerImage',
      type: 'image',
      title: 'Banner Image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: [
        {
          type: 'country',
        },
      ],
    },
    {
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [
        {
          type: 'city',
        },
      ],
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    },
  ],
}
