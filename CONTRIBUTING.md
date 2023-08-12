# Contributing to creatures.dev

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the
[Table of Contents](#table-of-contents) for different ways to help and details
about how this project handles them. Please make sure to read the relevant
section before making your contribution. It will make it a lot easier for us
maintainers and smooth out the experience for all involved. The community looks
forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's
> fine. There are other easy ways to support the project and show your
> appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it

## Table of Contents

- [Setting up the project](#setting-up-the-project)
- [Contributing](#contributing)
  - [Bug reports](#bug-reports)
  - [Blog posts](#blog-posts)
    - [Writing instructions](#writing-instructions)
    - [PR instructions](#pr-instructions)
- [License](#license)

## Setting up the project

1. First you'd need to Fork the repo (click the `Fork` button in the top right
   of [this page](https://github.com/creatures-dev/creatures.dev).
2. Clone your forked repo locally

```bash
  git clone https://github.com/<your-username>/creatures.dev.git
  cd creatures.dev
```

3. Install the dependencies by running `pnpm install` in the root of the project

> If you run into issues setting up the project, feel free to reach out in our
> [Discord server](https://discord.creatures.dev/).

## Contributing

### Bug reports

If you find a bug in the project, please refer to the
[Issues page](https://github.com/creatures-dev/creatures.dev/issues/) to see if
the bug has already been reported. If it's not, feel free to open an issue! Make
sure to include steps to reproduce the bug, as well as the expected behavior. If
you have a suggestion for how to fix the bug, please include that as well. If
the bug is a visual bug, make sure to include a screenshot as well.

### Blog posts

If you want to write a blog post for the website, it's best to discuss it first
in the [Discord server](https://discord.creatures.dev/). We can help you with
the writing process and talk about your idea in depth. When you have a solid
idea, you can start writing the article and open a PR of your first draft.

#### Writing instructions

1. First, make sure you're on a right branch. Update the `main` branch with the
   latest changes and create a new branch named like this:
   `blog/[your-article-slug]`.

2. If you're writing for the first time, create a new file
   `src/content/authors/<your-name>.mdx` and add the following frontmatter
   properties to the file:

   - `username`: a string (this is your Discord username)
   - `twitter`: a string (this is your Twitter handle with the @)
   - `name`: a string (this is your name)
   - `avatar`: `'../../assets/authors/[your-username].jpg'` (make sure to add
     the image to the assets folder)

   > Feel free to check the other author files for reference.

3. Create a new `mdx` file in `src/content/blog` with the name of your article
   slugified (e.g. `src/content/blog/css-nesting.mdx`)

4. Add the following frontmatter to the file:

   - `title`: a string
   - `updateDate`: YYYY-MM-DD format string
   - `publishDate`: YYYY-MM-DD format string
   - `image`: `'../../assets/blog/featured-[X].jpg'` where X is the number of
     the image
   - `tags`: [] of strings
   - `author`: the slug of the author file you created in step 2
   - `excerpt`: a string

   > Feel free to check the other blog posts for reference.

5. Write your article.

#### PR instructions

1. When you're done writing, commit your changes and push them to your forked
   repo.

2. Open a PR from your forked repo to the `main` branch of the main repo.

3. Make sure to add the `blog` label to your PR.

4. Copy the PR link and post it in the
   [Discord server](https://discord.creatures.dev/) in the `#blog` channel.

5. We'll review your PR and give you feedback. If everything is good, we'll
   merge it and publish your article.

## License

By contributing your code to the `creatures-dev/creatures.dev` GitHub
repository, you agree to license your contribution under the
[MIT license](./LICENSE.md).
