import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { ReactDOM } from 'react-dom'
import Order from './Order'
import { Button, Breadcrumb, Icon, Input, Select, DatePicker, Table } from 'antd'

import { Orders } from '../../api/orders/orders'

import 'antd/dist/antd.css'
import './App.css'

const Option = Select.Option
const { MonthPicker, RangePicker } = DatePicker

const columns = [{
	title: "订单编号",
	dataIndex: "orderCode",
	key: "orderCode",
}, {
	title: "来源",
	dataIndex: "endPoint",
	key: "endPoint",
}, {
	title: "用户信息",
	dataIndex: "userInfo",
	key: "userInfo",
}, {
	title: "下单时间",
	dataIndex: "createTime",
	key: "createTime",
}, {
	title: "订单总额",
	dataIndex: "sumMoney",
	key: "sumMoney",
}, {
	title: "支付方式",
	dataIndex: "payWay",
	key: "payWay",
}, {
	title: "状态",
	dataIndex: "orderState",
	key: "orderState",
}, {
	title: "操作",
	dataIndex: "detailUrl",
	key: "detailUrl",
	
}]


export default class App extends Component {
	constructor(props) {
		super(props);
		// 默认设置为空 即查询全部订单
		this.state = {
			// orderCode
			// userInfo
			// endPoint
			// createTime
			// payWay
			// orderState
		}
		this.filterOption = {}
	}

	insertOrder() {
		Meteor.call('order.insert', {
			orderCode: '100000007',
			endPoint: 0,
			userInfo: 'stevejobs',
			createTime: new Date().getTime(),
			sumMoney: 203,
			payWay: 2,
			orderState: 3,
			detailUrl: 'http://baidu.com'
		})
	}

	renderOrder() {
		// let orders = this.props.orders
		let orders = Orders.find(this.state).fetch()
		// On the client, if you do not pass a callback and you are not inside a stub, call will return undefined
		// Meteor.call('order.find', this.state, function(data) {
		// 	 return data
		// })
		return orders
	}

	reRenderOrder() {
		// 注意 这里有一个bug 删除筛选条件部分选项后 这里的setState方法只会被筛选条件里有的选项的选项值覆盖 筛选条件里没有的state里仍然会有
		// 解决方法 先清空state
		this.state={}
		this.setState(this.filterOption)
	}

	filterOrderByEndPoint(value) {
		value = parseInt(value)
		this.filterOption.endPoint = value
		if (!value && this.filterOption.endPoint !== undefined) {
			delete this.filterOption.endPoint
		}

		console.log(this.filterOption)
		// 这里设置state不会立即生效 具体查看virtual DOM的实现机制
		// console.log(this.state.endPoint)
		// state改变会重新调用render() 
		// renderTable(this.state)
	}

	filterOrderByPayWay(value) {
		value = parseInt(value)

		this.filterOption.payWay = value
		if (!value && this.filterOption.payWay !== undefined) {
			delete this.filterOption.payWay
		}

	}

	filterOrderByOrderState(value) {
		value = parseInt(value)
		// 选择了全部
		this.filterOption.orderState = value
		if (!value && this.filterOption.orderState !== undefined) {
			delete this.filterOption.orderState
		}
	}

	render() {

		return (
			<div className="app-container">
				{/*
				<h2>this is app page </h2>
				<div>{this.props.children}</div>
				*/}

				<Breadcrumb separator="/" className="bc-antd">
					<Breadcrumb.Item href=""><Icon type="home"></Icon>工作台</Breadcrumb.Item>
					<Breadcrumb.Item href="">运营部</Breadcrumb.Item>
					<Breadcrumb.Item>订单管理</Breadcrumb.Item>
				</Breadcrumb>
				<Button type="danger" onClick={this.insertOrder}>ADD</Button>

				<hr />

				<div style={{marginBottom: 20, marginTop: 20}}>
					<div className="app-title-zone">
						订单编号：
						<Input placeholder="订单编号" size="large" style={{width: 120}}/>
					</div>
					<div className="app-title-zone">
						用户信息：
						<Input placeholder="用户信息" style={{width: 120}}/>
					</div>
					<div className="app-title-zone">
						来源：
						<Select defaultValue="0" style={{width: 120}} onSelect={this.filterOrderByEndPoint.bind(this)}>
							<Option value="0">全部</Option>
							<Option value="1">微信</Option>
							<Option value="2">微博</Option>
							<Option value="3">微洽</Option>
						</Select>
					</div>
					<div className="app-title-zone">
						下单时间：
						<RangePicker/>
					</div>
					<div className="app-title-zone">
						支付方式：
						<Select defaultValue="0" style={{width: 120}} onSelect={this.filterOrderByPayWay.bind(this)}>
							<Option value="0">全部</Option>
							<Option value="1">支付宝</Option>
							<Option value="2">微信</Option>
							<Option value="3">银行卡</Option>
						</Select> 
					</div>
					<div className="app-title-zone">
						订单状态：
						<Select defaultValue="0" style={{width: 120}} onSelect={this.filterOrderByOrderState.bind(this)}>
							<Option value="0">全部</Option>
							<Option value="1">待发货</Option>
							<Option value="2">已发货</Option>
							<Option value="3">待签收</Option>
							<Option value="4">已签收</Option>
							<Option value="5">待评价</Option>
							<Option value="6">交易成功</Option>
							<Option value="7">退货中</Option>
							<Option value="8">退货成功</Option>
						</Select>
					</div>
					<Button className="app-title-zone" type="primary" onClick={this.reRenderOrder.bind(this)}>查询</Button>
				</div>
				<Table columns={columns} dataSource={this.renderOrder()}/>
				{this.props.children}
			</div>
		)
	}
}