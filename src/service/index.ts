import { request } from '@src/service/request';

// 首页分类列表
export async function getHomeApi() {
  let result: any = null;
  try {
    const resData: any = await request({
      url: 'topics',
      method: 'get',
      params: {
        page: 1,
        tab: 'job',
        limit: 2
      }
    });
    result = resData.data;
    return result;
  } catch (err) {
    return result;
  }
}
