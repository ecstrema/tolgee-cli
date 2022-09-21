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
 * @interface SuggestRequestDto
 */
export interface SuggestRequestDto {
  /**
   * Key Id to get results for. Use when key is stored already.
   * @type {number}
   * @memberof SuggestRequestDto
   */
  keyId: number;
  /**
   *
   * @type {number}
   * @memberof SuggestRequestDto
   */
  targetLanguageId: number;
  /**
   * Text value of base translation. Useful, when base translation is not stored yet.
   * @type {string}
   * @memberof SuggestRequestDto
   */
  baseText?: string;
}

/**
 * Check if a given object implements the SuggestRequestDto interface.
 */
export function instanceOfSuggestRequestDto(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "keyId" in value;
  isInstance = isInstance && "targetLanguageId" in value;

  return isInstance;
}

export function SuggestRequestDtoFromJSON(json: any): SuggestRequestDto {
  return SuggestRequestDtoFromJSONTyped(json, false);
}

export function SuggestRequestDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SuggestRequestDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    keyId: json["keyId"],
    targetLanguageId: json["targetLanguageId"],
    baseText: !exists(json, "baseText") ? undefined : json["baseText"],
  };
}

export function SuggestRequestDtoToJSON(value?: SuggestRequestDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    keyId: value.keyId,
    targetLanguageId: value.targetLanguageId,
    baseText: value.baseText,
  };
}
