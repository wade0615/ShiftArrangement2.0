// import config from '../Config/config';
// const sql = require('mssql');

// let publicPool;
// const getMSSQLPool = () => {
//   return new Promise(async (rs, rj) => {
//     try {
//       if (publicPool) {
//         console.log(`[mssql][info] Connection Already Exists.`);
//         rs(publicPool);
//       } else {
//         publicPool = await sql.connect(config.MSSQL_CONFIG);
//         // console.info(`[mssql][info] Connection Success.`);
//         // console.info(config.MSSQL_CONFIG);
//         rs(publicPool);
//       }
//     } catch (error) {
//       rj(error);
//     }
//   });
// };
import config from 'src/Config/config';
import sql = require('mssql');
const pools = new Map();

const getMSSQLPool = async (name = 'FTB') => {
  return new Promise(async (rs, rj) => {
    try {
      if (pools.has(name)) {
        console.log(`[mssql][info] Connection Already Exists.`);
        rs(pools.get(name));
      } else {
        let connectConfig: object;
        switch (name) {
          case 'FTB':
            connectConfig = config.MSSQL_CONFIG;
            break;
          case 'iEat':
            connectConfig = config.IEAT_MSSQL_CONFIG;
            break;
        }
        const pool = new sql.ConnectionPool(connectConfig);
        const close = pool.close.bind(pool);
        pool.close = (...args) => {
          pools.delete(name);
          return close(...args);
        };
        pools.set(name, pool.connect());
        console.info(`[mssql][info] Connection Success.`);
        console.info(connectConfig);
        rs(pools.get(name));
      }
    } catch (error) {
      rj(error);
    }
  });
};

// module.exports = {
//   sql,
//   getMSSQLPool,
// };
export default getMSSQLPool;
