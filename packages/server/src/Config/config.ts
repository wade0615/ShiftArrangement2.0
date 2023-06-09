import { join } from 'path';
import _configValueSwitch from './config.value';

let NOW_ENV = 'LOCAL';
if (process.env.ENV) {
  NOW_ENV = process.env.ENV;
}

const _valueSwitch = (value) => {
  return _configValueSwitch(value, NOW_ENV);
};

export default {
  PORT: 3081,
  root: join(__dirname, '..'),
  ShadowRoot: join(__dirname, '..'),
  IS_BUILD_CLIENT_STATIC: _valueSwitch('IS_BUILD_CLIENT_STATIC'),
  CORS: {
    origin: _configValueSwitch('CORS', NOW_ENV),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true, // http request need add credentials = 'include'
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
  },
  GCP_IMG_PATH: {
    DEFAULT: 'image/backend',
  },
  GCP_DATA_PATH: {
    DEFAULT: 'data/backend',
  },
  MICROSOFT_AZBLOB: {
    DEFULAT_FILE_PATH: _valueSwitch('MICROSOFT_AZBLOB.DEFULAT_FILE_PATH'),
    CONNECT_STRING: _valueSwitch('MICROSOFT_AZBLOB.CONNECT_STRING'),
    CONTAINER: _valueSwitch('MICROSOFT_AZBLOB.CONTAINER'),
  },
  MYSQL_CONFIG: _valueSwitch('MYSQL_CONFIG'),
  MSSQL_CONFIG: _valueSwitch('MSSQL_CONFIG'),
  IEAT_MSSQL_CONFIG: _valueSwitch('IEAT_MSSQL_CONFIG'),
  REDIS: _valueSwitch('REDIS'),
  JWT: {
    SECRET: 'iEat-everydaywanttosleep',
    ESPIRESIN: '6 hr',
  },
  LOGSWITCH: false,
  LOGGER_SWITCH: _valueSwitch('LOGGER_SWITCH'),
  REDIS_KEY: {
    /** DB code center 使用 */
    CONFIG: 'config',

    /** 人事行政局行事曆 */
    GOV_HOLIDAY: 'govHoliday',

    /** for back */
    TOKEN: 'token',
    CLICK_FREQ: 'apiClickFreq:back',
    BRAND_DEPOSIT: 'brandDeposit',
    ACCOUNT_KEY_IEAT: 'iEat_account',
    HOLIDAY: 'holiday',
    HOLIDAY_DATE: 'holidayDate',
    STORE_DATE_LIST: 'storeDateList',
    PRINT: 'print:',
    EXPORT: 'export:',
    IMPORT_BOOKING: 'import:booking',
    IMPORT_DEPOSIT: 'import:deposit',
    MAP_TEMP_KEY: 'mapTempKey',

    // for front
    ACCOUNT_KEY: 'iEat_account:front',
    TOKEN_KEY: 'iEat_token:front',
    EVENT_CODE: 'iEat_eventCode:front',
    CHANGE_PHONE_NUMBER: 'iEat_changePhoneNumber:front',
    PWD: 'iEat_pwd:front',
    SAVE_SEATS_GROUP: 'iEat_saveSeats:front:group',
    SAVE_SEATS_PEOPLE: 'iEat_saveSeats:front:people',
    SAVE_SEATS: 'iEat_saveSeats',
    CHARGE_SETTING: 'chargeSetting:',
    STORE_RESERVE_SETTING: 'storeReserveSetting',
  },
  CLICK_FREQ: {
    SEC: 5,
    MAX_FREQ: 10,
  },
  IEATOGETHER_HUNG_YANG: {
    DEVICEUUID: 'jplzGhIHpikRXdxSRYMqlNYCueljEITGjZxdGPDg',
    HOST: _valueSwitch('IEATOGETHER_HUNG_YANG_HOST'),
  },
  IEATOGETHER_SMS: {
    ..._valueSwitch('IEATOGETHER_SMS'),
  },
  TIME_ZONE: 'Asia/Taipei',
  BOOKING_RECORD_EXCEPTION: '資料不完全。',
  BOOKING_INTERVAL_CODE: 10020,
  IEAT: 'iEat',
  TTL: {
    EVENT_ACTION: 5 * 60,
    JWT_TOKEN: 30 * 60,
    PRINT: 10,
    EXPORT: 10,
  },
  _17_BTOB: {
    SIGN_KEY: 'sakd89294_17BtoBSingKey',
    TOKEN_KEY: 'sakd89294_17BtoBTokenKey',
    PAYMENT_TOKEN_KEY: 'sakd89294_17PaymentTokenKey',
    SIGN_TTL: 1 * 60 * 10,
    TOEKN_TTL: 1 * 60 * 10,
    // _17_RCUM_ACCOUNT: 'TPUCGJApi001',
    // _17_RCUM_PASSWORD: 'psb9OBpx7A',
    _17_BTOB_GET_TOEKN_URL: _valueSwitch('_17_BTOB_GET_TOEKN_URL'),
    _17_PAYMENT_GET_TOEKN_URL: _valueSwitch('_17_PAYMENT_GET_TOEKN_URL'),
  },
  _SMS_Every8D: {
    _SMS_URL: _valueSwitch('SMS_URL'),
  },
  _HASH_METHOD: {
    _SHA256: 'SHA256',
    _HEX: 'hex',
  },
  IVR: {
    ACCOUNT: 'eatogether',
    DWP: '!QAZ5tgbasdf',
    IVR_DOMAIN: 'https://www.cads.com.tw/cads_eat_api_uat/api/',
    IVR_TOKEN_KEY: 'sakd89295_IVRTokenKey',
    TOEKN_TTL: 1 * 60 * 10,
    _IVR_GET_TOEKN_URL: _valueSwitch('_IVR_GET_TOEKN_URL'),
  },
};
