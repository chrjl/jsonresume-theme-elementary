const fs = require('fs');
const path = require('path');

const { create } = require('express-handlebars');

const hbs = create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'layouts'),
  partialsDir: path.join(__dirname, 'partials'),
});

const css = fs.readFileSync(path.join(__dirname, '/style.css'), "utf-8");
const template = path.join(__dirname, 'resume.hbs');

async function render(resume) {
  return hbs.renderView(template, { css, resume, development: true });
}

module.exports = {
  render,
};