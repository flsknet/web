import { Loader2Icon } from "lucide-react";

import styles from "./spinner.module.css";

type SpinnerProps = {
  size?: number;
};

export const Spinner = ({ size = 32 }: SpinnerProps) => {
  return <div className={styles.spinner} />;
};
