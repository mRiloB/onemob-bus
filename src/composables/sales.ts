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

  return { totalSalesByPoint, totalSalesByDateRange };
}

export { useSales };
