export default {
  type: 'document',
  name: 'customer',
  title: 'Customer',
  fields: [
    {
      name: 'initials',
      title: 'Initials',
      type: 'string',
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'newsletterConfirmation',
      title: 'Newsletter Confirmation',
      type: 'boolean',
      default: false,
    },
  ],
}
