export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      type: 'string',
      title: 'Name',
      name: 'name',
    },
    {
      type: 'string',
      title: 'Description',
      name: 'description',
    },
    {
      name: 'bannerImage',
      title: 'Hero Banner Image',
      type: 'image',
      option: [{hotspot: true}],
    },
    {
      type: 'string',
      title: 'Location',
      name: 'location',
    },
    {
      name: 'projectType', // Added field for project type
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Furnished apartment', value: 'furnished_apartment'},
          {title: 'Hotel apartment', value: 'hotel_apartment'},
          {title: 'Hotel rooms', value: 'hotel_rooms'},
          {title: 'Offices', value: 'offices'},
        ],
      },
    },
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: [{type: 'country'}],
    },
    {
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [{type: 'city'}],
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'gallery'}]}],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude',
      type: 'string',
    },
    {
      name: 'lat',
      title: 'Latitude',
      type: 'string',
    },

    {
      name: 'landmarks',
      title: 'Add Landmark',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'landmark'}]}],
    },
    {
      name: 'amenities',
      title: 'Add Amenities',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'amenities'}]}],
    },

    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faqs'}]}],
    },

    {
      name: 'community',
      title: 'Commumnty',
      type: 'reference',
      to: [
        {
          type: 'community',
        },
      ],
    },
  ],
}
