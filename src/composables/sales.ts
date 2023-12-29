import { useVouchers, usePoints } from './';

function useSales () {
  const up = usePoints();
  const uv = useVouchers();

  const totalSalesByPoint = async (type: 'onibus' | 'rodoviaria') => {
    const points = await up.getByType(type);
    const vouchers = await uv.getVouchers();
    return points.map(point => ({
      name: point.name,
      count: vouchers.filter(voucher => voucher.point_name == point.name).length,
    }));
  };

  const totalSalesByDateRange = async (type: 'onibus' | 'rodoviaria', range: { from: string, to: string }) => {
    const points = await up.getByType(type);
    const vouchers = await uv.getVouchersByDateRange(range);
    console.log('vouchers:', vouchers);
    return points.map(point => ({
      name: point.name,
      count: vouchers.filter(voucher => voucher.point_name == point.name).length,
    }));
  };

  const top5Sales = async () => {
    const bus = await totalSalesByPoint('onibus');
    const station = await totalSalesByPoint('rodoviaria');
    return [
      ...bus,
      ...station,
    ].sort(function comparar (a, b) {
      if (a.count < b.count) {
        return -1;
      }
      if (a.count > b.count) {
        return 1;
      }
      return 0;
    });
  }

  return { totalSalesByPoint, totalSalesByDateRange, top5Sales };
}

export { useSales };
