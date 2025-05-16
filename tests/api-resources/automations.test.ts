// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import McpTest from 'mcp-test';

const client = new McpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource automations', () => {
  // skipped: tests are disabled for the time being
  test.skip('deploy', async () => {
    const responsePromise = client.automations.deploy();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deploy: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.automations.deploy(
        {
          attendedRequest: { deploymentDeviceId: 0, queueDeployment: true },
          automationPriority: 'automationPriority',
          botId: 0,
          description: 'description',
          'X-Authorization':
            'eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIyMyIsImNsaWVudFR5cGUiOiJXRUIiLCJ0ZW5hbnRVdWlkIjoiNzJhN2UzNGUtMmRjOS00ODA2LWI1MjktMDQ3MmYyMGY1MGEwIiwibXVsdGlwbGVMb2dpbiI6ZmFsc2UsImlhdCI6MTc0NzI5NzY4MiwiZXhwIjoxNzQ3OTAyNDgyLCJpc3MiOiJBdXRvbWF0aW9uQW55d2hlcmUiLCJuYW5vVGltZSI6MTQ1MzgwMDI3MDcwNTB9.EguyZtsooDFLVpCFtvnnavcnQw57Uq1pb_FjOAX-WNYD1VpD86nfYX4a8gwaLayWTzVzzB_KrHLyOyFgcHXC2xlA2j4lgWL8AZvSUX0Akn3_5C5YbByO7nV_l2e4T5FuCtG7HJsnsWrFwM8ZoC0-XwaLM89wSwMielBuooEcYtQEX7c0AhtrFHk0wEtuCHszE-EcTsUNheaC1XzllK53jkLZyjB6NfIVlYuIVB8XWCqb_Bhal9kZWKiCvtNy2Nt0a4_6IR7WgQlAp4EqdnurrImX5K46JjHJsC7pCA4osr7ClqpCjOyCmf2JOcz_su7eZFIdOvHrLIp9d-SIWqIxYQ',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(McpTest.NotFoundError);
  });
});
