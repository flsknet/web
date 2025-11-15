import { forwardRef, type ReactNode, type ElementRef } from "react";
import {
  DialogTrigger,
  type DialogTriggerProps,
  Modal as ModalPrimitive,
  Dialog,
  ModalOverlay,
} from "react-aria-components";

import styles from "./modal.module.css";

type ModalTriggerProps = DialogTriggerProps;

export const ModalTrigger = forwardRef<
  ElementRef<typeof DialogTrigger>,
  ModalTriggerProps
>((props) => {
  return <DialogTrigger {...props} />;
});

type ModalProps = {
  children?: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <ModalOverlay className={styles.overlay}>
      <ModalPrimitive>
        <Dialog className={styles.modal}>{children}</Dialog>
      </ModalPrimitive>
    </ModalOverlay>
  );
};
