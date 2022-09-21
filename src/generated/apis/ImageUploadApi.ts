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
import type { UploadedImageModel } from "../models";
import {
  UploadedImageModelFromJSON,
  UploadedImageModelToJSON,
} from "../models";

export interface Delete8Request {
  ids: Set<number>;
  ak?: string;
  xAPIKey?: string;
}

export interface UploadRequest {
  image: Blob;
  ak?: string;
  xAPIKey?: string;
}

/**
 *
 */
export class ImageUploadApi extends runtime.BaseAPI {
  /**
   * Deletes uploaded images
   */
  async delete8Raw(
    requestParameters: Delete8Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.ids === null || requestParameters.ids === undefined) {
      throw new runtime.RequiredError(
        "ids",
        "Required parameter requestParameters.ids was null or undefined when calling delete8."
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
        path: `/v2/image-upload/{ids}`.replace(
          `{${"ids"}}`,
          encodeURIComponent(String(requestParameters.ids))
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
   * Deletes uploaded images
   */
  async delete8(
    requestParameters: Delete8Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.delete8Raw(requestParameters, initOverrides);
  }

  /**
   * Uploads an image for later use
   */
  async uploadRaw(
    requestParameters: UploadRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UploadedImageModel>> {
    if (
      requestParameters.image === null ||
      requestParameters.image === undefined
    ) {
      throw new runtime.RequiredError(
        "image",
        "Required parameter requestParameters.image was null or undefined when calling upload."
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

    if (requestParameters.image !== undefined) {
      formParams.append("image", requestParameters.image as any);
    }

    const response = await this.request(
      {
        path: `/v2/image-upload`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UploadedImageModelFromJSON(jsonValue)
    );
  }

  /**
   * Uploads an image for later use
   */
  async upload(
    requestParameters: UploadRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UploadedImageModel> {
    const response = await this.uploadRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
