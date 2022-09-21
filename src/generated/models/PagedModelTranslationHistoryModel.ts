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
import type { PageMetadata } from "./PageMetadata";
import {
  PageMetadataFromJSON,
  PageMetadataFromJSONTyped,
  PageMetadataToJSON,
} from "./PageMetadata";
import type { PagedModelTranslationHistoryModelEmbedded } from "./PagedModelTranslationHistoryModelEmbedded";
import {
  PagedModelTranslationHistoryModelEmbeddedFromJSON,
  PagedModelTranslationHistoryModelEmbeddedFromJSONTyped,
  PagedModelTranslationHistoryModelEmbeddedToJSON,
} from "./PagedModelTranslationHistoryModelEmbedded";

/**
 *
 * @export
 * @interface PagedModelTranslationHistoryModel
 */
export interface PagedModelTranslationHistoryModel {
  /**
   *
   * @type {PagedModelTranslationHistoryModelEmbedded}
   * @memberof PagedModelTranslationHistoryModel
   */
  embedded?: PagedModelTranslationHistoryModelEmbedded;
  /**
   *
   * @type {PageMetadata}
   * @memberof PagedModelTranslationHistoryModel
   */
  page?: PageMetadata;
}

/**
 * Check if a given object implements the PagedModelTranslationHistoryModel interface.
 */
export function instanceOfPagedModelTranslationHistoryModel(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function PagedModelTranslationHistoryModelFromJSON(
  json: any
): PagedModelTranslationHistoryModel {
  return PagedModelTranslationHistoryModelFromJSONTyped(json, false);
}

export function PagedModelTranslationHistoryModelFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PagedModelTranslationHistoryModel {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    embedded: !exists(json, "_embedded")
      ? undefined
      : PagedModelTranslationHistoryModelEmbeddedFromJSON(json["_embedded"]),
    page: !exists(json, "page")
      ? undefined
      : PageMetadataFromJSON(json["page"]),
  };
}

export function PagedModelTranslationHistoryModelToJSON(
  value?: PagedModelTranslationHistoryModel | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    _embedded: PagedModelTranslationHistoryModelEmbeddedToJSON(value.embedded),
    page: PageMetadataToJSON(value.page),
  };
}
