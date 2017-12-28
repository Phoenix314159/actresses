module.exports = {
  async getData(req, res) {
    const {db: {run}} = req
    res.status(200).send(await run('select * from actresses'))
  },

  async getPictures(req, res) {
    const {db: {run}} = req
    res.status(200).send(await run('select * from pictures order by id asc'))
  }
}
