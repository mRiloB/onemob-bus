import { DateRange, FilterType } from 'src/models';
import { usePoints, useVouchers } from './';

export function useFilter () {
  const uPoint = usePoints();
  const uVoucher = useVouchers();

  const filterAllVouchersByPoint = async (dtRange: DateRange) => {
    const dtAux = { from: `${dtRange.from} 00:00:00`, to: `${dtRange.from} 00:00:00` };
    const aux: FilterType[] = [];
    const points = await uPoint.getPoints();
    uVoucher.setDateRange(dtAux);
    const vouchers = await uVoucher.getVouchers();

    points.forEach(async point => {
      const vouchersAux = vouchers.filter(vou => vou.point_name == point.name);
      aux.push({
        point: point.name,
        qtd: vouchersAux.length,
        total: vouchersAux.length * 6,
        type: point.type,
      });
    });

    return aux;
  };

  return { filterAllVouchersByPoint };
}
