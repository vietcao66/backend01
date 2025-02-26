const get Homepage = (req, res) => {
  res.render('Hello World vs Hoi Dan It & nodemon', { title: 'Home Page' });
}
module.exports = { getHomepage };