import React, { Component, PropTypes } from 'react'
import { Button, Table, Icon } from 'antd'
import 'antd/dist/antd.css'

const Order = (props) => {
	console.log(props,'Order class')
	return <Table columns={column} dataSource={data}></Table>
}
	

export default Order