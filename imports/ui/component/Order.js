import React, { Component, PropTypes } from 'react'

const Order = (props) => (
	<div>
		<p>this is a list item!</p>
		<p>{props.userInfo}</p>
	</div>
)

export default Order