import { supabase as sb } from 'src/services/supabase';
import { Voucher, DateRange } from 'src/models';

export function useVouchers () {
  let dtRange = {
    from: '',
    to: '',
  };

  const setDateRange = ({ from, to }: DateRange) =>
    (dtRange = { from, to });

  const getVouchers = async () => {
    const { data, error } = await sb.from('vouchers').select();
    if (error) throw Error(`${error.code} - ${error.message}`);
    if (data?.length == 0) return new Array<Voucher>();
    return data?.map((vou) => vou as Voucher);
  };

  const getVouchersByDateRange = async (range: { from: string, to: string }) => {
    const { from, to } = range;
    const { data, error } = await sb
      .from('vouchers')
      .select()
      .gt('created_at', from.concat(' 00:00:00'))
      .lt('created_at', to.concat(' 23:59:59'));
    if (error) throw Error(`${error.code} - ${error.message}`);
    if (data?.length == 0) return new Array<Voucher>();
    return data?.map((vou) => vou as Voucher);
  };

  const getAllByPointType = async (pointType: 'BU' | 'RD') => {
    const data = await getVouchers();
    return data.filter((vou) => vou.point_name.includes(pointType));
  };

  const getAllByPoint = async (pointName: string) => {
    const data = await getVouchers();
    return data.filter((vou) => vou.point_name == pointName);
  };

  const getCountByPointType = async (pointType: 'BU' | 'RD') => {
    const { data, error } = await sb.from('vouchers').select().like('point_name', `%${pointType}`).order('point_name', { ascending: true });
    if (error) throw Error(`${error.code} - ${error.message}`);
    return data;
  }

  return { setDateRange, getVouchers, getVouchersByDateRange, getAllByPointType, getAllByPoint, getCountByPointType };
}
