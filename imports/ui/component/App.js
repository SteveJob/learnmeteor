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
		Meteor.call('insertOrder', {
			orderCode: '100000006',
			endPoint: 1,
			userInfo: 'stevejobs',
			createTime: new Date().getTime(),
			sumMoney: 203,
			payWay: 0,
			orderState: 8,
			detailUrl: 'http://baidu.com'
		})
	}

	renderOrder() {
		let orders = this.props.orders
		let queryParam
		let value = parseInt(this.state.endPoint)
		if (!value){
			queryParam = {}
		}else {
			queryParam = {endPoint: parseInt(this.state.endPoint)}
		}
		orders = Orders.find(queryParam).fetch()
		console.log(Orders.find(queryParam).fetch())
		return orders
	}

	reRenderOrder() {
		this.setState(this.filterOption)
	}

	filterOrderByEndPoint(value) {
		this.setState({
			endPoint: value
		})
		// 这里设置state不会立即生效 具体查看virtual DOM的实现机制
		// console.log(this.state.endPoint)
		// state改变会重新调用render() 
		// renderTable(this.state)
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
						<Select defaultValue="全部" style={{width: 120}} onSelect={this.filterOrderByEndPoint.bind(this)}>
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
						<Select defaultValue="全部" style={{width: 120}}>
							<Option value="111">123</Option>
							<Option value="222">456</Option>
							<Option value="333">789</Option>
						</Select> 
					</div>
					<div className="app-title-zone">
						订单状态：
						<Select defaultValue="全部" style={{width: 120}}>
							<Option value="111">123</Option>
							<Option value="222">456</Option>
							<Option value="333">789</Option>
						</Select>
					</div>
					<Button className="app-title-zone" type="primary" onClick="{this.reRenderOrder.bind(this)}">查询</Button>
				</div>
				<Table columns={columns} dataSource={this.renderOrder()}/>
			</div>
		)
	}
}