import { Meteor } from 'meteor/meteor'
import { Orders } from '../orders'

Meteor.publish('orders', function () {
	return Orders.find()
})