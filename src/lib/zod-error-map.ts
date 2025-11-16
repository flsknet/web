import { t } from "@lingui/core/macro";
import z from "zod";

z.config({
  customError: (iss) => {
    if (iss.code == "too_small" && iss.minimum == 1) {
      return t`Required`;
    }

    return t`Invalid input`;
  },
});
