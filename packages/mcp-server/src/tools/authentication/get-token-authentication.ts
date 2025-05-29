// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Get X-Authorization token',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: McpTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.authentication.getToken(body);
};

export default { metadata, tool, handler };
