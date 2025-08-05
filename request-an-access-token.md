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

## Registry

The "repo" is a string of the GitHub `<owner>/<repo>`. Generally, the token should
only be created for repo in the https://github.com/nodejs organization.

The "secret name" is a string that the secret can be referenced in the GitHub Action
scripts. Like a secret name of `RELEASE_PLEASE_TOKEN` can be accessed from the script
as `${{ secrets.RELEASE_PLEASE_TOKEN }}`.

The "expiration date" is the date before which the token should be renewed and
replaced. This should be no longer than 1 year.

The "pull request" is the PR that initially requested the token, or requested
permission scope changes. The PR should describe the permission scopes requested.

Repo                                  | Secret name                   | Expiration date | Pull Request                               |
---                                   | ---                           | ---             | ---                                        |
[`nodejs/import-in-the-middle`][]     | `RELEASE_PLEASE_GITHUB_TOKEN` | 2026-08-06      | <https://github.com/nodejs/admin/pull/902> |
[`nodejs/node-core-utils`][]          | `RELEASE_PLEASE_GITHUB_TOKEN` | 2025-09-01      | <https://github.com/nodejs/admin/pull/915> |
[`nodejs/wasm-builder`][]             | `RELEASE_PLEASE_GITHUB_TOKEN` | 2025-10-01      | <https://github.com/nodejs/admin/pull/926> |
[`nodejs/amaro`][]                    | `RELEASE_PLEASE_GITHUB_TOKEN` | 2025-12-11      | <https://github.com/nodejs/admin/pull/933> |
[`nodejs/node-gyp`][]                 | `GH_USER_TOKEN`               | 2026-01-28      | <https://github.com/nodejs/admin/pull/935> |
[`nodejs-private/security-release`][] | `SECURITY_WG_GITHUB_TOKEN`    | 2026-02-06      | <https://github.com/nodejs/admin/pull/950> |
[`nodejs/require-in-the-middle`][]    | `RELEASE_PLEASE_GITHUB_TOKEN` | 2026-02-07      | <https://github.com/nodejs/admin/pull/951> |
[`nodejs/doc-kit`][]                  | `DOC_KIT_BOT_PAT`             | 2026-08-06      | <https://github.com/nodejs/admin/pull/996> |

[`@nodejs-github-bot`]: https://github.com/nodejs-github-bot
[`nodejs-private/security-release`]: https://github.com/nodejs-private/security-release
[`nodejs/amaro`]: https://github.com/nodejs/amaro
[`nodejs/import-in-the-middle`]: https://github.com/nodejs/import-in-the-middle
[`nodejs/node-core-utils`]: https://github.com/nodejs/node-core-utils
[`nodejs/node-gyp`]: https://github.com/nodejs/node-gyp
[`nodejs/require-in-the-middle`]: https://github.com/nodejs/require-in-the-middle
[`nodejs/wasm-builder`]: https://github.com/nodejs/wasm-builder
[`nodejs/doc-kit`]: https://github.com/nodejs/doc-kit
