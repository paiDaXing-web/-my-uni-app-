/*
 * @Author: maxueming maxueming@kuaishou.com
 * @Date: 2023-09-07 16:48:45
 * @LastEditors: maxueming maxueming@kuaishou.com
 * @LastEditTime: 2023-09-07 16:50:09
 * @FilePath: /greenet-resume-app/common/apis/wei-xin-pay-controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from "../../components/common/tui-request";
import {
  WechatPayControllerQueryAccountGETResponse,
  WechatPayControllerResponseType,
} from "./model";

export async function WechatPayControllerQueryAccountGET(): Promise<
  WechatPayControllerResponseType<WechatPayControllerQueryAccountGETResponse>
> {
  const result = await http.request({
    url: `/api/WechatPayController/queryAccount`,
    method: "get",
  });
  return result.data;
}