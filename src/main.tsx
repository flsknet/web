import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/lib/react-query";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "~/lib/router";

import "~/lib/i18n";
import "~/lib/zod-error-map";

import "~/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </I18nProvider>
  </StrictMode>
);
