// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'mcp-test-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import McpTest from 'mcp-test';

export const metadata: Metadata = {
  resource: 'automations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v4/automations/deploy',
};

export const tool: Tool = {
  name: 'deploy_automations',
  description: 'Deploy using botId',
  inputSchema: {
    type: 'object',
    properties: {
      attendedRequest: {
        type: 'object',
        properties: {
          deploymentDeviceId: {
            type: 'integer',
          },
          queueDeployment: {
            type: 'boolean',
          },
        },
        required: [],
      },
      automationPriority: {
        type: 'string',
      },
      botId: {
        type: 'integer',
      },
      description: {
        type: 'string',
      },
      'X-Authorization': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: McpTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.automations.deploy(body));
};

export default { metadata, tool, handler };
