function handler(req, res) {
  const { slugs } = req.query;

  res.json({ slugs }); // gives back an array of strings
}

export default handler;
