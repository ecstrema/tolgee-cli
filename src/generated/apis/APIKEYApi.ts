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
import {
  PagedModelLanguageModel,
  PagedModelLanguageModelFromJSON,
  PagedModelLanguageModelToJSON,
} from "../models";

export interface APIKEYApiGetAll6Request {
  page?: number;
  size?: number;
  sort?: Array<string>;
  ak?: string;
}

/**
 *
 */
export class APIKEYApi extends runtime.BaseAPI {
  /**
   * Returns all project languages
   */
  async getAll6Raw(
    requestParameters: APIKEYApiGetAll6Request,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PagedModelLanguageModel>> {
    const queryParameters: any = {};

    if (requestParameters.page !== undefined) {
      queryParameters["page"] = requestParameters.page;
    }

    if (requestParameters.size !== undefined) {
      queryParameters["size"] = requestParameters.size;
    }

    if (requestParameters.sort) {
      queryParameters["sort"] = requestParameters.sort;
    }

    if (requestParameters.ak !== undefined) {
      queryParameters["ak"] = requestParameters.ak;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/v2/projects/languages`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PagedModelLanguageModelFromJSON(jsonValue)
    );
  }

  /**
   * Returns all project languages
   */
  async getAll6(
    requestParameters: APIKEYApiGetAll6Request = {},
    initOverrides?: RequestInit
  ): Promise<PagedModelLanguageModel> {
    const response = await this.getAll6Raw(requestParameters, initOverrides);
    return await response.value();
  }
}
