// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Automations extends APIResource {
  /**
   * Deploy using botId
   *
   * @example
   * ```ts
   * const response = await client.automations.deploy();
   * ```
   */
  deploy(
    params: AutomationDeployParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutomationDeployResponse> {
    const { 'X-Authorization': xAuthorization, ...body } = params ?? {};
    return this._client.post('/v4/automations/deploy', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAuthorization != null ? { 'X-Authorization': xAuthorization } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface AutomationDeployResponse {
  /**
   * Name of the automation
   */
  automationName?: string;

  /**
   * Unique identifier for the deployment
   */
  deploymentId?: string;
}

export interface AutomationDeployParams {
  /**
   * Body param:
   */
  attendedRequest?: AutomationDeployParams.AttendedRequest;

  /**
   * Body param:
   */
  automationPriority?: string;

  /**
   * Body param:
   */
  botId?: number;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Header param:
   */
  'X-Authorization'?: string;
}

export namespace AutomationDeployParams {
  export interface AttendedRequest {
    deploymentDeviceId?: number;

    queueDeployment?: boolean;
  }
}

export declare namespace Automations {
  export {
    type AutomationDeployResponse as AutomationDeployResponse,
    type AutomationDeployParams as AutomationDeployParams,
  };
}
