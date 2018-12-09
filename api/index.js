const express = require('express');
const cors = require('cors');
const csp = require('helmet-csp');
const { sketchbooks } = require ('./data/');

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

app.use('/pdf/', express.static(`${__dirname}/data/pdf/`));
app.use('/images/', express.static(`${__dirname}/data/images/`));

// app.get('/', cors(), async(req, res, next) => {
// 	try {
// 		res.status(200).send();
// 	} catch(err) {
// 		next(err);
// 	}
// });
//
// app.get('/api/sketchbooks/', cors(), async(req, res, next) => (
// 	setTimeout(() => {
// 		try {
// 			sketchbooks.getAll().then(
// 				data => res.json(data)
// 			);
// 		} catch(err) {
// 			next(err);
// 		}
// 	}, 300)
// ));
//
// app.get('/api/sketchbooks/:id', cors(), async(req, res, next) => (
// 	setTimeout(() => {
// 		try {
// 			sketchbooks.get(req.params.id).then(
// 				data => res.json(data)
// 			);
// 		} catch(err) {
// 			next(err);
// 		}
// 	}, 300)
// ));

// TODO secure before doing any CrUD
// app.post('/api/sketchbooks/add/:title-:url-:coverThumb-:images-:thumbs', cors(), async(req, res, next) => {
// 	const { title, url, coverThumb, images, thumbs } = req.params;
// 	sketchbooks.add({ title, url, coverThumb, images, thumbs })
// 		.then(data => res.json(data))
// 	;
// });
//
// app.post('/api/sketchbooks/:id/update/:title-:url-:coverThumb-:images-:thumbs', cors(), async(req, res, next) => {
// 	const { id, title, url, coverThumb, images, thumbs } = req.params;
// 	sketchbooks.update(
// 		id,
// 		[title, url, coverThumb, images, thumbs].reduce((props, currentProp) => (
// 			currentProp ? { ...props, currentProp } : { ...props }
// 		), {})
// 	).then(data => res.json(data));
// });
//
// app.post('/api/sketchbooks/:id/remove', cors(), async(req, res, next) => (
// 	sketchbooks.remove(req.params.id).then(data => res.json(data))
// ));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
