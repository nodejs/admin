# Node.js Package Namespace Migration Plan

Packages intended to be used directly by general developers should be published under the `@nodejs` namespace. Packages intended to be used only by Node.js contributors should be published under the `@node-core` namespace.

Packages that already exist and are used directly by general developers, i.e. `undici`, should be cross-published to the new scope and existing name. It should remain this way until the *next major* version is released, in which case the existing name should be *deprecated* and instruct users to start the upgrade path to the new major using the new scope.

For example, take the `undici` package. At the time of writing this document, the `latest` version is `5.22.0`. If we were to create the `@nodejs` scope today, we would start cross-publishing to `@nodejs/undici` and `undici`. We would continue this until `v6` was to be released. Lets say that `5.35.7` is the last `v5` version of `undici`. `@nodejs/undici@5.35.7` and `undici@5.35.7` would both be published, but `undici@5.35.7` would be marked as *deprecated* using `npm deprecate undici@5.35.7 "Upgrade to @nodejs/undici for version 6"`

Packages that already exist and are only used by Node.js contributors, i.e. `node-core-utils`, should be immediately deprecated, and republished under the new scope. This process is different from the other scope because these packages tend to have less users, and are often not used as a part of another application or library. Otherwise stated, by deprecating the latest version, there is a low or non-existent chance of breaking a legitimate application. And contributors would be well communicated with about the change. Finally, if these tools specify a certain `bin` name, they can (and should) continue to use that name.

For example, `node-core-utils` could be republished as `@node-core/utils`. The `bin` values of `get-metadata`, `git-node`, and others can all remain the same.