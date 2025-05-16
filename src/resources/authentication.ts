// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Authentication extends APIResource {
  /**
   * Get X-Authorization token
   */
  getToken(
    params: AuthenticationGetTokenParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<AuthenticationGetTokenResponse> {
    const { body } = params ?? {};
    return this._client.post('/v2/authentication', { body: body, ...options });
  }
}

export interface AuthenticationGetTokenResponse {
  /**
   * JWT token for authentication
   */
  token?: string;

  changePasswordToken?: string;

  permissions?: Array<AuthenticationGetTokenResponse.Permission>;

  tenantUuid?: string;

  ttlSeconds?: string;

  user?: AuthenticationGetTokenResponse.User;
}

export namespace AuthenticationGetTokenResponse {
  export interface Permission {
    action?: string;

    resourceType?: string;
  }

  export interface User {
    id?: string;

    clientRegistered?: boolean;

    createdBy?: string;

    createdOn?: string;

    deleted?: boolean;

    description?: string;

    disabled?: boolean;

    domain?: string;

    email?: string;

    emailVerified?: boolean;

    enableAutoLogin?: boolean;

    firstName?: string;

    lastLoginTime?: string;

    lastName?: string;

    licenseFeatures?: Array<string>;

    multipleLoginAllowed?: boolean;

    passwordSet?: boolean;

    principalId?: string;

    questionsSet?: boolean;

    roles?: Array<User.Role>;

    updatedBy?: string;

    updatedOn?: string;

    username?: string;

    version?: number;
  }

  export namespace User {
    export interface Role {
      id?: string;

      name?: string;
    }
  }
}

export interface AuthenticationGetTokenParams {
  body?: unknown;
}

export declare namespace Authentication {
  export {
    type AuthenticationGetTokenResponse as AuthenticationGetTokenResponse,
    type AuthenticationGetTokenParams as AuthenticationGetTokenParams,
  };
}
