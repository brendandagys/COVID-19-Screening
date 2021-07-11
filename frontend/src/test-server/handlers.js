import { rest } from 'msw'

export const handlers = [
  rest.post('/api/users/login', (req, res, ctx) => {
    if (req.body.username === 'brendan') {
      return res(
        ctx.status(200),
        ctx.json({
          _id: 'brendan',
          firstName: 'Brendan',
          lastName: 'Dagys',
          email: 'brendan@example.com',
          username: 'brendan',
          isAdministrator: true,
          token: 'token',
        })
      )
    }
    return res(
      ctx.status(401),
      ctx.json({ message: 'Invalid email or password', stack: 'test' })
    )
  }),

  rest.get('/api/questions', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: 'id',
          question: 'question1',
          type: 'yes/no',
          answerOptions: [],
        },
        {
          _id: 'id',
          question: 'question2',
          type: 'yes/no',
          answerOptions: [],
        },
      ])
    )
  }),

  rest.get('/api/submissions', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: 'id',
        user: 'objectid',
        answers: 'answers',
        emailed: false,
        createdAt: new Date(),
      })
    )
  }),

  rest.post('/api/submissions', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        _id: 'id',
        user: 'objectid',
        answers: 'answers',
        emailed: false,
        createdAt: new Date(),
      })
    )
  }),

  rest.get('/api/submissions/email', (req, res, ctx) => {
    return res(ctx.json({ emailSent: true }))
  }),

  // rest.get('/api/submissions/email', async (req, res, ctx) => {
  //   return res(ctx.status(404))
  // }),

  rest.post('/api/submissions/email', (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ emailSent: true }))
  }),

  rest.get('/api/users/profile', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: 'id',
        firstName: 'Brendan',
        lastName: 'Dagys',
        email: 'brendan@example.com',
        username: 'brendan',
        isAdministrator: false,
      })
    )
  }),

  rest.put('/api/users/profile', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: 'id',
        firstName: 'Brendan',
        lastName: 'Dagys',
        email: 'brendan@example.com',
        username: 'brendan',
        isAdministrator: false,
        token: 'token',
      })
    )
  }),

  rest.post('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        _id: 'id',
        firstName: 'Brendan',
        lastName: 'Dagys',
        email: 'brendan@example.com',
        username: 'brendan',
        isAdministrator: false,
        token: 'token',
      })
    )
  }),
]
