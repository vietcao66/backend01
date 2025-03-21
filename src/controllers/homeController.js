const getHomepage = (req, res) => {
  // Add your homepage logic here
  res.render("home.ejs");
};

const getAbc = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getAbc,
};
