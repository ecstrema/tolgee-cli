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
import type { Avatar } from "./Avatar";
import { AvatarFromJSON, AvatarFromJSONTyped, AvatarToJSON } from "./Avatar";

/**
 * Author of the change
 * @export
 * @interface SimpleUserAccountModel
 */
export interface SimpleUserAccountModel {
  /**
   *
   * @type {number}
   * @memberof SimpleUserAccountModel
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof SimpleUserAccountModel
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof SimpleUserAccountModel
   */
  name?: string;
  /**
   *
   * @type {Avatar}
   * @memberof SimpleUserAccountModel
   */
  avatar?: Avatar;
}

/**
 * Check if a given object implements the SimpleUserAccountModel interface.
 */
export function instanceOfSimpleUserAccountModel(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "id" in value;
  isInstance = isInstance && "username" in value;

  return isInstance;
}

export function SimpleUserAccountModelFromJSON(
  json: any
): SimpleUserAccountModel {
  return SimpleUserAccountModelFromJSONTyped(json, false);
}

export function SimpleUserAccountModelFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SimpleUserAccountModel {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    username: json["username"],
    name: !exists(json, "name") ? undefined : json["name"],
    avatar: !exists(json, "avatar")
      ? undefined
      : AvatarFromJSON(json["avatar"]),
  };
}

export function SimpleUserAccountModelToJSON(
  value?: SimpleUserAccountModel | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    username: value.username,
    name: value.name,
    avatar: AvatarToJSON(value.avatar),
  };
}
