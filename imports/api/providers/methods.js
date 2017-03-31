import { Meteor } from 'meteor/meteor'
import { Providers } from './providers'

Meteor.methods({
	'providers.insert'(provider) {
		Providers.insert(provider)
	}
})