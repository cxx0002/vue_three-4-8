import instance from "../http";
/**
 * APP相关接口
 * @param
 */
export function getVideoCategory(data:any) {
  return instance.request({
    method: 'get',
    url: `/videoCategoryDetails`,
    params: data,
  })
}
