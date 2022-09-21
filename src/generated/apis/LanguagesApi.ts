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
import type {
  LanguageDto,
  LanguageModel,
  PagedModelLanguageModel,
} from "../models";
import {
  LanguageDtoFromJSON,
  LanguageDtoToJSON,
  LanguageModelFromJSON,
  LanguageModelToJSON,
  PagedModelLanguageModelFromJSON,
  PagedModelLanguageModelToJSON,
} from "../models";

export interface CreateLanguage1Request {
  languageDto: LanguageDto;
  ak?: string;
  xAPIKey?: string;
}

export interface DeleteLanguage3Request {
  languageId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface EditLanguage1Request {
  languageId: number;
  languageDto: LanguageDto;
  ak?: string;
  xAPIKey?: string;
}

export interface GetAll6Request {
  page?: number;
  size?: number;
  sort?: Array<string>;
  ak?: string;
  xAPIKey?: string;
}

/**
 *
 */
export class LanguagesApi extends runtime.BaseAPI {
  /**
   * Creates language
   */
  async createLanguage1Raw(
    requestParameters: CreateLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<LanguageModel>> {
    if (
      requestParameters.languageDto === null ||
      requestParameters.languageDto === undefined
    ) {
      throw new runtime.RequiredError(
        "languageDto",
        "Required parameter requestParameters.languageDto was null or undefined when calling createLanguage1."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.ak !== undefined) {
      queryParameters["ak"] = requestParameters.ak;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (
      requestParameters.xAPIKey !== undefined &&
      requestParameters.xAPIKey !== null
    ) {
      headerParameters["X-API-Key"] = String(requestParameters.xAPIKey);
    }

    const response = await this.request(
      {
        path: `/v2/projects/languages`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: LanguageDtoToJSON(requestParameters.languageDto),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LanguageModelFromJSON(jsonValue)
    );
  }

  /**
   * Creates language
   */
  async createLanguage1(
    requestParameters: CreateLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<LanguageModel> {
    const response = await this.createLanguage1Raw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Deletes specific language
   */
  async deleteLanguage3Raw(
    requestParameters: DeleteLanguage3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling deleteLanguage3."
      );
    }

    const queryParameters: any = {};

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
        path: `/v2/projects/languages/{languageId}`.replace(
          `{${"languageId"}}`,
          encodeURIComponent(String(requestParameters.languageId))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Deletes specific language
   */
  async deleteLanguage3(
    requestParameters: DeleteLanguage3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteLanguage3Raw(requestParameters, initOverrides);
  }

  /**
   * Edits language
   */
  async editLanguage1Raw(
    requestParameters: EditLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<LanguageModel>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling editLanguage1."
      );
    }

    if (
      requestParameters.languageDto === null ||
      requestParameters.languageDto === undefined
    ) {
      throw new runtime.RequiredError(
        "languageDto",
        "Required parameter requestParameters.languageDto was null or undefined when calling editLanguage1."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.ak !== undefined) {
      queryParameters["ak"] = requestParameters.ak;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (
      requestParameters.xAPIKey !== undefined &&
      requestParameters.xAPIKey !== null
    ) {
      headerParameters["X-API-Key"] = String(requestParameters.xAPIKey);
    }

    const response = await this.request(
      {
        path: `/v2/projects/languages/{languageId}`.replace(
          `{${"languageId"}}`,
          encodeURIComponent(String(requestParameters.languageId))
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: LanguageDtoToJSON(requestParameters.languageDto),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LanguageModelFromJSON(jsonValue)
    );
  }

  /**
   * Edits language
   */
  async editLanguage1(
    requestParameters: EditLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<LanguageModel> {
    const response = await this.editLanguage1Raw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns all project languages
   */
  async getAll6Raw(
    requestParameters: GetAll6Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
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

    if (
      requestParameters.xAPIKey !== undefined &&
      requestParameters.xAPIKey !== null
    ) {
      headerParameters["X-API-Key"] = String(requestParameters.xAPIKey);
    }

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
    requestParameters: GetAll6Request = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<PagedModelLanguageModel> {
    const response = await this.getAll6Raw(requestParameters, initOverrides);
    return await response.value();
  }
}
