import { Meteor } from 'meteor/meteor'
import { Orders } from '../../api/orders/orders'
import { Providers } from '../../api/providers/providers'
import { Goods } from '../../api/goods/goods'

Meteor.startup(() => {
	// 启动时做数据初始化
	if (Orders.find().count() === 0) {
		const orders = [
			{
				orderCode: '100000001',
				endPoint: 2,
				userInfo: 'stevejobs',
				createTime: new Date().getTime(),
				sumMoney: 203,
				payWay: 2,
				orderState: 10,
				detailUrl: 'http://baidu.com'
			}, {
				orderCode: '100000002',
				endPoint: 2,
				userInfo: 'stevejobs',
				createTime: new Date().getTime(),
				sumMoney: 203,
				payWay: 2,
				orderState: 10,
				detailUrl: 'http://baidu.com'
			}, {
				orderCode: '100000003',
				endPoint: 2,
				userInfo: 'stevejobs',
				createTime: new Date().getTime(),
				sumMoney: 203,
				payWay: 2,
				orderState: 10,
				detailUrl: 'http://baidu.com'
			}, {
				orderCode: '100000004',
				endPoint: 2,
				userInfo: 'stevejobs',
				createTime: new Date().getTime(),
				sumMoney: 203,
				payWay: 2,
				orderState: 10,
				detailUrl: 'http://baidu.com'
			}, {
				orderCode: '100000005',
				endPoint: 2,
				userInfo: 'stevejobs',
				createTime: new Date().getTime(),
				sumMoney: 203,
				payWay: 2,
				orderState: 10,
				detailUrl: 'http://baidu.com'
			}
		]
		orders.forEach( order => Orders.insert(order) )
	}

	if (Providers.find().count() === 0) {
		const providers = [
			{
				providerCode: '100000001',
				providerName: 'Modecity Corp',
				providerManager: 'Steve',
				comeFrom: "上城区",
				phoneNum: '15167127829',
				corpWay: 2,
				corpState: 2,
				goods: [100001,100002,100003]
			}, {
				providerCode: '100000002',
				providerName: 'Modecity Corp',
				providerManager: 'Steve',
				comeFrom: "上城区",
				phoneNum: '15167127829',
				corpWay: 2,
				corpState: 2,
				goods: [100001,100002,100004]
			}, {
				providerCode: '100000003',
				providerName: 'Modecity Corp',
				providerManager: 'Steve',
				comeFrom: "上城区",
				phoneNum: '15167127829',
				corpWay: 1,
				corpState: 1,
				goods: [100001,100002,100005]
			}, {
				providerCode: '100000004',
				providerName: 'Modecity Corp',
				providerManager: 'Steve',
				comeFrom: "上城区",
				phoneNum: '15167127829',
				corpWay: 1,
				corpState: 1,
				goods: [100001,100002,100006]
			}, {
				providerCode: '100000005',
				providerName: 'Modecity Corp',
				providerManager: 'Steve',
				comeFrom: "上城区",
				phoneNum: '15167127829',
				corpWay: 0,
				corpState: 0,
				goods: [100001,100002,100007]
			}, {
				providerCode: '100000006',
				providerName: 'Modecity Corp',
				providerManager: 'Steve',
				comeFrom: "上城区",
				phoneNum: '15167127829',
				corpWay: 0,
				corpState: 0,
				goods: [100001,100002,100008]
			}, 
		]
		providers.forEach( provider => Providers.insert(provider) )
	}

	if (Goods.find().count() === 0) {
		const goods = [{
			goodsCode: 'HH100000000001',
			goodsName: 'apple',
			goodsCount: 1000,
			goodsCate: 0,
			inPrice: 2,
			outPrice: 3
		}, {
			goodsCode: 'HH100000000002',
			goodsName: 'apple',
			goodsCount: 1000,
			goodsCate: 0,
			inPrice: 2,
			outPrice: 3
		}, {
			goodsCode: 'HH100000000003',
			goodsName: 'vagetable',
			goodsCount: 1000,
			goodsCate: 1,
			inPrice: 2,
			outPrice: 3
		}, {
			goodsCode: 'HH100000000004',
			goodsName: 'vagetable',
			goodsCount: 1000,
			goodsCate: 1,
			inPrice: 2,
			outPrice: 3
		}, {
			goodsCode: 'HH100000000005',
			goodsName: 'drink',
			goodsCount: 1000,
			goodsCate: 2,
			inPrice: 2,
			outPrice: 3
		}, {
			goodsCode: 'HH100000000006',
			goodsName: 'drink',
			goodsCount: 1000,
			goodsCate: 2,
			inPrice: 2,
			outPrice: 3
		}]

		goods.forEach( item => Goods.insert(item) )
	}

})