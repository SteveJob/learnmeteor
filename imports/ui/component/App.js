import React, { Component, PropTypes } from 'react'
import { ReactDOM } from 'react-dom'
import Order from './Order'

export default class App extends Component {

	arrangeOrders() {
		const orders = this.props.orders
		return orders.map( order => {
			// this指App 
			console.log(this,order,orders)
			return <Order userInfo={order.userInfo}></Order>
		} )
	}

	render() {
		return (
			<div>
				<h2>this is app page </h2>
				<div>{this.props.children}</div>
				<div>{this.arrangeOrders()}</div>
			</div>
		)
	}
}