const test = {
  test: `/test`,
};

const config = {
  // /** 新增 code center 至 redis */
  // getInitCode: '/getInitCode',
  // /** 新增 code center 至 redis */
  // getMultipleInitCode: '/getMultipleInitCode',
  // /** 更新 code center 至 redis */
  // getConfig: '/getConfig',
  // /** 更新 人事行政局行事曆 至 redis */
  // getGovHoliday: '/getGovHoliday',
  // /** 更新 db holiday  至 redis */
  // getHoliday: '/getHoliday',
  // /** 更新 db getHolidayDate 至 redis */
  // getHolidayDate: '/getHolidayDate',
  // /** 更新 Brand & DepositSetting 至 redis */
  // getBrandDepositSetting: '/getBrandDepositSetting',
};

const white_auth = {
  /** 登入 */
  login: '/login',
  /** 產生驗證碼 */
  get2FASvg: '/get2FASvg',
};

const auth = {
  /** 登出 */
  logout: '/logout',
};

export default {
  test,
  config,
  white_auth,
  auth,
};
