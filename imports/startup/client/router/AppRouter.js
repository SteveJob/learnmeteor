import React from 'react'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

import AppContainer from '../../../ui/container/AppContainer'
import OrderList from '../../../ui/component/OrderList'
import Providers from '../../../ui/component/providers/Providers'
import ProviderContainer from '../../../ui/container/ProviderContainer'
import ProviderDetailContainer from '../../../ui/container/ProviderDetailContainer'

export const renderRouter = () => (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
			<IndexRoute component={OrderList} />
			<Route path="/orderlist" component={OrderList}></Route>
		</Route>
		<Route path="/providers" component={ProviderContainer}>

		</Route>
		<Route path="/providers/detail/:id" component={ProviderDetailContainer}>
			
		</Route>
	</Router>
)