export default {
  type: 'document',
  name: 'founder',
  title: "Founder's message",
  fields: [
    {
      name: 'name',
      title: "Founder's Name",
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'short_description',
      title: 'Short Description 1',
      type: 'string',
    },
    {
      name: 'numberOfHomesDelivered',
      title: 'Number of Homes Delivered',
      type: 'number',
    },
    {
      name: 'timeOfDelivery',
      title: 'Time Of Delivery',
      type: 'date',
      format: "yyyy mm dd"
    },
    {
      name: 'numberOfHomesInPlanning',
      title: 'Number Of Homes In Planning',
      type: 'number',
    },
    {
      name: 'image',
      title: "Founder's image",
      type: 'image',
    },
  ],
}
