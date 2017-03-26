import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { renderRouter } from './router/AppRouter'

Meteor.startup(() => {
	render( renderRouter(), document.getElementById('app') )
})