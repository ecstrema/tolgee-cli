/* tslint:disable */
/* eslint-disable */
/**
 * Tolgee API
 * Tolgee Server API reference
 *
 * The version of the OpenAPI document: v1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";

export interface AutoTranslate1Request {
  keyId: number;
  languages?: Set<string>;
  useMachineTranslation?: boolean;
  useTranslationMemory?: boolean;
  ak?: string;
  xAPIKey?: string;
}

/**
 *
 */
export class AutoTranslationApi extends runtime.BaseAPI {
  /**
   * Uses enabled auto-translation methods. You need to set at least one of useMachineTranslation or useTranslationMemory to true.  This will replace the the existing translation with the result obtained from specified source!
   * Auto translates keys
   */
  async autoTranslate1Raw(
    requestParameters: AutoTranslate1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.keyId === null ||
      requestParameters.keyId === undefined
    ) {
      throw new runtime.RequiredError(
        "keyId",
        "Required parameter requestParameters.keyId was null or undefined when calling autoTranslate1."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.languages) {
      queryParameters["languages"] = requestParameters.languages;
    }

    if (requestParameters.useMachineTranslation !== undefined) {
      queryParameters["useMachineTranslation"] =
        requestParameters.useMachineTranslation;
    }

    if (requestParameters.useTranslationMemory !== undefined) {
      queryParameters["useTranslationMemory"] =
        requestParameters.useTranslationMemory;
    }

    if (requestParameters.ak !== undefined) {
      queryParameters["ak"] = requestParameters.ak;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xAPIKey !== undefined &&
      requestParameters.xAPIKey !== null
    ) {
      headerParameters["X-API-Key"] = String(requestParameters.xAPIKey);
    }

    const response = await this.request(
      {
        path: `/v2/projects/keys/{keyId}/auto-translate`.replace(
          `{${"keyId"}}`,
          encodeURIComponent(String(requestParameters.keyId))
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Uses enabled auto-translation methods. You need to set at least one of useMachineTranslation or useTranslationMemory to true.  This will replace the the existing translation with the result obtained from specified source!
   * Auto translates keys
   */
  async autoTranslate1(
    requestParameters: AutoTranslate1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.autoTranslate1Raw(requestParameters, initOverrides);
  }
}
