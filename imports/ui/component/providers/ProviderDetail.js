import React, { Component, PropTypes } from 'react'
import { Button, Breadcrumb, Table, Icon } from 'antd'

import 'antd/dist/antd.css'

const columns =[{
	title: '货号',
	dataIndex: 'goodsCode',
	key: 'goodsCode'
}, {
	title: '商品名称',
	dataIndex: 'goodsName',
	key: 'goodsName'
}, {
	title: '规格',
	dataIndex: 'goodsCount',
	key: 'goodsCount'
}, {
	title: '种类',
	dataIndex: 'goodsCate',
	key: 'goodsCate'
}, {
	title: '供货价',
	dataIndex: 'inPrice',
	key: 'inPrice'
}, {
	title: '单价',
	dataIndex: 'outPrice',
	key: 'outPrice'
}, ]

export default class ProviderDetail extends Component {
	render() {
		return (
			<div>
				this is provide detail page !
				<Table columns={columns} dataSource={console.log(
					this.props.location,
					this.props.location.pathname,
					this.props.query
					)}/>
			</div>
		)
	}
}
