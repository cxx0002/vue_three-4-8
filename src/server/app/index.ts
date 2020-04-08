import instance from "../http";
/**
 * APP相关接口
 * @param
 */
export function getMusicList(data:any) {
  return instance.request({
    method: 'get',
    url: `/data/`,
    params: data,
  })
}
