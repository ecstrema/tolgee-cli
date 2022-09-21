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
import type { TranslationCommentModel } from "./TranslationCommentModel";
import {
  TranslationCommentModelFromJSON,
  TranslationCommentModelFromJSONTyped,
  TranslationCommentModelToJSON,
} from "./TranslationCommentModel";
import type { TranslationModel } from "./TranslationModel";
import {
  TranslationModelFromJSON,
  TranslationModelFromJSONTyped,
  TranslationModelToJSON,
} from "./TranslationModel";

/**
 *
 * @export
 * @interface TranslationWithCommentModel
 */
export interface TranslationWithCommentModel {
  /**
   *
   * @type {TranslationModel}
   * @memberof TranslationWithCommentModel
   */
  translation: TranslationModel;
  /**
   *
   * @type {TranslationCommentModel}
   * @memberof TranslationWithCommentModel
   */
  comment: TranslationCommentModel;
}

/**
 * Check if a given object implements the TranslationWithCommentModel interface.
 */
export function instanceOfTranslationWithCommentModel(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "translation" in value;
  isInstance = isInstance && "comment" in value;

  return isInstance;
}

export function TranslationWithCommentModelFromJSON(
  json: any
): TranslationWithCommentModel {
  return TranslationWithCommentModelFromJSONTyped(json, false);
}

export function TranslationWithCommentModelFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TranslationWithCommentModel {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    translation: TranslationModelFromJSON(json["translation"]),
    comment: TranslationCommentModelFromJSON(json["comment"]),
  };
}

export function TranslationWithCommentModelToJSON(
  value?: TranslationWithCommentModel | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    translation: TranslationModelToJSON(value.translation),
    comment: TranslationCommentModelToJSON(value.comment),
  };
}
