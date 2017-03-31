import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Providers as ProvidersAPI } from '../../api/providers/providers'
import Providerss from '../component/providers/Providers'

export default ProviderContainer = createContainer( (props) => {
	Meteor.subscribe('providers')
	return {
		providers: ProvidersAPI.find().fetch()
	}
}, Providerss)