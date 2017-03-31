import { Meteor } from 'meteor/meteor'
import { Goods } from '../goods'

Meteor.publish('goods', function() {
	return Goods.find()
})