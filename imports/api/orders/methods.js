import { Meteor } from 'meteor/meteor'
import { Orders } from './orders'

Meteor.methods({
	'insertOrder'(order) {
		Orders.insert(order)
	}
})