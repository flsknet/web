import z from "zod";

z.config({
  customError: (iss) => {
    if (iss.code == "too_small" && iss.minimum == 1) {
      return "Required";
    }

    return null;
  },
});
