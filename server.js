const express = require('express')
const client = require('./client')

const app = express()

app.use( (req, res) => {
	const html = `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Shopping Cart with Choo</title>
			</head>
			<body>
				${client.toString('/', { message: 'Hello, world!' })}
				<script type="text/javascript" src="/bundle.js"></script>
			</body>
		</html>
	`
	
	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	res.end(html);
})

module.exports = app;
