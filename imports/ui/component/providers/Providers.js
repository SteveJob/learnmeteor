import React, { Component, PropTypes } from 'react'
import { Button, Breadcrumb, Icon, Input, Select, Table} from 'antd'

const Option = Select.Option

import 'antd/dist/antd.css'

const columns = [{
	title: "编号",
	dataIndex: "providerCode",
	key: "providerCode"
}, {
	title: "供应商",
	dataIndex: "providerName",
	key: "providerName"
}, {
	title: "负责人",
	dataIndex: "providerManager",
	key: "providerManager"
}, {
	title: "区域",
	dataIndex: "comeFrom",
	key: "comeFrom"
}, {
	title: "联系方式",
	dataIndex: "phoneNum",
	key: "phoneNum"
}, {
	title: "合作方式",
	dataIndex: "corpWay",
	key: "corpWay"
}, {
	title: "合作状态",
	dataIndex: "corpState",
	key: "corpState"
}, {
	title: "操作",
	key: "action",
	render: (text, record) => (
		<span>
			<Button><a href="/providers/detail">查看</a></Button>
			<Button>编辑</Button>
			<Button>暂停合作</Button>
		</span>
	)
}, ]

export default class Providers extends Component {

	constructor(props) {
		super(props);
		this.filterOption = {}
	}

	renderProvider() {

	}

	filterByZone(val) {
		let value = parseInt(val, 10)
		this.filterOption.zone = value
		if (value === 0) {
			delete this.filterOption.zone
		}
	}

	filterByCorpWay(val) {
		let value = parseInt(val, 10)
		this.filterOption.corpWay = value
		if (value === 0) {
			delete this.filterOption.corpWay
		}
	}

	filterByCorpState(val) {
		let value = parseInt(val, 10)
		this.filterOption.corpState = value
		if (value === 0) {
			delete this.filterOption.corpState
		}
	}

	render() {
		return (
			<div className="prov-container">
				this is provide page !
				develop a new function!
				no bug !
				comment function!
				<div className="child">{this.props.children}</div>
				<Breadcrumb>
					<Breadcrumb.Item><Icon type="home"/><a href="/">Home</a></Breadcrumb.Item>
					<Breadcrumb.Item>供应商管理</Breadcrumb.Item>
				</Breadcrumb>
				供货商：
				<Input placeholder="供货商名称" style={{width: 150,marginLeft: 10,marginRight: 10}}/>
				区域：
				<Select defaultValue="1" onSelect={this.filterByZone.bind(this)} style={{width: 150,marginLeft: 10,marginRight: 10}}>
					<Option value="0">全部</Option>
					<Option value="1">上城</Option>
					<Option value="2">江干</Option>
				</Select>
				联系方式：
				<Input placeholder="联系方式" style={{width: 150,marginLeft: 10,marginRight: 10}}/>
				合作方式：
				<Select defaultValue="0" onSelect={this.filterByCorpWay.bind(this)} style={{width: 150,marginLeft: 10,marginRight: 10}}>
					<Option value="0">全部</Option>
					<Option value="1">自营</Option>
					<Option value="2">联营</Option>
					<Option value="3">供货</Option>
				</Select>
				合作状态：
				<Select defaultValue="0" onSelect={this.filterByCorpState.bind(this)} style={{width: 150,marginLeft: 10,marginRight: 10}}>
					<Option value="0">全部</Option>
					<Option value="1">试合作</Option>
					<Option value="2">合作中</Option>
					<Option value="3">暂停合作</Option>
				</Select>
				<Button onClick={this.renderProvider.bind(this)} type="primary">查询</Button>
				<Table columns={columns} dataSource={this.props.providers} />
			</div>
		)
	}
}