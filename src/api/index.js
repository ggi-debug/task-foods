/**
 * 包含n个接口的模块
 * 函数的返回值是promise对象
 */

import ajax from "@/api/axios";

// 1.根据经维度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

//2、获取食品分类列表
export const reqFoodTyoes = () => ajax(`/index_category`)

//3、根据经纬度获取商铺列表
export const reqShopList = (latitude,longitude) => ajax(`/shops`,{latitude,longitude})

//4、根据经纬度和关键字搜索商铺列表
export const resSearch = (geohash,keyword ) => ajax(`/search_shops`,{geohash,keyword})

