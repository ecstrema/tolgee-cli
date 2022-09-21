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
  ImportAddFilesResultModel,
  ImportLanguageModel,
  PagedModelEntityModelImportFileIssueView,
  PagedModelImportLanguageModel,
  PagedModelImportTranslationModel,
} from "../models";
import {
  ImportAddFilesResultModelFromJSON,
  ImportAddFilesResultModelToJSON,
  ImportLanguageModelFromJSON,
  ImportLanguageModelToJSON,
  PagedModelEntityModelImportFileIssueViewFromJSON,
  PagedModelEntityModelImportFileIssueViewToJSON,
  PagedModelImportLanguageModelFromJSON,
  PagedModelImportLanguageModelToJSON,
  PagedModelImportTranslationModelFromJSON,
  PagedModelImportTranslationModelToJSON,
} from "../models";

export interface AddFiles1Request {
  files: Array<Blob>;
  ak?: string;
  xAPIKey?: string;
}

export interface ApplyImport1Request {
  forceMode?: ApplyImport1ForceModeEnum;
  ak?: string;
  xAPIKey?: string;
}

export interface CancelImport1Request {
  ak?: string;
  xAPIKey?: string;
}

export interface DeleteLanguage1Request {
  languageId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface GetImportFileIssues1Request {
  importFileId: number;
  page?: number;
  size?: number;
  sort?: Array<string>;
  ak?: string;
  xAPIKey?: string;
}

export interface GetImportLanguage1Request {
  languageId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface GetImportResult1Request {
  page?: number;
  size?: number;
  sort?: Array<string>;
  ak?: string;
  xAPIKey?: string;
}

export interface GetImportTranslations1Request {
  languageId: number;
  onlyConflicts?: boolean;
  onlyUnresolved?: boolean;
  search?: string;
  page?: number;
  size?: number;
  sort?: Array<string>;
  ak?: string;
  xAPIKey?: string;
}

export interface ResetExistingLanguage1Request {
  importLanguageId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface ResolveTranslationSetKeepExisting1Request {
  languageId: number;
  translationId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface ResolveTranslationSetKeepExisting3Request {
  languageId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface ResolveTranslationSetOverride1Request {
  languageId: number;
  translationId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface ResolveTranslationSetOverride3Request {
  languageId: number;
  ak?: string;
  xAPIKey?: string;
}

export interface SelectExistingLanguage1Request {
  importLanguageId: number;
  existingLanguageId: number;
  ak?: string;
  xAPIKey?: string;
}

/**
 *
 */
export class ImportApi extends runtime.BaseAPI {
  /**
   * Prepares provided files to import.
   * Add files
   */
  async addFiles1Raw(
    requestParameters: AddFiles1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ImportAddFilesResultModel>> {
    if (
      requestParameters.files === null ||
      requestParameters.files === undefined
    ) {
      throw new runtime.RequiredError(
        "files",
        "Required parameter requestParameters.files was null or undefined when calling addFiles1."
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

    const consumes: runtime.Consume[] = [
      { contentType: "multipart/form-data" },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    // use FormData to transmit files using content-type "multipart/form-data"
    useForm = canConsumeForm;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters.files) {
      requestParameters.files.forEach((element) => {
        formParams.append("files", element as any);
      });
    }

    const response = await this.request(
      {
        path: `/v2/projects/import`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ImportAddFilesResultModelFromJSON(jsonValue)
    );
  }

  /**
   * Prepares provided files to import.
   * Add files
   */
  async addFiles1(
    requestParameters: AddFiles1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ImportAddFilesResultModel> {
    const response = await this.addFiles1Raw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Imports the data prepared in previous step
   * Apply
   */
  async applyImport1Raw(
    requestParameters: ApplyImport1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    if (requestParameters.forceMode !== undefined) {
      queryParameters["forceMode"] = requestParameters.forceMode;
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
        path: `/v2/projects/import/apply`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Imports the data prepared in previous step
   * Apply
   */
  async applyImport1(
    requestParameters: ApplyImport1Request = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.applyImport1Raw(requestParameters, initOverrides);
  }

  /**
   * Deletes prepared import data.
   * Delete
   */
  async cancelImport1Raw(
    requestParameters: CancelImport1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
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
        path: `/v2/projects/import`,
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Deletes prepared import data.
   * Delete
   */
  async cancelImport1(
    requestParameters: CancelImport1Request = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.cancelImport1Raw(requestParameters, initOverrides);
  }

  /**
   * Deletes language prepared to import.
   * Delete language
   */
  async deleteLanguage1Raw(
    requestParameters: DeleteLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling deleteLanguage1."
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
        path: `/v2/projects/import/result/languages/{languageId}`.replace(
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
   * Deletes language prepared to import.
   * Delete language
   */
  async deleteLanguage1(
    requestParameters: DeleteLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteLanguage1Raw(requestParameters, initOverrides);
  }

  /**
   * Returns issues for uploaded file.
   * Get file issues.
   */
  async getImportFileIssues1Raw(
    requestParameters: GetImportFileIssues1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<PagedModelEntityModelImportFileIssueView>> {
    if (
      requestParameters.importFileId === null ||
      requestParameters.importFileId === undefined
    ) {
      throw new runtime.RequiredError(
        "importFileId",
        "Required parameter requestParameters.importFileId was null or undefined when calling getImportFileIssues1."
      );
    }

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
        path: `/v2/projects/import/result/files/{importFileId}/issues`.replace(
          `{${"importFileId"}}`,
          encodeURIComponent(String(requestParameters.importFileId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PagedModelEntityModelImportFileIssueViewFromJSON(jsonValue)
    );
  }

  /**
   * Returns issues for uploaded file.
   * Get file issues.
   */
  async getImportFileIssues1(
    requestParameters: GetImportFileIssues1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<PagedModelEntityModelImportFileIssueView> {
    const response = await this.getImportFileIssues1Raw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns language prepared to import.
   * Get import language
   */
  async getImportLanguage1Raw(
    requestParameters: GetImportLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ImportLanguageModel>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling getImportLanguage1."
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
        path: `/v2/projects/import/result/languages/{languageId}`.replace(
          `{${"languageId"}}`,
          encodeURIComponent(String(requestParameters.languageId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ImportLanguageModelFromJSON(jsonValue)
    );
  }

  /**
   * Returns language prepared to import.
   * Get import language
   */
  async getImportLanguage1(
    requestParameters: GetImportLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ImportLanguageModel> {
    const response = await this.getImportLanguage1Raw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns the result of preparation.
   * Get result
   */
  async getImportResult1Raw(
    requestParameters: GetImportResult1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<PagedModelImportLanguageModel>> {
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
        path: `/v2/projects/import/result`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PagedModelImportLanguageModelFromJSON(jsonValue)
    );
  }

  /**
   * Returns the result of preparation.
   * Get result
   */
  async getImportResult1(
    requestParameters: GetImportResult1Request = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<PagedModelImportLanguageModel> {
    const response = await this.getImportResult1Raw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns translations prepared to import.
   * Get translations
   */
  async getImportTranslations1Raw(
    requestParameters: GetImportTranslations1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<PagedModelImportTranslationModel>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling getImportTranslations1."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.onlyConflicts !== undefined) {
      queryParameters["onlyConflicts"] = requestParameters.onlyConflicts;
    }

    if (requestParameters.onlyUnresolved !== undefined) {
      queryParameters["onlyUnresolved"] = requestParameters.onlyUnresolved;
    }

    if (requestParameters.search !== undefined) {
      queryParameters["search"] = requestParameters.search;
    }

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
        path: `/v2/projects/import/result/languages/{languageId}/translations`.replace(
          `{${"languageId"}}`,
          encodeURIComponent(String(requestParameters.languageId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PagedModelImportTranslationModelFromJSON(jsonValue)
    );
  }

  /**
   * Returns translations prepared to import.
   * Get translations
   */
  async getImportTranslations1(
    requestParameters: GetImportTranslations1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<PagedModelImportTranslationModel> {
    const response = await this.getImportTranslations1Raw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Resets existing language paired with language to import.
   * Reset existing language pairing
   */
  async resetExistingLanguage1Raw(
    requestParameters: ResetExistingLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.importLanguageId === null ||
      requestParameters.importLanguageId === undefined
    ) {
      throw new runtime.RequiredError(
        "importLanguageId",
        "Required parameter requestParameters.importLanguageId was null or undefined when calling resetExistingLanguage1."
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
        path: `/v2/projects/import/result/languages/{importLanguageId}/reset-existing`.replace(
          `{${"importLanguageId"}}`,
          encodeURIComponent(String(requestParameters.importLanguageId))
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
   * Resets existing language paired with language to import.
   * Reset existing language pairing
   */
  async resetExistingLanguage1(
    requestParameters: ResetExistingLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.resetExistingLanguage1Raw(requestParameters, initOverrides);
  }

  /**
   * Resolves translation conflict. The old translation will be kept.
   * Resolve conflict (keep existing)
   */
  async resolveTranslationSetKeepExisting1Raw(
    requestParameters: ResolveTranslationSetKeepExisting1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetKeepExisting1."
      );
    }

    if (
      requestParameters.translationId === null ||
      requestParameters.translationId === undefined
    ) {
      throw new runtime.RequiredError(
        "translationId",
        "Required parameter requestParameters.translationId was null or undefined when calling resolveTranslationSetKeepExisting1."
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
        path: `/v2/projects/import/result/languages/{languageId}/translations/{translationId}/resolve/set-keep-existing`
          .replace(
            `{${"languageId"}}`,
            encodeURIComponent(String(requestParameters.languageId))
          )
          .replace(
            `{${"translationId"}}`,
            encodeURIComponent(String(requestParameters.translationId))
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
   * Resolves translation conflict. The old translation will be kept.
   * Resolve conflict (keep existing)
   */
  async resolveTranslationSetKeepExisting1(
    requestParameters: ResolveTranslationSetKeepExisting1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.resolveTranslationSetKeepExisting1Raw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Resolves all translation conflicts for provided language. The old translations will be kept.
   * Resolve all translation conflicts (keep existing)
   */
  async resolveTranslationSetKeepExisting3Raw(
    requestParameters: ResolveTranslationSetKeepExisting3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetKeepExisting3."
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
        path: `/v2/projects/import/result/languages/{languageId}/resolve-all/set-keep-existing`.replace(
          `{${"languageId"}}`,
          encodeURIComponent(String(requestParameters.languageId))
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
   * Resolves all translation conflicts for provided language. The old translations will be kept.
   * Resolve all translation conflicts (keep existing)
   */
  async resolveTranslationSetKeepExisting3(
    requestParameters: ResolveTranslationSetKeepExisting3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.resolveTranslationSetKeepExisting3Raw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Resolves translation conflict. The old translation will be overridden.
   * Resolve conflict (override)
   */
  async resolveTranslationSetOverride1Raw(
    requestParameters: ResolveTranslationSetOverride1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetOverride1."
      );
    }

    if (
      requestParameters.translationId === null ||
      requestParameters.translationId === undefined
    ) {
      throw new runtime.RequiredError(
        "translationId",
        "Required parameter requestParameters.translationId was null or undefined when calling resolveTranslationSetOverride1."
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
        path: `/v2/projects/import/result/languages/{languageId}/translations/{translationId}/resolve/set-override`
          .replace(
            `{${"languageId"}}`,
            encodeURIComponent(String(requestParameters.languageId))
          )
          .replace(
            `{${"translationId"}}`,
            encodeURIComponent(String(requestParameters.translationId))
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
   * Resolves translation conflict. The old translation will be overridden.
   * Resolve conflict (override)
   */
  async resolveTranslationSetOverride1(
    requestParameters: ResolveTranslationSetOverride1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.resolveTranslationSetOverride1Raw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Resolves all translation conflicts for provided language. The old translations will be overridden.
   * Resolve all translation conflicts (override)
   */
  async resolveTranslationSetOverride3Raw(
    requestParameters: ResolveTranslationSetOverride3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.languageId === null ||
      requestParameters.languageId === undefined
    ) {
      throw new runtime.RequiredError(
        "languageId",
        "Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetOverride3."
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
        path: `/v2/projects/import/result/languages/{languageId}/resolve-all/set-override`.replace(
          `{${"languageId"}}`,
          encodeURIComponent(String(requestParameters.languageId))
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
   * Resolves all translation conflicts for provided language. The old translations will be overridden.
   * Resolve all translation conflicts (override)
   */
  async resolveTranslationSetOverride3(
    requestParameters: ResolveTranslationSetOverride3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.resolveTranslationSetOverride3Raw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Sets existing language to pair with language to import. Data will be imported to selected existing language when applied.
   * Pair existing language
   */
  async selectExistingLanguage1Raw(
    requestParameters: SelectExistingLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.importLanguageId === null ||
      requestParameters.importLanguageId === undefined
    ) {
      throw new runtime.RequiredError(
        "importLanguageId",
        "Required parameter requestParameters.importLanguageId was null or undefined when calling selectExistingLanguage1."
      );
    }

    if (
      requestParameters.existingLanguageId === null ||
      requestParameters.existingLanguageId === undefined
    ) {
      throw new runtime.RequiredError(
        "existingLanguageId",
        "Required parameter requestParameters.existingLanguageId was null or undefined when calling selectExistingLanguage1."
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
        path: `/v2/projects/import/result/languages/{importLanguageId}/select-existing/{existingLanguageId}`
          .replace(
            `{${"importLanguageId"}}`,
            encodeURIComponent(String(requestParameters.importLanguageId))
          )
          .replace(
            `{${"existingLanguageId"}}`,
            encodeURIComponent(String(requestParameters.existingLanguageId))
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
   * Sets existing language to pair with language to import. Data will be imported to selected existing language when applied.
   * Pair existing language
   */
  async selectExistingLanguage1(
    requestParameters: SelectExistingLanguage1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.selectExistingLanguage1Raw(requestParameters, initOverrides);
  }
}

/**
 * @export
 */
export const ApplyImport1ForceModeEnum = {
  Override: "OVERRIDE",
  Keep: "KEEP",
  NoForce: "NO_FORCE",
} as const;
export type ApplyImport1ForceModeEnum =
  typeof ApplyImport1ForceModeEnum[keyof typeof ApplyImport1ForceModeEnum];
