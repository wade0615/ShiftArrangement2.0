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
  FIREBASE: {
    FIREBASE_PROJECT_ID: 'test-1-82e30',
    FIREBASE_PRIVATE_KEY:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4CJwoP5faKHxQ\ns9Z/W6KALZ0RbJnQOxd1AxgFSsco5XbttnVA9xi0j22+LXMp4LwPCzTNBcVss4jg\n8MyFfIL3WBT+sW35uM/IXl355kUU+GmprxqM0GGHF3c5uXNh52KuQQ5CLrZkU32j\nfGRAulAlKsk2tmrgOS6Izren8uknAJvUrdzBUo54WBKJoP3MdL2jK9jr5qKrVMOl\nBiSz3EkNAAELwY+Js83I7Qze9RJvizmPyk2+KlRyEDvPt5RJTQfSdEoy1A9UPrIl\ndKVhI/v2pNCklBB9uN+BzL8T1OQb05vC5ImHoLAxpY9+rO4fZtUnc0Pq8JM9VWUS\nXbxbf7ljAgMBAAECggEAS42RWn69H122p8UlHvUmUhwn2yLsRM41s565ClcoS3Rl\nLnNVUP4AwQQPSF/NY1h1rHFr1G31nspYPAzv0i+LbvNU7zk1jquedkKzrygnnVPc\nwUJ3km7sUzNBicvGgF+npiVkLqyRyb9zGZ60Y9R5mcCmidU7LGGdZqIDSSqTKKTH\njUjL+EMIEwDv+hqdyOIVNORIvhoZHJedRoilx8qTrd79PboRqv6rLu2ybyXEczBp\nimjrtrTIeWz3JIwNjRgoD/rj2aKmW7+cMteaX5kDPoKB/t5Rc4yoilp75V5y2n+s\n7oxSaVV72gShYcydQRJYBmL+2dtSXj8Uv9xT2AFzlQKBgQDesmz0ky3lBsl/fcgo\nfnJ0yLrTiIQkoK0JUFpWTozVsqyb4FUv2oa82WDseEAZHa+W+vDdit1Kc5/iGyUp\n3Xp9TSlF1zXipjQk9skfX2C0E0eDwgrXkoBO7+66P1hforbQsHFZY5VGUZtzCGgc\n8E5JN3F1DL2G/6xOc+akgb+HVQKBgQDTjgYwVcWzfuCk8+SEuCIhNJbiQ/azvIqa\nt2qQrIZtYzc5waFZK7niHNCpsQUthx0Oedxt9CWG9YYqyufxcuZCTVsn3K+XZgxD\nwJ6BVBX3PZmqtOP/9bgvh0W2nrIwMQ++kBED0JAYcCfD0+O6TwRdZz3KsT/7JGPE\nuJeR5y7N1wKBgFauMnScGQANPT7vkYoZdal5PCb7+xtaox999DulxXGkY0Uk82N1\n9n3pSq2gPKrKAD+PG1PQKkRBbxkOIdAC0huVfhweIW4/7Qn6ONyKPlS5MFvbmmbA\nMksHXu+FmntXFTtzghseBMtjFlOXERc6fe5Hs1SxCdBTEhlTSZH8orUlAoGBAJb7\nIUeVr0bvIfwXY9ukXhc8pQJOZt7XjEPm6tLdjgK7cEpz+mbdYggRcInqoDth1kbi\niYKfX7j1uQ8JSId07QgclRXZ1idC2TXxXi4GiLau6+B8wMuH3i9tZz9x+tGR8h6a\nSspiKrSGNpr3uerZQdA3Qk5KOdNOoTVgWCv0xd55AoGBAKC0b8ydoQlxfqD1QVY7\nNfAcYP8DG+3ggRGgMsPU0f/pP9GX81XMJ7Tu8ASI2MIWLBrO7Ex0K8r0IJOF5AZY\nJAUU8crW0RVNrX0PG2bt9eO8q2Cd2+XU4Mh3Z9FHVgwJcHpmZjjibqClHD7wmpft\ndiUH2kkporr6vnopIKaaifQu\n-----END PRIVATE KEY-----\n',
    FIREBASE_CLIENT_EMAIL:
      'firebase-adminsdk-eucw9@test-1-82e30.iam.gserviceaccount.com',
  },
};
