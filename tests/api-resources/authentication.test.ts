// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import McpTest from 'mcp-test';

const client = new McpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authentication', () => {
  // skipped: tests are disabled for the time being
  test.skip('getToken', async () => {
    const responsePromise = client.authentication.getToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getToken: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.authentication.getToken({ body: {} }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(McpTest.NotFoundError);
  });
});
