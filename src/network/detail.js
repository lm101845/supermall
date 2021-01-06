import { request } from './request'

export function getDetail(iid) { 
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() { 
  return request({
    url: '/recommend',
    
  })
}
export class Goods{ 
    // ES6里面可以直接定义class
    // 导出一个类
    constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.nowPrice = itemInfo.highNowPrice;
  }
}

// const g = new Goods()
// 最终g里面就保存了所有的数字
// g.title,g.desc等



// 补充知识：类
// class Person { 
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const p = new Person('why',18)

export class Shop {
// 虽然数据是在一个里面，但是整体上来看还是稍微有些复杂，所以也弄了一个类集中存放数据
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
    // 商品的规格等数据
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
