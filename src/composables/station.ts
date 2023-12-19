import { Point } from 'src/models';
import { useVouchers, usePoints } from './';

function useStation () {
  const up = usePoints();
  const uv = useVouchers();

  const getAll = async () => {
    const points = await up.getByType('rodoviaria');
    return points;
  };

  const getCountByPoint = async (points: Point[]) => {
    const vouchers = await uv.getVouchers();
    return points.map(point => ({
      name: point.name,
      count: vouchers.filter(voucher => voucher.point_name == point.name).length,
    }));
  };

  return { getAll, getCountByPoint };
}

export { useStation };
