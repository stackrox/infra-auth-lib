/* tslint:disable */
/* eslint-disable */
/**
 * proto/api/v1/user.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 *
 * @export
 * @interface ProtobufAny
 */
export interface ProtobufAny {
  [key: string]: object | any;

  /**
   *
   * @type {string}
   * @memberof ProtobufAny
   */
  '@type'?: string;
}
/**
 *
 * @export
 * @interface RpcStatus
 */
export interface RpcStatus {
  /**
   *
   * @type {number}
   * @memberof RpcStatus
   */
  code?: number;
  /**
   *
   * @type {string}
   * @memberof RpcStatus
   */
  message?: string;
  /**
   *
   * @type {Array<ProtobufAny>}
   * @memberof RpcStatus
   */
  details?: Array<ProtobufAny>;
}
/**
 * ServiceAccount represents an authenticated service account (robot) principal.
 * @export
 * @interface V1ServiceAccount
 */
export interface V1ServiceAccount {
  /**
   * Name is a human readable name for the service account.
   * @type {string}
   * @memberof V1ServiceAccount
   */
  Name?: string;
  /**
   * Description is a human readable description for the service account.
   * @type {string}
   * @memberof V1ServiceAccount
   */
  Description?: string;
  /**
   * Email is the Red Hat email address for the service account.
   * @type {string}
   * @memberof V1ServiceAccount
   */
  Email?: string;
  /**
   * IssuedAt is the time of issuing the service account token.
   * @type {string}
   * @memberof V1ServiceAccount
   */
  IssuedAt?: string;
  /**
   * NotBefore is the beginning of service account token valid time period.
   * @type {string}
   * @memberof V1ServiceAccount
   */
  NotBefore?: string;
  /**
   * ExpiresAt is the end of service account token valid time period.
   * @type {string}
   * @memberof V1ServiceAccount
   */
  ExpiresAt?: string;
}
/**
 *
 * @export
 * @interface V1TokenResponse
 */
export interface V1TokenResponse {
  /**
   *
   * @type {V1ServiceAccount}
   * @memberof V1TokenResponse
   */
  Account?: V1ServiceAccount;
  /**
   * Token is the token generated for the service account.
   * @type {string}
   * @memberof V1TokenResponse
   */
  Token?: string;
}
/**
 * User represents an authenticated (human) principal.
 * @export
 * @interface V1User
 */
export interface V1User {
  /**
   * Expiry is the expiration date of this user session. Used only as a hint to the user and not for enforcement.
   * @type {string}
   * @memberof V1User
   */
  Expiry?: string;
  /**
   * Name is the full name of the user.
   * @type {string}
   * @memberof V1User
   */
  Name?: string;
  /**
   * Email is the email address of the user.
   * @type {string}
   * @memberof V1User
   */
  Email?: string;
  /**
   * Picture is a URL linking to this user\'s profile picture, if available.
   * @type {string}
   * @memberof V1User
   */
  Picture?: string;
}
/**
 * WhoamiResponse represents details about the current authenticated principal.
 * @export
 * @interface V1WhoamiResponse
 */
export interface V1WhoamiResponse {
  /**
   *
   * @type {V1User}
   * @memberof V1WhoamiResponse
   */
  User?: V1User;
  /**
   *
   * @type {V1ServiceAccount}
   * @memberof V1WhoamiResponse
   */
  ServiceAccount?: V1ServiceAccount;
}

/**
 * UserServiceApi - axios parameter creator
 * @export
 */
export const UserServiceApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary CreateToken generates an arbitrary service account token
     * @param {V1ServiceAccount} body ServiceAccount represents an authenticated service account (robot) principal.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userServiceCreateToken: async (
      body: V1ServiceAccount,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      assertParamExists('userServiceCreateToken', 'body', body);
      const localVarPath = `/v1/token-create`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Token generates a service account token for the current user.
     * @param {object} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userServiceToken: async (
      body: object,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      assertParamExists('userServiceToken', 'body', body);
      const localVarPath = `/v1/token`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Whoami provides information about the currently authenticated principal.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userServiceWhoami: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/v1/whoami`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UserServiceApi - functional programming interface
 * @export
 */
export const UserServiceApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserServiceApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary CreateToken generates an arbitrary service account token
     * @param {V1ServiceAccount} body ServiceAccount represents an authenticated service account (robot) principal.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userServiceCreateToken(
      body: V1ServiceAccount,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1TokenResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userServiceCreateToken(
        body,
        options
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @summary Token generates a service account token for the current user.
     * @param {object} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userServiceToken(
      body: object,
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1TokenResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userServiceToken(body, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @summary Whoami provides information about the currently authenticated principal.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userServiceWhoami(
      options?: AxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1WhoamiResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userServiceWhoami(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * UserServiceApi - factory interface
 * @export
 */
export const UserServiceApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserServiceApiFp(configuration);
  return {
    /**
     *
     * @summary CreateToken generates an arbitrary service account token
     * @param {V1ServiceAccount} body ServiceAccount represents an authenticated service account (robot) principal.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userServiceCreateToken(body: V1ServiceAccount, options?: any): AxiosPromise<V1TokenResponse> {
      return localVarFp
        .userServiceCreateToken(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Token generates a service account token for the current user.
     * @param {object} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userServiceToken(body: object, options?: any): AxiosPromise<V1TokenResponse> {
      return localVarFp.userServiceToken(body, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Whoami provides information about the currently authenticated principal.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userServiceWhoami(options?: any): AxiosPromise<V1WhoamiResponse> {
      return localVarFp.userServiceWhoami(options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * UserServiceApi - object-oriented interface
 * @export
 * @class UserServiceApi
 * @extends {BaseAPI}
 */
export class UserServiceApi extends BaseAPI {
  /**
   *
   * @summary CreateToken generates an arbitrary service account token
   * @param {V1ServiceAccount} body ServiceAccount represents an authenticated service account (robot) principal.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserServiceApi
   */
  public userServiceCreateToken(body: V1ServiceAccount, options?: AxiosRequestConfig) {
    return UserServiceApiFp(this.configuration)
      .userServiceCreateToken(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Token generates a service account token for the current user.
   * @param {object} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserServiceApi
   */
  public userServiceToken(body: object, options?: AxiosRequestConfig) {
    return UserServiceApiFp(this.configuration)
      .userServiceToken(body, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Whoami provides information about the currently authenticated principal.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserServiceApi
   */
  public userServiceWhoami(options?: AxiosRequestConfig) {
    return UserServiceApiFp(this.configuration)
      .userServiceWhoami(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
