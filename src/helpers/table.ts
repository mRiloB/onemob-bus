import { QTableColumn } from 'quasar';

type ColData = {
  label: string;
  field: string;
  align?: 'center' | 'left' | 'right';
  sortable?: boolean;
};

export function col({
  field,
  label,
  align = 'center',
  sortable = false,
}: ColData): QTableColumn {
  return {
    name: field,
    label: label,
    align: align,
    field: field,
    sortable,
  };
}

export function colDate({
  field,
  label,
  align = 'center',
  sortable = false,
}: ColData): QTableColumn {
  return {
    name: field,
    label: label,
    align: align,
    field: field,
    format: (val: string) => new Date(val).toLocaleString('pt-BR') || '',
    sortable,
  };
}
