const choo = require('choo')
const app = choo()

app.router((route) => [
	route('/', (params, state, send) => choo.view`
		<h1 id="app-root">${state.message}</h1>	
	`)		
])

if (module.parent) module.exports = app;
else app.start('#app-root')
