import React from 'react'
import { render } from 'react-dom'

import { Router, Route, browserHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'react-router/node_modules/history'

import { App } from './comps/App'
import { Err404 } from './comps/Err404'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

window.React = React

render(

		<Router history={appHistory}>
			<Route path="/" component={App} />
			<Route path="/item/:id" component={App} />
			<Route path="/page/:num" component={App} />
			<Route path="*" component={Err404} />
		</Router>,
		document.getElementById('wrap')
	)
