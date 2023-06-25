/**
 * @description define StoreEventsStateCode
 * @description 定義 店面活動 狀態參數
 */
const StoreEventsStateCode = {
  /** 營業 */
  Open: 'open',
  /** 未營業 */
  Closed: 'closed',
  /** 營業時間調整 */
  OpenTimeChange: 'openTimeChange',
}

Object.freeze(StoreEventsStateCode)

export default StoreEventsStateCode
