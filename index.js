const express = require('express');
const cors = require('cors');
const csp = require('helmet-csp');

const app = express();

const data = {
	'abcd-1234': {
		id: 'abcd-1234',
		text: 'some-text'
	}
};

app.use(csp({
	directives: {
		defaultSrc: [`'self'`],
		imgSrc: [`'self'`]
	}
}));

app.get('/', cors(), async(req, res, next) => {
	try {
		res.status(200).send({ data })
	} catch(err) {
		next(err);
	}
});

app.get('/api/', cors(), async(req, res, next) => {
	try {
		res.json({ text: 'API page' });
	} catch(err) {
		next(err);
	}
});

app.get('/api/sketchbooks/', cors(), async(req, res, next) => (
	setTimeout(() => {
		try {
			res.json(demoData);
		} catch(err) {
			next(err);
		}
	}, 300)
));

app.get('/api/sketchbooks/:id', cors(), async(req, res, next) => (
	setTimeout(() => {
		try {
			const demoId = req.params.id;
			res.json(demoData[demoId]);
		} catch(err) {
			next(err);
		}
	}, 300)
));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
