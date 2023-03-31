# Elementary theme

Built from edits to the boilerplate theme.

## Highlights

Uses the `express-handlebars` engine to render HTML. This package's `render` export very lightly wraps the `ExpressHandlebars.renderView` method.

[`express-handlebars`](https://www.npmjs.com/package/express-handlebars)extends Handlebars with the following:

> - Add back the concept of "layout", which was removed in Express 3.x.
> - Add back the concept of "partials" via Handlebars' partials mechanism.
> - Support a directory of partials; e.g., `{{> foo/bar}}` which exists on the file system at `views/partials/foo/bar.handlebars`, by default.
> - All async and non-blocking. File system I/O is slow and servers should not be blocked from handling requests while reading from disk. I/O queuing is used to avoid doing unnecessary work.
> - Ability to easily precompile templates and partials for use on the client, enabling template sharing and reuse.

Extends the [JSON Resume schema](https://jsonresume.org/schema/):

- Adds a `experience` field to serve as an alternative to `work`, with  functional-style resume as a use case.  Shares its template with `work`.
- Adds a `categories` property to the `experience` (and `work`), with a use case of further breaking down the functional style of resume. Copies its template from the `skills` field.
- Adds a `department` property to `work`/`experience` fields, to extend `name` field.
- Adds a `status` property to `projects`, allowing for different CSS styling for projects at different stages of development

Adds a Boolean `development` key to the context.

- Templates can be modified depending on environment.

  ```handlebars
  {{#if development}}
    ... development template
  {{#else}}
    ... production template
  {{/if}}
  ```
  
- Transparent `<div>` representing first printed page is placed above rendered resume.

### Layouts

`vertical-description` class: heading, description, bulleted keywords/highlights. Used for `projects`, `education`, `certificates`, and `interests`

`horizontal-description` class: definition list. Used for `skills`, `languages`, and `experience.categories`

Fields not (yet) implemented:

- [ ] awards
- [ ] publications
- [ ] references
- [ ] volunteer

## Development

Excerpts from `jsonresume-theme-boilerplate` documentation

### Overview

Now that you have your boilerplate theme installed, go through a quick overview of each of the files needed for your JSONResume theme:

- `package.json`: Your package.json is required by all npm packages. Everytime you want to release a new update of your theme, you'll need to update it's version number.
- `index.js`: This is the file that will return the needed HTML to the theme server. The most important part of `index.js` is the `render` function. This is where all the compilation goes. This render function is expected to take a resume object (from a `resume.json`), and should return HTML.
- `resume.hbs`: This is your actual template. This file is sent to the `index.js` for it to send to the theme server.
- `style.css`: This is where all the CSS of your project goes. Since the `index.js` only returns HTML, the contents of this file are put between `<style>` tags in your `resume.hbs` file.

## Deployment

If you are familar with NPM, you should be done with this in no time.

If you already have an NPM account, you can run `npm login` and enter your username and password. If not, you can run `npm adduser` and fill in the proper fields.

If you changed the dependencies or added new ones, you'll want to run `npm install` again, and just to make sure, run `npm update` to get the latest version of each dependency.

When you are done with that, you may go into your package.json, and edit the version number. When all of the above is finished, you may run `npm publish` to release your theme to the public. Now everyone can use your theme with their resume.

When updating your theme, you'll need to change the version number and run `npm publish` again.

## License

Available under [the Mozilla Public License](https://www.mozilla.org/en-US/MPL/)
