## Contributing

Contributions and feedback are always welcome. The expected procedure is the following:

### Bugs, Features and Feedback 

* Please, create github issues for **feature-requests**, **bug reports**.
* Feel free to open issues for **questions and problems you have**, even if they are not bugs
  or feature requests.
* You may even open an issue just to say you like the project.
* For small changes, such as **typo and formatting corrections**, you can immediately
  create a pull-request. You can use the github web-interface, but keep in mind that most of the documentation
  is created with Thought, so you should change the template in the `.thought` directory or change the default 
  templates in [the thought project](https://github.com/nknapp/thought/tree/master/handlebars).
* If you have an idea for a **new feature** that you would like to implement, please **open an issue** first and ask
  for feedback. Maybe someone else has a similar problem and different ideas.
* If you encounter a bug you can submit a **pull-request for a failing unit test**, you should then also open an issue
  for the bug.
* Before making a pull-request, make sure that you commit corresponds to the coding-style. You can do this by 
  running `npm test`.

**People submitting relevant contributions will be granted commit access to the repository.**


### Coding style

[![standard][standard-image]][standard-url]

This repository uses [`standard`][standard-url] to maintain code style and consistency,
and to avoid style arguments. You can run `npm run format` to apply the coding-style, but
you may need to fix some things manually. Make sure to use the latest version of `standard`.


### Installing & Testing

You can fork and clone the repo from github. Run 

* Run `npm install` to install all the dependencies needed to build and run the project.
* Run `npm test` to run unit tests and validate the `standard` coding-style.
* Run `npm run thought` to generate the README.md and other markdown files in the repository. 

It is intentional to don't have `standard`, `thought`, `istanbul` and `coveralls` in the devDependencies. 
`standard` is a rather large package which you would not want to have copied into the `node_modules`-folder
of each of your projects. 

Instead, the `pretest`- and `preformat`-scripts ensure that `standard` and `thought` are installed globally.
If you are not allowed to install packages globally, please raise an issue, so that we can try to find a solution.


### About this text

This text is part of the [Thought](https://github.com/nknapp/thought)-project. If you have any suggestions or wishes
to change the text, please raise an issue there for discussion.

[standard-image]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standard-url]: https://github.com/feross/standard
