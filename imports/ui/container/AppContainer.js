import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Orders } from '../../api/orders/orders'
import App from '../component/App'

export default AppContainer = createContainer( (props) => {

	Meteor.subscribe('orders')
	return {
		orders: Orders.find().fetch()
	}

}, App)