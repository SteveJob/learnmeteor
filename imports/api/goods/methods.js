import { Meteor } from 'meteor/meteor'
import { Goods } from './goods'

Meteor.methods({
	'goods.insert'(goods) {
		Goods.insert(goods)
	},
})