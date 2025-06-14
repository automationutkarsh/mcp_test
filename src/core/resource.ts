// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { McpTest } from '../client';

export abstract class APIResource {
  protected _client: McpTest;

  constructor(client: McpTest) {
    this._client = client;
  }
}
