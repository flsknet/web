import { i18n } from "@lingui/core";

import { messages } from "~/locales/en/messages.po";

export const LANGUAGES = {
  en: "English",
  bg: "Български",
} as const;

export const changeLanguage = async (locale: keyof typeof LANGUAGES) => {
  const { messages } = await import(`../locales/${locale}/messages.po`);
  i18n.loadAndActivate({ locale, messages });
};

i18n.loadAndActivate({ locale: "en", messages });
