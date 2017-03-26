import { Meteor } from 'meteor/meteor'
import { Orders } from './orders'

Meteor.methods({
	'paginationDate'(numPerPage, index) {
		return Orders.find().skip(numPerPage*index).limit(numPerPage)
	},
})