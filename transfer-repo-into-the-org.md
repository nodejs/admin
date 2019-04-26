# Transferring an existing repository into the organization

## Step 1. Get the repository ready

Ideally, the repository should have the following documents in place:

- `CODE_OF_CONDUCT.md`: it can be a reference to
  [the Node.js Code of Conduct][coc].
- `CONTRIBUTING.md`: if there isn't one already, [the contributing guide][]
  of Node.js core could be a good example. Consider including the Developer's
  Certificate of Origin section in the document to avoid potential copyright
  conflicts.
- `LICENSE`, or other kind of documents that describe the license of
  the project.
- `README.md`

## Step 2. Open an issue in the admin repository

The people opening the issue should be a member of the Node.js organization,
so they can ping the relevant GitHub teams to discuss about the request.
If the person who want to initiate the request is not a member, they could ask
an existing member to open the issue, or request to join the organization.

Go to [the issue tracker of the Node.js admin repository][], open an issue
to request moving the repository into the organization. The issue should include:

- The owner and the name of the repository, and a link to it.
- What the repository is for, why it should be transferred into the organization.
- Mentions of `@nodejs/community-committee` and `@nodejs/tsc` so the Community
  Committee and the Technical Steering Committee members can be notified about
  the request and weigh in.

See the [Node.js GitHub Organization Management Policy][] on how the request
are approved.

## Step 3. Transfer the repository

When the request is approved, the owner of the repository can start transferring
the repository into the Node.js GitHub organization. The person can be made a
member of the Node.js GitHub organization so they have the necessary permissions
to complete the transfer.

See [GitHub's documentation on transferring repos][] on how to perform the
necessary actions.

## Step 4. Manage releases

If the transferred repository has one or more associated npm packages for releases,
[the Node.js foundation npm account](https://www.npmjs.com/~nodejs-foundation)
should be added to the list of the npm collaborators of the packages. The account
is managed by the Node.js Build Working Group and only serves as a safety net.
The releases should still by done by the original releasers.

See [NPM Management](./npm-management.md) on more about the Node.js foundation
npm account.

[coc]: https://github.com/nodejs/admin/blob/master/CODE_OF_CONDUCT.md
[GitHub's documentation on transferring repos]: https://help.github.com/articles/about-repository-transfers/
[Node.js GitHub Organization Management Policy]: https://github.com/nodejs/admin/blob/master/GITHUB_ORG_MANGEMENT_POLICY.md#repositories
[the contributing guide]: https://github.com/nodejs/node/blob/master/CONTRIBUTING.md
[the issue tracker of the Node.js admin repository]: https://github.com/nodejs/admin/issues
