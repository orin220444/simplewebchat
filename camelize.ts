import { camelCase } from "./deps.ts";
/**
 * Return the text in camelCase
 *
 * @example "this is an example" -> "thisIsAnExample"
 * @param text
 * @returns {string}
 */
export function camelize(text: string) {
    const camelCaseText = camelCase(text);
    const matches = camelCaseText.match(/[A-Z]/g) || [];
    return `${camelCaseText}`;
  }
