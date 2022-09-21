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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface PageMetadata
 */
export interface PageMetadata {
  /**
   *
   * @type {number}
   * @memberof PageMetadata
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageMetadata
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageMetadata
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PageMetadata
   */
  number?: number;
}

/**
 * Check if a given object implements the PageMetadata interface.
 */
export function instanceOfPageMetadata(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function PageMetadataFromJSON(json: any): PageMetadata {
  return PageMetadataFromJSONTyped(json, false);
}

export function PageMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageMetadata {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    size: !exists(json, "size") ? undefined : json["size"],
    totalElements: !exists(json, "totalElements")
      ? undefined
      : json["totalElements"],
    totalPages: !exists(json, "totalPages") ? undefined : json["totalPages"],
    number: !exists(json, "number") ? undefined : json["number"],
  };
}

export function PageMetadataToJSON(value?: PageMetadata | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    size: value.size,
    totalElements: value.totalElements,
    totalPages: value.totalPages,
    number: value.number,
  };
}
