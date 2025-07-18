// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'mcp-test-mcp/filtering';
import { Metadata, asTextContentResult } from 'mcp-test-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeploy using botId\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    automationName: {\n      type: 'string',\n      description: 'Name of the automation'\n    },\n    deploymentId: {\n      type: 'string',\n      description: 'Unique identifier for the deployment'\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: McpTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.automations.deploy(body)));
};

export default { metadata, tool, handler };
