import { DEFAULT_LOCALE, Locale } from "./config";
import { enDictionary } from "./dictionaries/en";
import { esDictionary } from "./dictionaries/es";
import { deDictionary } from "./dictionaries/de";
import { frDictionary } from "./dictionaries/fr";
import { ptDictionary } from "./dictionaries/pt";
import { itDictionary } from "./dictionaries/it";
import { roDictionary } from "./dictionaries/ro";
import { ruDictionary } from "./dictionaries/ru";
import { huDictionary } from "./dictionaries/hu";
import type { LandingDictionary } from "./dictionaries/dictionary-types";

const dictionaries: Record<Locale, LandingDictionary> = {
  en: enDictionary,
  es: esDictionary,
  de: deDictionary,
  fr: frDictionary,
  pt: ptDictionary,
  it: itDictionary,
  ro: roDictionary,
  ru: ruDictionary,
  hu: huDictionary,
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): LandingDictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function getDefaultDictionary(): LandingDictionary {
  return dictionaries[DEFAULT_LOCALE];
}
