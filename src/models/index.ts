export * from './point';
export * from './voucher';

export type DateRange = {
  from: string;
  to: string;
};

export type FilterType = {
  point: string;
  qtd: number;
  total: number;
  type: string;
};
