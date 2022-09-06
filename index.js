require('dotenv').config(); 
const
    { createClient } = require('@supabase/supabase-js'),
    locale = require("locale"),
    express = require('express'),
    fs = require('fs'),

    app = express(),
    db = createClient(
      process.env.db_url,
      process.env.db_key
    );

app.use(locale(["en", "ru"], "en"));
app.use(express.static('./assets'));
app.set("view engine", "pug");

getLocalisation = (lang) => {
  lang_codes = require(`./localisation/${
      fs.readdirSync('./localisation/').includes(lang + '.json') ?
      lang : 'en'
  }.json`);

  return lang_codes || require('./localisation/en.json');
}

app.get('/', (req, res) => {
  if (!req.query.code) {
    return res.render('home.pug', {codes: getLocalisation(req.locale)});
  }
  res.render('servers.pug', { servers: [] , codes: getLocalisation(req.locale) })
})

app.listen(process.env.PORT || 8081, () => {
  console.log(`It's alive!`);
})