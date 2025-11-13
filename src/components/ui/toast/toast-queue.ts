import { flushSync } from "react-dom";
import { UNSTABLE_ToastQueue as ToastQueue } from "react-aria-components";
import { type VariantProps } from "class-variance-authority";

import { toastVariants } from "./toast";

const MAX_VISIBLE_TOASTS = 5;
const TOAST_TIMEOUT = 5000;

export type ToastContent = {
  title: string;
  description: string;
} & VariantProps<typeof toastVariants>;

export const toastQueue = new ToastQueue<ToastContent>({
  maxVisibleToasts: MAX_VISIBLE_TOASTS,
  wrapUpdate(fn) {
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        flushSync(fn);
      });
    } else {
      fn();
    }
  },
});

export const toast = (content: ToastContent) => {
  return toastQueue.add(content, {
    timeout: TOAST_TIMEOUT,
  });
};
