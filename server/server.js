const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const resourceRouter = require('./routes/resource.router');
const articleRouter = require('./routes/article.router');
const profileRouter = require('./routes/profile.router');
const commentRouter = require('./routes/comment.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/users', userRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/articles', articleRouter);
app.use('/api/profiles', profileRouter);
app.use('/api/comments', commentRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5005;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
