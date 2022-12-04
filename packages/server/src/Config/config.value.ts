const LOCAL = 'LOCAL';
const DEV = 'DEV';
const STAGE = 'STAGE';
const PROD = 'PROD';

const corsWhiteList = [
  'http://example.com:3001',
  'http://example.com:3000',
  'example.com',
  'http://192.168.99.180:3001',
  'https://uatieatfront.feastogether.com.tw',
  'http://uatieatfront.feastogether.com.tw',
  'http://10.0.4.10:3001',
  'http://10.0.4.47:3001',
  '192.168.1.77',
  'http://172.31.98.230:3001',
];

const corsWhireListChecking = (origin, callback) => {
  if (!origin || corsWhiteList.indexOf(origin) !== -1) {
    console.log('allowed cors for:', origin);
    callback(null, true);
  } else {
    console.log('blocked cors for:', origin);
    callback(new Error('Not allowed by CORS'));
  }
};

const _configValueSwitch = (_target, _env) => {
  let result;
  switch (_target) {
    case 'IS_BUILD_CLIENT_STATIC':
      if (_env === LOCAL) result = false;
      if (_env === DEV) result = true;
      if (_env === STAGE || _env === PROD) result = true;
      break;

    case 'CORS':
      // if (_env === LOCAL) result = corsWhireListChecking;
      if (_env === LOCAL) result = '*';
      if (_env === DEV || _env === STAGE || _env === PROD) result = '*';
      break;

    case 'MICROSOFT_AZBLOB.CONNECT_STRING':
      // now no diff
      result =
        'DefaultEndpointsProtocol=https;AccountName=noahark;AccountKey=aAC2FjLQWOd2ugio2V0MQ2wNzaJ3lFqdiSnIxCn16dQ1eDw3Scr4fEOV0wnbFZU57WO4XjP9xZC0hrny+CRLLQ==;EndpointSuffix=core.windows.net';
      break;

    case 'MSSQL_CONFIG':
      // if (_env === LOCAL) result = '34.81.23.86';
      // if (_env === DEV) result = '10.140.0.5';
      // if (_env === PROD) result = '10.140.0.5';
      let server = null;
      if (_env === LOCAL) server = '34.80.101.238';
      if (_env === STAGE || _env === PROD) server = '192.168.2.3';
      result = {
        user: 'innov',
        password: 'Vu31uovu4wj3',
        server: server,
        connectionTimeout: 1 * 10 * 1000,
        requestTimeout: 1 * 60 * 1000,
        options: {
          port: 1433,
          encrypt: true,
          trustServerCertificate: true,
        },
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 1 * 60 * 1000,
        },
      };
      break;
    case 'MYSQL_CONFIG':
      let mysqlServer = null;
      if (_env === LOCAL) mysqlServer = '34.80.101.238';
      if (_env === STAGE || _env === PROD) mysqlServer = '192.168.2.3';
      result = {
        user: 'innov',
        password: 'Vu31uovu4wj3',
        host: mysqlServer,
        multipleStatements: true, // 執行多條語句
        connectTimeout: 1 * 120 * 1000, // 連線超時
        acquireTimeout: 1 * 10 * 1000, //   獲取超時
        connectionLimit: 100, // 一次最大連接數,
        timezone: 'utc', // 時區設定
        charset: 'utf8mb4',
        options: {
          port: 3306,
          encrypt: true,
          trustServerCertificate: true,
        },
      };
      break;
    case 'IEAT_MSSQL_CONFIG':
      // if (_env === LOCAL) result = '34.81.23.86';
      // if (_env === DEV) result = '10.140.0.5';
      // if (_env === PROD) result = '10.140.0.5';
      let ieatServer = null;
      if (_env === LOCAL) ieatServer = '40.83.78.154';
      if (_env === STAGE || _env === PROD) ieatServer = '40.83.78.154';
      result = {
        user: 'ieat_v01',
        password: 'XtTP3c',
        server: ieatServer,
        connectionTimeout: 1 * 10 * 1000,
        requestTimeout: 1 * 60 * 1000,
        options: {
          cryptoCredentialsDetails: {
            minVersion: 'TLSv1',
          },
          port: 1433,
          encrypt: true,
          trustServerCertificate: true,
        },
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 1 * 60 * 1000,
        },
      };
      break;

    case 'REDIS':
      if (_env === LOCAL)
        result = {
          port: 6379,
          host: '34.80.101.238',
          password: 'ieatredis',
          options: {
            lazyConnect: true,
          },
        };
      if (_env === STAGE || _env === PROD)
        result = {
          port: 6379,
          host: '192.168.2.3',
          password: 'ieatredis',
          options: {
            lazyConnect: true,
          },
        };
      break;
    case 'LOGGER_SWITCH':
      if (_env === LOCAL) result = true;
      if (_env === STAGE || _env === PROD) result = false;
      break;
    case 'IEATOGETHER_HUNG_YANG_HOST':
      if (_env === LOCAL || _env === STAGE)
        result = 'https://uat.ieatogether.com.tw/Api'; // 測試站都用 uat
      if (_env === PROD) result = 'https://app.ieatogether.com.tw/Api';
      break;

    case '_17_PAYMENT_GET_TOEKN_URL':
      if (_env === LOCAL)
        result = 'https://uat.mbank.smp.17life.com:8888/api/Auth/v1/SignIn';
      if (_env === STAGE || _env === PROD)
        result = 'https://uat.mbank.smp.17life.com:8888/api/Auth/v1/SignIn';
      break;

    case '_IVR_GET_TOEKN_URL':
      if (_env === LOCAL)
        result = 'https://www.cads.com.tw/cads_core_v2_uat/api/GetToken';
      if (_env === STAGE || _env === PROD)
        result = 'https://www.cads.com.tw/cads_core_v2_uat/api/GetToken';
      break;

    case 'SMS_URL':
      if (_env == LOCAL)
        result = {
          url: 'http://210.209.13.10/oem/',
          userName: 'bookingsys',
          pwd: '45ACRNB@z6',
        };
      if (_env === STAGE || _env == PROD)
        result = {
          url: 'http://210.209.13.10/oem/',
          userName: 'bookingsys',
          pwd: '45ACRNB@z6',
        };
      break;
  }
  return result;
};

export default _configValueSwitch;
