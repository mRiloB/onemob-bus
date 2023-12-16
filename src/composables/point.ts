import { supabase as sb } from 'src/services/supabase';
import { Point } from 'src/models';

export function usePoints() {
  const getPoints = async () => {
    const { data, error } = await sb.from('points').select();
    if (error) throw Error(`${error.code} - ${error.message}`);
    if (data?.length == 0) return new Array<Point>();
    return data?.map((point) => point as Point);
  };

  const getByType = async (type: 'onibus' | 'rodoviaria') => {
    const data = await getPoints();
    return data.filter((point) => point.type == type);
  };

  return { getPoints, getByType };
}
