// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'mcp-test-mcp/filtering';
import { asTextContentResult } from 'mcp-test-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import McpTest from 'mcp-test';

export const metadata: Metadata = {
  resource: 'authentication',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/authentication',
};

export const tool: Tool = {
  name: 'get_token_authentication',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet X-Authorization token\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    token: {\n      type: 'string',\n      description: 'JWT token for authentication'\n    },\n    changePasswordToken: {\n      type: 'string'\n    },\n    permissions: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          action: {\n            type: 'string'\n          },\n          resourceType: {\n            type: 'string'\n          }\n        },\n        required: []\n      }\n    },\n    tenantUuid: {\n      type: 'string'\n    },\n    ttlSeconds: {\n      type: 'string'\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        clientRegistered: {\n          type: 'boolean'\n        },\n        createdBy: {\n          type: 'string'\n        },\n        createdOn: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deleted: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string'\n        },\n        disabled: {\n          type: 'boolean'\n        },\n        domain: {\n          type: 'string'\n        },\n        email: {\n          type: 'string'\n        },\n        emailVerified: {\n          type: 'boolean'\n        },\n        enableAutoLogin: {\n          type: 'boolean'\n        },\n        firstName: {\n          type: 'string'\n        },\n        lastLoginTime: {\n          type: 'string',\n          format: 'date-time'\n        },\n        lastName: {\n          type: 'string'\n        },\n        licenseFeatures: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        multipleLoginAllowed: {\n          type: 'boolean'\n        },\n        passwordSet: {\n          type: 'boolean'\n        },\n        principalId: {\n          type: 'string'\n        },\n        questionsSet: {\n          type: 'boolean'\n        },\n        roles: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        updatedBy: {\n          type: 'string'\n        },\n        updatedOn: {\n          type: 'string',\n          format: 'date-time'\n        },\n        username: {\n          type: 'string'\n        },\n        version: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: McpTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.authentication.getToken(body)));
};

export default { metadata, tool, handler };
