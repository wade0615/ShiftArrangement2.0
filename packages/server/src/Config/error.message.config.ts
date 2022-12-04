export default Object.freeze({
  /** global 00 */
  _200001: {
    code: 200001,
    msg: '資料驗證錯誤。',
  },
  _200002: {
    code: 200002,
    msg: '查無此人。',
  },
  _200003: {
    code: 200003,
    msg: 'JWT token must not be null。',
  },
  _200004: {
    code: 200004,
    msg: '身份驗證錯誤。',
  },

  /* advance 01 */
  _201001: {
    code: 201001,
    msg: '此人已在黑名單內。',
  },
  _201002: {
    code: 201002,
    msg: '有門市正在使用此訂位間隔，因此不可刪除。正在使用之訂位間隔：',
  },
  _201003: {
    code: 201003,
    msg: '最大間隔數不可超過 60。',
  },

  /* account 02 */
  _202001: {
    code: 202001,
    msg: '密碼錯誤，請重新輸入。',
  },
  _202002: {
    code: 202002,
    msg: '密碼須為英數字組合，請重新輸入。',
  },
  _202003: {
    code: 202003,
    msg: '新密碼與確認新密碼不符，請重新輸入。',
  },
  _202004: {
    code: 202004,
    msg: '密碼需大於或等於八碼和小於等於二十碼，請重新輸入。',
  },
  _202005: {
    code: 202005,
    msg: '帳號重複，請重新填寫。',
  },
  _202006: {
    code: 202006,
    msg: '若有填密碼，則確認密碼為必填。',
  },

  /* brand 03 */
  _203001: {
    code: 203001,
    msg: '品牌名稱重複。',
  },
  _203002: {
    code: 203002,
    msg: '品牌名稱不可大於十個字。',
  },

  /* store 04 */
  _204001: {
    code: 204001,
    msg: '請勿輸入重複信箱。',
  },
  _204002: {
    code: 204002,
    msg: '輸入的信箱不可為空。',
  },
  _204003: {
    code: 204003,
    msg: '客滿人數不可小於等於 0。',
  },
  _204004: {
    code: 204004,
    msg: '客滿人數不可大於人工及網路可訂位數相加。',
  },
  _204005: {
    code: 204005,
    msg: '請先至桌位管理進行設定後，才能進行訂位時段設定。',
  },
  _204006: {
    code: 204006,
    msg: '各桌型的網路訂位組數＋人工訂位組數加總須小於等於桌位管理內該桌型設定的總數。\n該桌型及其設定的總數為：',
  },
  _204007: {
    code: 204007,
    msg: '桌子標準人數不可重複。',
  },
  _204008: {
    code: 204008,
    msg: '最小容納數必須小於最大容納數。',
  },
  _204009: {
    code: 204009,
    msg: '有訂單綁在此桌子上，無法刪除。',
  },
  _204010: {
    code: 204010,
    msg: '有訂單綁在此門市上，無法關閉。',
  },
  _204011: {
    code: 204011,
    msg: '此桌型網路加人工最大可訂位數設定須小於等於桌位數量。最大容納數為：',
  },
  _204012: {
    code: 204012,
    msg: '區域已被使用，無法刪除。',
  },
  _204013: {
    code: 204013,
    msg: '門市代碼重複，請重新輸入。',
  },
  _204014: {
    code: 204014,
    msg: '門市代碼須為英文或數字，請重新輸入。',
  },
  _204015: {
    code: 204015,
    msg: '門市名稱不可重複，請重新輸入。',
  },
  _204016: {
    code: 204016,
    msg: '最大人數不可大於桌型標準人數：',
  },

  /* brandDept 05 */
  _205001: {
    code: 205001,
    msg: '查無此品牌。',
  },
  _205002: {
    code: 205002,
    msg: '節日與適用時間不匹配。',
  },
  _205003: {
    code: 205003,
    msg: '收費設定超過限制筆數。',
  },
  _205004: {
    code: 205004,
    msg: '節日重複設定。',
  },
  _205005: {
    code: 205005,
    msg: '英文名稱已存在，請重新命名！',
  },
  _205006: {
    code: 205006,
    msg: '收費設定選項已在訂金設定中設定',
  },
  _205007: {
    code: 205007,
    msg: 'Email 主旨、內容為空，不可啟用',
  },
  _205008: {
    code: 205008,
    msg: '簡訊內容為空，不可啟用',
  },
  _205009: {
    code: 205009,
    msg: '推播主旨、內容為空，不可啟用',
  },
  _205010: {
    code: 205010,
    msg: '特殊服務為空白，不可啟用',
  },
  _205011: {
    code: 205011,
    msg: 'Email格式有誤：',
  },
  _205012: {
    code: 205012,
    msg: '狀態設定啟用時，必填欄位不可為空。',
  },
  _205013: {
    code: 205013,
    msg: '狀態設定啟用時，節日為必選項目。',
  },
  _205014: {
    code: 205014,
    msg: '以下編號在門市訂位時段中已被設定，請確認是否停用：',
  },

  /* homeSetting 06 */
  _206001: {
    code: 206001,
    msg: '已建立頁腳名稱，因此連結為必填。',
  },

  /* image 07 */
  _207001: {
    code: 207001,
    msg: '上傳圖檔數量錯誤。',
  },
  _207002: {
    code: 207002,
    msg: '圖檔超過限制大小。',
  },
  _207003: {
    code: 207003,
    msg: '圖檔類型不符，僅接受PNG、JPEG、JPG、GIF。',
  },
  _207004: {
    code: 207004,
    msg: '檔案類型不符，僅接受 IPA。',
  },
  _207005: {
    code: 207005,
    msg: '上傳檔案數量錯誤。',
  },
  _207006: {
    code: 207006,
    msg: '檔案超過限制大小。',
  },

  /* 17Pay 08 */
  _208001: {
    code: 208001,
    msg: '付款失敗。',
  },

  /* sms 09 */
  _209001: {
    code: 209001,
    msg: '動作未成功，簡訊API回傳結果為失敗。',
  },

  /* auth 10 */
  _210001: {
    code: 210001,
    msg: 'Oops! 帳號或密碼錯誤。',
  },
  _210002: {
    code: 210002,
    msg: '帳號已被停用或作廢。',
  },
  _210003: {
    code: 210003,
    msg: '驗證碼錯誤，請重新輸入。',
  },

  /* cache 11 */
  _211001: {
    code: 211001,
    msg: '使用者已過期，請重新登入。',
  },

  /* common 12 */
  _212001: {
    code: 212001,
    msg: 'jwt token expired.',
  },
  _212002: {
    code: 212002,
    msg: '系統忙碌中，請稍候。',
  },
  _212003: {
    code: 212003,
    msg: 'Event Request 逾期。',
  },

  /* booking 13 */
  _213001: {
    code: 213001,
    msg: '日期無效。',
  },
  _213002: {
    code: 213002,
    msg: '查無此門市。',
  },
  _213003: {
    code: 213003,
    msg: '使用者無該門市權限。',
  },
  _213004: {
    code: 213004,
    msg: '門市無可訂位日期。',
  },
  _213005: {
    code: 213005,
    msg: '訂位日期不在日期區間。',
  },
  _213006: {
    code: 213006,
    msg: '桌型數量不足：',
  },
  _213007: {
    code: 213007,
    msg: '訂位失敗。',
  },
  _213008: {
    code: 213008,
    msg: '門市無此用餐時間。',
  },
  _213009: {
    code: 213009,
  },
  _213010: {
    code: 213010,
  },
  _213011: {
    code: 213011,
    msg: '篩選用餐起始日至結束日區間不可超過一個月。',
  },
  _213012: {
    code: 213012,
    msg: '訂位參數日期不能為前30天的日期。',
  },
  _213013: {
    code: 213013,
    msg: '該筆訂單無法取消訂位。',
  },
  _213014: {
    code: 213014,
    msg: '信用卡刷退失敗，請聯絡客服。',
  },
  _213015: {
    code: 213015,
    msg: '此訂單已過時，無法更新報到狀態。',
  },
  _213016: {
    code: 213016,
    msg: '此搜尋條件不可列印，【用餐日期】需為單天、【餐次】為單個，且【門市】不可為空。',
  },
  _213017: {
    code: 213017,
    msg: '列印冷卻時間未到。',
  },
  _213018: {
    code: 213018,
    msg: '匯出冷卻時間未到。',
  },
  _213019: {
    code: 213019,
    msg: '付款方式為現金，且已付款，單據編號、實付金額、收錢的人必填。',
  },
  _213020: {
    code: 213020,
    msg: '應付定金大於 0，狀態不可為不需付款。',
  },
  _213021: {
    code: 213021,
    msg: '訂位日期不能為過去。',
  },
  _213022: {
    code: 213022,
    msg: '若超收選擇未勾選，桌型使用數不能全為 0。',
  },
  _213023: {
    code: 213023,
    msg: '當應付定金輸入為非 0 時，狀態不可為不需付款。',
  },
  _213024: {
    code: 213024,
    msg: '付款方式為現金 ＆ 付款狀態為已付款，單據編號不可為空。',
  },
  _213025: {
    code: 213025,
    msg: '付款方式為現金 ＆ 付款狀態為已付款，實付金額不可為空。',
  },
  _213026: {
    code: 213026,
    msg: '付款方式為現金 ＆ 付款狀態為已付款，收錢的人不可為空。',
  },
  _213027: {
    code: 213027,
    msg: '此訂單已過期，無法編輯。',
  },
  _213028: {
    code: 213028,
    msg: '人數組成總數需等於總人數，請重新填寫。',
  },
  _213029: {
    code: 213029,
    msg: '無法訂金送審。',
  },
  _213030: {
    code: 213030,
    msg: '篩選用餐時間起始日不可大於結束日。',
  },
  _213031: {
    code: 213031,
    msg: '篩選付款時間起始日不可大於結束日。',
  },
  _213032: {
    code: 213032,
    msg: '訂位商店不存在。',
  },
  _213033: {
    code: 213033,
    msg: '此為已付款的訂位，不可修改付款狀態。',
  },
  _213034: {
    code: 213034,
    msg: '此為訂位成功或失敗的訂單，不可修改訂位狀態。',
  },
  _213035: {
    code: 213035,
    msg: '優先扣除不可變更。',
  },
  _213036: {
    code: 213036,
    msg: '請先訂金送審在批次送審。',
  },

  /* permission 14 */
  _214001: {
    code: 214001,
    msg: '所屬帳號數量大於 0 ，無法被刪除。',
  },
  _214002: {
    code: 214002,
    msg: '固定角色無法被刪除。',
  },
  _214003: {
    code: 214003,
    msg: '角色名稱不得重複。',
  },
  _214004: {
    code: 214004,
    msg: '管理員角色權限不得修改。',
  },
  _214005: {
    code: 214005,
    msg: '確認密碼與密碼不同，請重新輸入。',
  },
  _214006: {
    code: 214006,
    msg: '新增角色失敗。',
  },

  /* bulletin 15*/
  _215001: {
    code: 215001,
    msg: '結束日期不能小於開始日期。',
  },
  _215002: {
    code: 215002,
    msg: '結束日期不能小於當日日期。',
  },
  _215003: {
    code: 215003,
    msg: '日期相同時，結束時間不能小於等於開始時間。',
  },
  _215004: {
    code: 215004,
    msg: '此公告日期區間與其他公告日期區間重疊，請從新設定日期區間。',
  },

  /* ivr service 16*/
  _216001: {
    code: 216001,
    msg: '取得 IVR TOKEN 失敗。',
  },

  /* holiday 17*/
  _217001: {
    code: 217001,
  },

  /* waiting 18*/
  _218001: {
    code: 218001,
    msg: '請帶入查詢門市。',
  },
  _218002: {
    code: 218002,
    msg: '結束日期小於開始日期。',
  },
  _218003: {
    code: 218003,
    msg: '篩選起始日至結束日區間不可超過一個月。',
  },
  _218004: {
    code: 218004,
    msg: '該筆訂單無法取消候位。',
  },
  _218005: {
    code: 218005,
    msg: '沒有查看候位管理畫面的權限。',
  },
  _218006: {
    code: 218006,
    msg: '找不到餐次設定檔，請先進行時段相關設定。',
  },
  _218007: {
    code: 218007,
    msg: '不可建立當天以外的候位。',
  },
  _218008: {
    code: 218008,
    msg: '候位人數不得為0。',
  },
  _218009: {
    code: 218009,
    msg: '用餐日不為當天，無法改回候位中。',
  },
  _218010: {
    code: 218010,
    msg: '匯出冷卻時間未到。',
  },
  _218011: {
    code: 218011,
    msg: '日期區間不能選擇未來時間。',
  },
  _218012: {
    code: 218012,
    msg: '候位狀態為必填。',
  },
});
