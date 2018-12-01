const express = require('express');
const cors = require('cors');
const csp = require('helmet-csp');
const { sketchbooks } = require ('./data/');

// TODO return sketchbooks promises in endpoints

const app = express();

const useCors = (corsWare, corsList) => (
	app.use(corsWare({
		origin: (origin, cb) => (
			!origin || corsList.includes(origin)
				? cb(null, true)
				: cb(new Error('CORS Error: Cross Origin Resource Sharing not allowed on this resource'))
		)
	}))
);

useCors(cors, [
	'http://localhost:3000',
	'http://localhost:3001'
]);

app.use(csp({
	directives: {
		defaultSrc: [`'self'`],
		imgSrc: [`'self'`]
	}
}));

console.log(`${__dirname}/data/`);
app.use('/pdf/', express.static(`${__dirname}/data/pdf/`));
app.use('/images/', express.static(`${__dirname}/data/images/`));

app.get('/', cors(), async(req, res, next) => {
	try {
		res.status(200).send({ data: sketchbooks })
	} catch(err) {
		next(err);
	}
});

app.get('/api/sketchbooks/', cors(), async(req, res, next) => (
	setTimeout(() => {
		try {
			res.json(sketchbooks);
		} catch(err) {
			next(err);
		}
	}, 300)
));

app.get('/api/sketchbooks/:id', cors(), async(req, res, next) => (
	setTimeout(() => {
		try {
			res.json(sketchbooks[req.params.id]);
		} catch(err) {
			next(err);
		}
	}, 300)
));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
