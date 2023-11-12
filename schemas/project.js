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
      name: 'country', // Added field for project type
      title: 'Country',
      type: 'string',
      options: {
        list: [
          {title: 'Jordan', value: 'jordan'},
          {title: 'Qatar', value: 'qatar'},
          {title: 'Saudi Arabia', value: 'saudi_arabia'},
          {title: 'United Arab Emirates', value: 'uae'},
        ],
      },
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'gallery',
        },
      ],
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
      of: [{type: 'landmark'}],
    },
    {
      name: 'amenities',
      title: 'Add Amenities',
      type: 'array',
      of: [{type: 'amenities'}],
    },

    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{type: 'faqs'}],
    },
  ],
}
