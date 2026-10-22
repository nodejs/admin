# Request a nodejs-github-bot token

Automation in the `nodejs` GitHub Organization may require access tokens to
access permission scoped endpoints. In the case of such requirement, the access
token can be requested to be created under the name of [`@nodejs-github-bot`][].

Creating classic tokens for [`@nodejs-github-bot`][] is not permitted, only
fine-grained tokens are allowed.

To create a fine-grained access token for [`@nodejs-github-bot`][], follow the
steps as:

1. Submit a PR to add the requested repo in the registry below, and describe
   expected permission scopes.
1. A TSC member or a build WG member (who has access to the [`@nodejs-github-bot`][]
   account) needs to take following action:
    1. Create the fine-grained token at https://github.com/settings/personal-access-tokens/new
       in the account [`@nodejs-github-bot`][], with "Resource owner" to be
       `nodejs`, "Only select repositories" to be the requested repository,
       and requested permission scopes only.
    1. Save the token as a repository secret at `https://github.com/<org>/<repo>/settings/secrets/actions`,
       do not reveal the token to the anyone in plaintext.
    1. If necessary, grant write access to [`@nodejs-github-bot`][] at
       `https://github.com/<org>/<repo>/settings/access`.
    1. Land the PR.

Fine-grained tokens created with access to https://github.com/nodejs resources will
be audited at https://github.com/organizations/nodejs/settings/personal-access-tokens/active.

## When to use a nodejs-github-bot token

By default, GitHub built-in token for an action workflow `secrets.GITHUB_TOKEN` does not
trigger recursive workflow runs. If a workflow requires an exceptional case to trigger
recursive workflow runs, or cross-repository workflows, file a PR as documented above.

GitHub also introduced `approval-required` state, which allows manual approving workflow
to run on automated PRs. It is recommended to use GitHub action permission control to
improve workflow securities.

The commonly known cases are as follows:

- Cross repo deployment: request a nodejs-github-bot token.
- Release Please: use `approval-required` state instead.
- Updating a dependency: use `approval-required` state instead.

## Registry

The "repo" is a string of the GitHub `<owner>/<repo>`. Generally, the token should
only be created for repo in the https://github.com/nodejs organization.

The "secret name" is a string that the secret can be referenced in the GitHub Action
scripts. Like a secret name of `DEPLOY_TOKEN` can be accessed from the script
as `${{ secrets.DEPLOY_TOKEN }}`.

The "expiration date" is the date before which the token should be renewed and
replaced. This should be no longer than 1 year.

The "pull request" is the PR that initially requested the token, or requested
permission scope changes. The PR should describe the permission scopes requested.

Repo                                  | Secret name                   | Expiration date | Pull Request                                |
---                                   | ---                           | ---             | ---                                         |
[`nodejs/node-gyp`][]                 | `GH_USER_TOKEN`               | 2027-01-30      | <https://github.com/nodejs/admin/pull/935>  |
[`nodejs-private/security-release`][] | `SECURITY_WG_GITHUB_TOKEN`    | 2027-01-30      | <https://github.com/nodejs/admin/pull/950>  |
[`nodejs/userland-migrations`][]      | `LEARN_REPO_TOKEN`            | 2027-05-24      | <https://github.com/nodejs/admin/pull/1055> |
[`nodejs/undici`][]                   | `UNDICI_WEBSITE_TOKEN`        | 2027-08-11      | <https://github.com/nodejs/admin/pull/1072> |

[`@nodejs-github-bot`]: https://github.com/nodejs-github-bot
[`nodejs-private/security-release`]: https://github.com/nodejs-private/security-release
[`nodejs/node-gyp`]: https://github.com/nodejs/node-gyp
[`nodejs/userland-migrations`]: https://github.com/nodejs/userland-migrations
[`nodejs/undici`]: https://github.com/nodejs/undici
