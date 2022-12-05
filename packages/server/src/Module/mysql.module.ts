import config from 'src/Config/config';
import mysql = require('mysql');

// core
const mySqlPoolCore = { pool: null, message: null };
/**
 * 初始註冊 mysql pool build to core.
 */
const registerMySqlPoolCore = async () => {
  try {
    if (!mySqlPoolCore.pool) {
      mySqlPoolCore.pool = await mysql.createPool(config.MYSQL_CONFIG);
    }
  } catch (error) {
    console.log(error);
    mySqlPoolCore.message = error;
  }
};

/**
 * 2022/11/07
 * @param sqlStr
 * @param values
 * @returns
 */
const queryByMySqlPool = async (sqlStr, values) => {
  return new Promise(async (rs, rj) => {
    try {
      // step1: register mysql pool core.
      await registerMySqlPoolCore();
      /*console.log(
        '連接池中全部的連接數量:',
        mySqlPoolCore.pool._allConnections.length
      );
      console.log(
        '池中當前閒置可用的連接數量:',
        mySqlPoolCore.pool._freeConnections.length
      );

      mySqlPoolCore.pool.on('acquire', function (connection) {
        console.log(`獲取資料庫連線 [${connection.threadId}]`);
      });
      mySqlPoolCore.pool.on('connection', function (connection) {
        console.log(`建立資料庫連線 [${connection.threadId}]`);
      });
      mySqlPoolCore.pool.on('enqueue', function () {
        console.log('正在等待可用資料庫連線');
      });
      mySqlPoolCore.pool.on('release', function (connection) {
        console.log(`資料庫連線 [${connection.threadId}] 已釋放`);
      });
      console.log('------------------------------------');*/

      // step2: getConnection
      mySqlPoolCore.pool.getConnection((err, connection) => {
        // error checking
        if (err) {
          rj(err);
          return;
        }

        connection.beginTransaction((err) => {
          // query
          connection.query(sqlStr, values, (err, rows) => {
            // connection error checking
            if (err) {
              rj(err);
              connection.rollback();
              return;
            }

            // step3: result
            try {
              const result = JSON.parse(JSON.stringify(rows));
              rs(result);
              connection.commit();
              // release db connection.
              connection.release();
            } catch (err) {
              rj(err);
              connection.rollback();
              connection.release();

              return;
            }
          }); //beginTransaction
        }); //connection.query
      }); //mySqlPoolCore.pool.getConnection
    } catch (err) {
      rj(err);
    } // try
  }); // Promise
};

// export default module.exports = {
//   mysql,
//   queryByMySqlPool,
// };
export default queryByMySqlPool;
