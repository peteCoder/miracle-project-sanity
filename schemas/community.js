export default {
  type: 'document',
  name: 'community',
  title: 'Communities',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
