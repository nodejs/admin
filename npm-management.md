# NPM Management

We have a number of modules under the Node.js Foundation including:

* [citgm](https://github.com/nodejs/citgm)
* [llnode](https://github.com/nodejs/llnode)
* [node-gyp](https://github.com/nodejs/node-gyp)
* [node-inspect](https://github.com/nodejs/node-inspect)
* [node-report](https://github.com/nodejs/node-report)
* [readable-stream](https://github.com/nodejs/readable-stream)

We need to make sure that we have continuity in terms of being able to publish
and update these modules.

We have decided to manage these modules as follows:

* Create a user called [`nodejs-foundation`][] who we always add as one of the
  collaborators with admin rights and for which the password is maintained by
  the Build Working Group.
* We would then add individuals as collaborators who can also publish.
  Generally, a module push will be done by the additional collaborators.
  The `nodejs-foundation` user is intended to be used as a backup as opposed
  to being part of the regular publishing flow.
* In the cases where collaborators other than `nodejs-foundation`
  cease to be active, the build workgroup would provide continuity by using the
  `node-foundation` user to add additional collaborators who would have the
  ability to push the module. The `node-foundation` user could also be used to
  remove collaborators if that was ever necessary.
* The purpose of the `nodejs-foundation` user is not to enable Build
  Workgroup members to publish npm modules, that should be left to the
  module collaborators.

This approach is consistent with how npm modules have been managed by a number
of the companies who are foundation members and reports are that it has worked
well.

The credentials required for the `nodejs-foundation` user are maintained in
encrypted form in the [secrets repo][].

## Publishing new packages

To publish a new npm package, open an issue in nodejs/admin, pinging TSC.
Publishing a new package follows the same rules as 
[creating a new GitHub repository][]

[`nodejs-foundation`]: https://www.npmjs.com/~nodejs-foundation
[secrets repo]: https://github.com/nodejs-private/secrets/blob/master/build/test/test_logins.md
[creating a new GitHub repository]: https://github.com/nodejs/admin/blob/master/GITHUB_ORG_MANAGEMENT_POLICY.md#repositories
