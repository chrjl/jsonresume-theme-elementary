const fs = require('fs');
const path = require('path');

const { create } = require('express-handlebars');

const hbs = create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'layouts'),
  partialsDir: path.join(__dirname, 'partials'),
});

async function render(resume, development = false) {
  const css = fs.readFileSync(path.join(__dirname, '/style.css'), "utf-8");
  const template = path.join(__dirname, 'resume.hbs');

  return hbs.renderView(template, { css, resume, development });
}

module.exports = {
  render,
};
