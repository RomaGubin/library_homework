module.exports = (req, res) => {
  res.status(404).render('errors/404', {
    title: '404 - Page Not Found'
  });
};