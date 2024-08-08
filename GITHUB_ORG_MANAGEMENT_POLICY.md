# Node.js GitHub Organization Management Policy

The following GitHub Organizations are development resources under the direction
of the Node.js Technical Steering Committee (TSC):

* [`nodejs`](https://github.com/nodejs)
* [`pkgs`](https://github.com/pkgjs)

## Node.js Admin Repository

The [Node.js admin repository][nodejs/admin] serves as the
central location for managing our GitHub Organization administrative
activities. This repository is maintained by the TSC.

## Organization Roles

### Owners

Whether to grant Owner role is determined by optimizing
for the following conflicting requirements:

* Limiting access to reduce risk.
* Enabling individuals to move community work forward without undue delay.

When possible, automation and tools should be used to reduce the breadth of
access that needs to be provided in order to enable individuals to move
community work forward. As these tools are created, the groups to which
Owner role are granted will be reduced.

The following groups have the role "Owner" in our GitHub Organizations:

* **TSC voting members**.
* **OpenJS Director of Program Management**. The OpenJS Director of Program
  Management will limit their use of the access granted to accept GitHub terms
  and conditions. They will be added to the team called
  [`openjs`](https://github.com/orgs/nodejs/teams/openjs)
  as we require all members to be part of one or more teams in order to simplify
  member management.
* **Moderation team members**. The Moderation Team members will limit their use
  of the access granted to that required to carry out moderation across the
  existing repositories.

### Members

GitHub users are added as members to our GitHub Organization when they
are added to any Working Group or team. Organization Owners should add new
members to the organization when requested by a Working Group or team.

## Repositories

Any repository created under the our GitHub Organizations are considered to be
a project under the ownership of the OpenJS Foundation, and thereby subject
to the Intellectual Property and Governance policies of the Foundation.

Any member of one of our GitHub Organizations may request the management
of repositories within our GitHub Organizations by opening an issue in the
[Node.js admin repository][nodejs/admin]. The actions requested could be:

- Creating a new repository.
- Deleting an existing repository.
- Archiving an existing repository.
- Transferring a repository into or out of one of our GitHub Organizations.

Provided there are no objections from any TSC members raised in
the issue, such requests are approved automatically after 72 hours. If any
objection is made, the request shall not be completed without a vote from
the TSC to dismiss the objection.

In certain cases, OpenJS Cross Project Council and/or OpenJS Foundation Board
of Directors approval may also be required.

### Repository Team Ownership

When making a request to create a new repository, specify the team(s) that will
have Maintain permission. If there is not an appropriate team to maintain a
new repository, request creating a new team. Approval is automatic if there are no
objections from TSC members after 72 hours.

## Teams

To join a Working Group team or a team who fall under the charter of a Working
Group, read that Working Group's governance documentation. For other teams, send
a join request for the team via the Team page, or, if you are not a member of
the Node.js org, open an issue on the [Node.js admin repository][nodejs/admin].

For members of teams with org-wide admin permissions (TSC and
Moderation), it is not possible to send a join request to any teams, since
those users have permission to add themselves to the team. In this case, use
your best judgement to decide between adding yourself to the team or asking for
permission. When joining a `*-admin` which is not bound to a working group or
repository, open an issue in the [nodejs/admin][] repo pinging the team,
inquire using the team discussion feature, or contact the team maintainers directly to ask
to join.

## Removing or Blocking Individuals

Only GitHub Organization owners may remove an individual from the
membership or block individuals. This is due largely to
limitations in the way GitHub permissions are structured.

Removal of inactive members from our GitHub organizations can happen without any formality.

Blocking an individual who is not currently a member of our GitHub organizations
may occur at any time subject to the policies outlined in the Moderation
Guidelines.

## GitHub Apps, Bot Personal Tokens and Repository Secrets

Installation of GitHub apps for one or more repositories, creating personal
tokens for a project bot account (such as `@nodejs-github-bot`) and adding 
secrets to a repository must be approved by the TSC.

In order to request any of the above, open an issue in the 
[Node.js admin repository][nodejs/admin] with details of:

* the application to be installed, token to be created or secret to be added.
  * in the case of secrets, don't share the value on the issue, share just 
    details on how it will be used.
* for apps and personal tokens, the permissions that it requires.
* the repositories for which the app will be installed or the secrets will be 
  added.

A new request is required each time an application is enabled or a secret is 
added for a new repository even if it has been done before.

The request must be approved by at least two TSC voting members and
be open for a minimum of 72 hours before landing.

For GitHub Apps already used in the Org, or for secrets already used in other
repositories in the Org, the request can be fast-tracked. To fast-track, add
the `fast-track` label to the request, and leave a comment which must contain:
a) a link showing how the GitHub App or the secret being requested is already 
in use, and b) ask for approvals to fast-track the request. Two voting members
of the  TSC must approve the fast track request. Fast-tracked requests require
only one approval from a TSC voting member, and the request must remain open
for at least 24 hours.


If any objection is made, the request shall not be completed without a vote from
the TSC to dismiss the objection.

## Use of Bots and Services

Automation tools such as bots and third-party services on any repository must
be approved by the TSC and are subject to regular security audits.
Bots that perform actions on behalf of the project (such as moderation or membership
management actions) are required to maintain a log, accessible to all individuals
granted Owner permissions, of all actions taken.

[nodejs/admin]: https://github.com/nodejs/admin
