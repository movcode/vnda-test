module.exports = res => ({
  error404: msg => res.status(404).send({ error: msg }),
  error401: msg => res.status(401).send({ error: msg }),
  error500: msg => res.status(500).send({ error: msg }),
  errorLogin: () => res.status(401).send({ error: 'Usuário ou senha incorreto' })
})
