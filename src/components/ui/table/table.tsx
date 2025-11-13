import { forwardRef, type ElementRef } from "react";
import {
  Cell,
  type CellProps,
  Column,
  type ColumnProps,
  Row as Row,
  type RowProps,
  Table as TablePrimitive,
  type TableProps as TablePrimitiveProps,
  TableBody as TableBodyPrimitive,
  type TableBodyProps as TableBodyPrimitiveProps,
  TableHeader,
  type TableHeaderProps,
} from "react-aria-components";

import styles from "./table.module.css";
import { cn } from "~/utils/cn";

type TableProps = Omit<TablePrimitiveProps, "className"> & {
  className?: string;
};

export const Table = forwardRef<ElementRef<typeof TablePrimitive>, TableProps>(
  ({ className, ...props }, ref) => {
    return (
      <TablePrimitive
        className={cn(styles.table, className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type TableHeadProps = Omit<TableHeaderProps<any>, "className"> & {
  className?: string;
};

export const TableHead = forwardRef<
  ElementRef<typeof TableHeader>,
  TableHeadProps
>(({ className, ...props }, ref) => {
  return (
    <TableHeader
      className={cn(styles.tableHead, className)}
      {...props}
      ref={ref}
    />
  );
});

type TableColumnProps = Omit<ColumnProps, "className"> & {
  className?: string;
};

export const TableColumn = forwardRef<
  ElementRef<typeof Column>,
  TableColumnProps
>(({ className, ...props }, ref) => {
  return (
    <Column
      className={cn(styles.tableColumn, className)}
      {...props}
      ref={ref}
    />
  );
});

type TableBodyProps = Omit<TableBodyPrimitiveProps<any>, "className"> & {
  className?: string;
};

export const TableBody = forwardRef<
  ElementRef<typeof TableBodyPrimitive>,
  TableBodyProps
>(({ className, ...props }, ref) => {
  return (
    <TableBodyPrimitive
      className={cn(styles.tableBody, className)}
      {...props}
      ref={ref}
    />
  );
});

type TableRowProps = Omit<RowProps<any>, "className"> & {
  className?: string;
};

export const TableRow = forwardRef<ElementRef<typeof Row>, TableRowProps>(
  ({ className, ...props }, ref) => {
    return (
      <Row
        className={cn(styles.tableRow, className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type TableCellProps = Omit<CellProps, "className"> & {
  className?: string;
};

export const TableCell = forwardRef<ElementRef<typeof Cell>, TableCellProps>(
  ({ className, ...props }, ref) => {
    return (
      <Cell
        className={cn(styles.tableCell, className)}
        {...props}
        ref={ref}
      />
    );
  }
);
