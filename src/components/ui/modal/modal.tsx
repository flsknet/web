import type { ReactNode } from "react";
import {
  DialogTrigger,
  type DialogTriggerProps,
  Modal as ModalPrimitive,
  Dialog,
  ModalOverlay,
} from "react-aria-components";

import styles from "./modal.module.css";

type ModalTriggerProps = DialogTriggerProps;

export const ModalTrigger = (props: ModalTriggerProps) => {
  return <DialogTrigger {...props} />;
};

type ModalProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

export const Modal = ({ children, title, description }: ModalProps) => {
  return (
    <ModalOverlay
      className={styles.overlay}
      isDismissable
    >
      <ModalPrimitive className={styles.modal}>
        <Dialog className={styles.dialog}>
          {title ? <div className={styles.heading}>{title}</div> : null}
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
          {children}
        </Dialog>
      </ModalPrimitive>
    </ModalOverlay>
  );
};
