import { Meteor } from 'meteor/meteor'
import { Orders } from '../../api/orders/orders'

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

})