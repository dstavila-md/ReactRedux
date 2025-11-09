export default {
  $schema: 'http://json-schema.org/draft-06/schema#',
  $ref: '#/definitions/StateSchema',
  definitions: {
    StateSchema: {
      type: 'object',
      additionalProperties: false,
      properties: {
        comments: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        auth: {
          type: 'boolean',
        },
      },
      required: ['auth', 'comments'],
      title: 'StateSchema',
    },
  },
};
