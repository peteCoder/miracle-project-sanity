export default {
  name: 'newsBlog',
  title: 'Blog News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
    },
  ],
}
