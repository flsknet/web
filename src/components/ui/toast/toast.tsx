import {
  Button,
  UNSTABLE_ToastRegion as ToastRegion,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
} from "react-aria-components";
import { cva } from "class-variance-authority";
import { XIcon } from "lucide-react";

import { toastQueue } from "./toast-queue";

import styles from "./toast.module.css";

export const toastVariants = cva(styles.toast, {
  variants: {
    variant: {
      default: styles.primary,
      success: styles.success,
      warning: styles.warning,
      danger: styles.danger,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Toaster = () => {
  return (
    <ToastRegion
      className={styles.toastRegion}
      queue={toastQueue}
    >
      {({ toast }) => (
        <Toast
          className={toastVariants({ variant: toast.content.variant })}
          style={{ viewTransitionName: toast.key }}
          toast={toast}
        >
          <ToastContent className={styles.toastContent}>
            <span slot="title">{toast.content.title}</span>
            <span slot="description">{toast.content.description}</span>
          </ToastContent>
          <Button
            className={styles.dismissButton}
            slot="close"
          >
            <XIcon />
          </Button>
        </Toast>
      )}
    </ToastRegion>
  );
};
