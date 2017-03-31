import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import ProviderDetail from '../component/providers/ProviderDetail'
import { Providers } from '../../api/providers/providers'
import { Goods } from '../../api/goods/goods'
export default ProviderDetailContainer = createContainer ( (props) => {
	Meteor.subscribe('providers')
	Meteor.subscribe('goods')
	return {
		providers: Providers.find().fetch(),
		goods: Goods.find().fetch()
	}
}, ProviderDetail)