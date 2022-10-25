export const header = {
  name: 'header',
  title: 'Header',
  type: 'document',
  groups: [
    { name: 'left', title: 'Left' },
    { name: 'right', title: 'Right' },
  ],
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      title: 'Employee',
      name: 'employee',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'role', title: 'Role', type: 'string' },
      ],
    },
    {
      title: 'Company',
      name: 'company',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'url', title: 'Url', type: 'string' },
      ],
    },
    {
      title: 'Internal Links',
      name: 'internalLinks',
      type: 'array',
      of: [
        {
          title: 'Internal Link',
          name: 'internalLink',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'string' },
          ],
        },
      ],
    },
    {
      title: 'External Links',
      name: 'externalLinks',
      type: 'array',
      of: [
        {
          title: 'External Link',
          name: 'externalLink',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'url', title: 'Url', type: 'string' },
          ],
        },
      ],
    },
  ],
};
