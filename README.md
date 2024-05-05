<div align="center">

<h3 align="center">Repos searcher </h3>
<p align="center">
Search for repositories on GitHub

<br/>
<br/>
<a href="https://repo-searcher-five.vercel.app/">Vercel Demo</a> —
<a href="https://github.com/yrogovich/repo-searcher/issues/new?labels=bug&template=bug-report---.md">Report Bug</a> —
<a href="https://github.com/yrogovich/repo-searcher/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
</p>
</div>

## 🌟 Challenge

Develop an application that is a GitHub repository search 🔍. On the main page, the application should render an input and a table with the search results. Its structure should look like this:

| Name                    | Owner     | Stars | Created at |
| ----------------------- | --------- | ----- | ---------- |
| yrogovich/repo-searcher | yrogovich | 1     | 2016-10-29 |

Please add the following features (as many as you can) in the following order:

- [ ] Caching the search results, so we don't have to make an API call if the results were fetched before.
- [ ] Presenting a simple loading/error state
- [ ] Sorting the table by columns, pagination, and changing the number of rows displayed (locally).
- [ ] Updating the current URL on query change or table sort, so we get the same results when the page gets refreshed.
- [ ] Removing a "search" button and firing API requests only when the user stopped typing (please be aware of GitHub rate limits).

And adding anything else that will be useful for the user...

## 🔧 Installation and Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yrogovich/repo-searcher.git
   ```
2. Navigate to the project directory
   ```bash
   cd repo-searcher
   ```
3. Install dependencies

   recommended method👇🏾

   ```bash
   pmpm install
   ```

   or old school method 👴🏾

   ```bash
   npm install
   ```

4. Add .env.local file to the root of the project from the .env.example file and add your GitHub token to the file.
5. Start the development server

   ```bash
    pnpm run dev
   ```

## 💬 Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for commit messages. This convention makes it easier to understand the changes in a project and to automate the versioning process.

## 🐙 GitHub APIs

Full documentation for GitHub's Search APIs can be found here:

- [https://developer.github.com/v3/search/](https://developer.github.com/v3/search/)

A sample query to find repos with "tetris" can be found below:

```bash
curl https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc
```

You should be able to modify this to suit your needs.

Please note that GitHub requests are rate limited as follows:

> The Search API has a custom rate limit. For requests using Basic Authentication, OAuth, or client ID and secret, you can make up to 30 requests per minute. For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.

## 🔗 Relevant Links

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/learn)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Tailwind CSS](https://v2.tailwindcss.com/docs)
- [Shadcn](https://ui.shadcn.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)
- [Octokit.js](https://octokit.github.io/rest.js/v20#usage)
- [TanStack Table](https://tanstack.com/table/latest)
- [TansStack Query](https://tanstack.com/query/latest)

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
