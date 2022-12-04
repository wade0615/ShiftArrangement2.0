import { Injectable } from '@nestjs/common';
// import { SystemDaoSchema } from 'src/Schema/system.dao.schema';
// import { AddVersionDto } from 'src/Dto/System/add.version.dto';
// import { SearchSystemLogDto } from 'src/Dto/System/search.system.log.dto';
// import { UpdateVersionDto } from 'src/Dto/System/update.version.dto';
// import { UpdateVersionStateDto } from 'src/Dto/System/update.version.state.dto';
// import { BELONG_TO } from 'src/Enum/belong.to.enum';
// import { SYSTEM_CATEGORY } from 'src/Enum/system.category.enum';
// import { SYSTEM_DEVICE } from 'src/Enum/system.device.enum';
// import { SYSTEM_DISPLAY } from 'src/Enum/system.display.enum';
// import { GetSystemLogResp } from 'src/Interface/SystemDao/get.system.log.interface';
// import { GetVersionResp } from 'src/Interface/SystemDao/get.version.interface';
// import { InsertHisSystemDaoReq } from 'src/Interface/SystemDao/insert.his.system.dao.interface';
// import ConfigDao from './config.dao';

// const { queryByMySqlPool } = require('../Module/mysql.module');
// const mysql = require('mysql');
// const escape = mysql.escape;
@Injectable()
export class SystemDao {
  // constructor(
  //   private readonly systemDaoSchema: SystemDaoSchema,
  //   private readonly configDao: ConfigDao
  // ) {}
  // /**
  //  * 查詢 版控列表
  //  * @returns
  //  */
  // async getVersion(): Promise<GetVersionResp[]> {
  //   const sqlStr = /* sql */ `
  //           SELECT Version_ID versionId, Version version, Description description, Is_Force isForce, Version_State state,Download_Url downloadUrl, Modify_Time modifyTime FROM FTB.version
  //           order by Create_Time desc
  //           `;
  //   const result = await queryByMySqlPool(sqlStr);
  //   return result;
  // }
  // /**
  //  * 更新 版控資訊
  //  * @param req
  //  * @param memberId
  //  * @returns
  //  */
  // async updateVersion(
  //   req: UpdateVersionDto,
  //   memberId: string
  // ): Promise<boolean> {
  //   const _versionId = escape(req?.versionId);
  //   const _version = escape(req?.version);
  //   const _isForce = escape(req?.isForce);
  //   const _state = escape(req?.state);
  //   const _description = escape(req?.description);
  //   const _memberId = escape(memberId);
  //   const _downloadUrl = escape(req.downloadUrl);
  //   const sqlStr = /* sql */ `
  //       UPDATE FTB.version
  //       SET Version = ${_version}, Description = ${_description}, Is_Force = ${_isForce}, Version_State = ${_state}, Modify_Time = UTC_TIMESTAMP(), Modify_ID = ${_memberId},
  //       Download_Url= ${_downloadUrl}
  //       WHERE Version_ID = ${_versionId}`;
  //   await queryByMySqlPool(sqlStr);
  //   return true;
  // }
  // /**
  //  * 新增 版控資訊
  //  * @returns
  //  */
  // async addVersion(req: AddVersionDto, memberId: string): Promise<boolean> {
  //   const _version = escape(req?.version);
  //   const _isForce = escape(req?.isForce);
  //   const _state = escape(req?.state);
  //   const _description = escape(req?.description);
  //   const _memberId = escape(memberId);
  //   const _downloadUrl = escape(req.downloadUrl);
  //   const sqlStr = /* sql */ `
  //       CALL FTB.Ins_Version(${_downloadUrl}, ${_version}, ${_description}, ${_isForce}, ${_state}, ${_memberId})`;
  //   await queryByMySqlPool(sqlStr);
  //   return true;
  // }
  // /**
  //  * 修改版控狀態
  //  * @param req
  //  * @param memberId
  //  * @returns
  //  */
  // async updateVersionState(
  //   req: UpdateVersionStateDto,
  //   memberId: string
  // ): Promise<boolean> {
  //   const _versionId = escape(req?.versionId);
  //   const _state = escape(req?.state);
  //   const _memberId = escape(memberId);
  //   const sqlStr = /* sql */ `
  //       UPDATE FTB.version
  //       SET Version_State = ${_state}, Modify_Time = UTC_TIMESTAMP(), Modify_ID = ${_memberId}
  //       WHERE Version_ID = ${_versionId}`;
  //   await queryByMySqlPool(sqlStr);
  //   return true;
  // }
  // /**
  //  * 查詢 系統歷程列表
  //  * @param req
  //  * @param memberId
  //  * @returns
  //  */
  // async getSystemLog(req: SearchSystemLogDto): Promise<GetSystemLogResp> {
  //   const _brandId = escape(req?.brandId);
  //   const _account = escape(req?.account);
  //   const _device = escape(req?.device);
  //   const _category = escape(req?.category);
  //   const _startTime = escape(req?.startTime);
  //   const _endTime = escape(req?.endTime);
  //   let sqlStr = /* sql */ `
  //       SELECT hisSystem.Account account, hisSystem.Device device, hisSystem.Category category, hisSystem.Record record, hisSystem.Create_Time createTime, authRole.Name role FROM FTB.his_system hisSystem
  //       LEFT JOIN FTB.map_auth_mem_role mapAuthMemRole ON mapAuthMemRole.Member_ID = hisSystem.Create_ID
  //       LEFT JOIN FTB.auth_role authRole ON authRole.Role_ID = mapAuthMemRole.Role_ID
  //       WHERE 1=1`;
  //   if (!req?.brandId) {
  //     sqlStr += ` AND (hisSystem.Display IS NULL OR hisSystem.Display = '${SYSTEM_DISPLAY.GROUP}')`;
  //   } else {
  //     sqlStr += ` AND (hisSystem.Display = ${_brandId} OR hisSystem.Display IS NULL)`;
  //   }
  //   if (req?.account)
  //     sqlStr += ` AND POSITION(${_account} IN hisSystem.Account)`;
  //   if (req?.record)
  //     sqlStr += ` AND POSITION(N'${req?.record}' IN hisSystem.Record)`;
  //   if (req?.device !== SYSTEM_DEVICE.ALL)
  //     sqlStr += ` AND hisSystem.Device = ${_device}`;
  //   if (req?.category !== SYSTEM_CATEGORY.ALL)
  //     sqlStr += ` AND hisSystem.Category = ${_category}`;
  //   if (req?.startTime) sqlStr += ` AND hisSystem.Create_Time >= ${_startTime}`;
  //   if (req?.endTime)
  //     sqlStr += ` AND hisSystem.Create_Time < date_add(${_endTime}, interval 1 day)`;
  //   sqlStr += `
  //   ORDER BY hisSystem.Modify_Time DESC`;
  //   const queryResult = await queryByMySqlPool(sqlStr);
  //   const multiInitCode = await this.configDao.getMultipleInitCode([
  //     BELONG_TO.SYSTEM_DEVICE,
  //     BELONG_TO.SYSTEM_CATEGORY,
  //     BELONG_TO.SYSTEM_CATEGORY_BACKEND,
  //     BELONG_TO.SYSTEM_CATEGORY_PAD
  //   ]);
  //   const result = this.systemDaoSchema.NewGetSystemLogResp;
  //   result.systemList = queryResult;
  //   result.multiInitCode = multiInitCode;
  //   return result;
  // }
  // /**
  //  * 新增 系統歷程
  //  * @param req
  //  * @param memberId
  //  * @returns
  //  */
  // async insertHisSystemDao(req: InsertHisSystemDaoReq[]): Promise<boolean> {
  //   let sqlStr = '';
  //   req?.forEach((r) => {
  //     const _display = escape(r?.display);
  //     const _memberId = escape(r?.memberId);
  //     const _account = escape(r?.account);
  //     const _device = escape(r?.device);
  //     const _category = escape(r?.category);
  //     const _record = escape(r?.record);
  //     sqlStr += /* sql */ `
  //         INSERT INTO ftb.his_system
  //         (Account, Device, Category, Record, Create_Time, Create_ID, Modify_Time, Display)
  //         VALUES(${_account}, ${_device}, ${_category}, ${_record}, UTC_TIMESTAMP(), ${_memberId}, UTC_TIMESTAMP(), ${_display});`;
  //   });
  //   await queryByMySqlPool(sqlStr);
  //   return true;
  // }
}
