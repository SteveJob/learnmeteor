import { Meteor } from 'meteor/meteor'
import { Orders } from './orders'

Meteor.methods({
	'order.insert'(order) {
		Orders.insert(order)
	},
	// On the client, if you do not pass a callback and you are not inside a stub, call will return undefined
	'order.find'(opt) {
		return Orders.find(opt).fetch()
	}
})