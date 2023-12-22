import { supabase as sb } from 'src/services/supabase';
import { Point } from 'src/models';

export function usePoints () {
  const getAll = async () => {
    const { data, error } = await sb.from('points').select().order('name', { ascending: true });
    if (error != null) throw Error(`${error.code} - ${error.message} - ${error.details} - ${error.hint}`);
    if (data?.length == 0) return new Array<Point>();
    return data?.map((point) => point as Point);
  };

  const getByType = async (type: 'onibus' | 'rodoviaria') => {
    const { data, error } = await sb.from('points').select().eq('type', type).order('name', { ascending: true });
    if (error != null) throw Error(`${error.code} - ${error.message} - ${error.details} - ${error.hint}`);
    if (data?.length == 0) return new Array<Point>();
    return data?.map((point) => point as Point);
  };

  return { getAll, getByType };
}
