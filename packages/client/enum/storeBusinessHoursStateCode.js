/**
 * @description define StoreBusinessHoursStateCode
 * @description 定義 店面營業時間 狀態參數
 */
const StoreBusinessHoursStateCode = {
  /** 營業時間 */
  OpenTime: 'openTime',
  /** 尚未填寫 */
  Unfilled: 'unfilled',
  /** 公休日 */
  PublicHoliday: 'publicHoliday',
}

Object.freeze(StoreBusinessHoursStateCode)

export default StoreBusinessHoursStateCode
