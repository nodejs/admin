# Node.js GitHub Organization Management Policy

The Node.js GitHub Organization (https://github.com/nodejs) is
a development resource under the direction
of the Node.js Technical Steering Committee (TSC) and Node.js Foundation
Community Committee (CommComm).

## Node.js Admin Repository

The [Node.js admin repository][nodejs/admin] serves as the
central location for managing Node.js GitHub Organization administrative
activities. Only Node.js GitHub Organization owners, TSC members, and Community
Committee members have write permissions to the Node.js admin repository.

## Organization Roles

### Owners

Whether to grant Owner permissions is determined by optimizing
for the following conflicting requirements:

* Limiting access to reduce risk
* Enabling individuals to move community work forward without undue delay

When possible, automation and tools should be used to reduce the breadth of
access that needs to be provided in order to enable individuals to move
community work forward. As these tools are created, the groups to which
Owner permissions are granted will be reduced.

The following groups are granted Ownership permissions:

* TSC members
* Community Committee Chairperson
* Moderation team members. The Moderation Team members
will limit their use of the access granted to that required to carry out
moderation across the existing repositories.

### Members

GitHub users are added as members to the Node.js GitHub Organization when they
are added to any Working Group or team. Organization Owners should add new
members to the organization when requested by a Working Group or team.

## Repositories

Any repository created under the Node.js GitHub Organization is considered to be
a project under the ownership of the OpenJS Foundation, and thereby subject
to the Intellectual Property and Governance policies of the Foundation.

Any organization member may request the management of repositories within the
Node.js GitHub Organization by opening an issue in the
[Node.js admin repository][nodejs/admin]. The actions requested could be:

- Creating a new repository
- Deleting an existing repository
- Archiving an existing repository
- Transferring a repository into or out of the organization

Provided there are no objections from any TSC or CommComm members raised in
the issue, such requests are approved automatically after 72 hours. If any
objection is made, the request may be moved to a vote in each of the
Technical Steering and Community Committees. If either the TSC or CommComm
rejects the request, then the request is denied.

In certain cases, OpenJS Cross Project Council and/or OpenJS Foundation Board
of Directors approval may also be required.

### Repository Team Ownership

When making a request to create a new repository, specify the team(s) that will
have write or admin access. If there is not an appropriate team to maintain a
new repository, request a new team. Approval is automatic if there are no
objections from TSC or CommComm after 72 hours.

## Teams

To join a Working Group team or a team who fall under the charter of a Working
Group, read that Working Group's governance documentation. For other teams, send
a join request for the team via the Team page, or, if you are not a member of
the Node.js org, open an issue on the [Node.js admin repository][nodejs/admin].

For members of teams with org-wide admin permissions (TSC, CommComm and
Moderation), it is not possible to send a join request to any teams, since
those users have permission to add themselves to the team. In this case, use
your best judgement to decide between adding yourself to the team or asking for
permission. When joining a `*-admin` which is not bound to a working group or
repository, open an issue in the nodejs/admin repo pinging the team,
inquire using the team discussion feature, or contact the team maintainers directly to ask
to join.

## Removing or Blocking Individuals

Only Node.js GitHub Organization owners may remove an individual from the
Node.js membership or block individuals. This is due largely to
limitations in the way GitHub permissions are structured.

To remove any current member from the GitHub organization, an issue must be
opened in the Node.js admin repository. If, after 72 hours, there are no
objections from any TSC or Community Committee members, removal becomes
automatic. If there are objections, then simple majority votes of each of the
Technical Steering and Community Committees in favor of removal are required.

Blocking an individual who is not currently a member of the GitHub organization
may occur at any time subject to the policies outlined in the Moderation
Guidelines.

## GitHub Apps, Bot Personal Tokens and Repository Secrets

Installation of GitHub apps for one or more repositories, creating personal
tokens for a project bot account (such as `@nodejs-github-bot`) and adding 
secrets to a repository must be approved by the TSC and Community Committee.

In order to request any of the above, open an issue in the 
[Node.js admin repository][nodejs/admin] with details of:

* the application to be installed, token to be created or secret to be added
  * in the case of secrets, don't share the value on the issue, share just 
    details on how it will be used
* for apps and personal tokens, the permissions that it requires
* the repositories for which the app will be installed or the secrets will be 
  added

A new request is required each time an application is enabled or a secret is 
added for a new repository even if it has been done before.

The request must be approved by at least one TSC and one CommComm members and
be open for a minimum of 72 hours before landing. 

For GitHub Apps already used in the Org, or for secrets already used in other
repositories in the Org, the request can be fast-tracked. To fast-track, add
the `fast-track` label to the request, and leave a comment which must contain:
a) a link showing how the GitHub App or the secret being requested is already 
in use, and b) ask for approvals to fast-track the request. Two members of 
either TSC or CommComm must approve the fast track request. Fast-tracked 
requests only need one approval from either TSC or CommComm is required, and 
the request must  remain open for 24 hours.

If any objection is made, the request may be moved to a vote in each of the
Technical Steering and Community Committees. If either the TSC or CommComm
rejects the request, then the request is denied.

## Use of Bots and Services

Automation tools such as bots and third-party services on any repository must
be approved by the TSC and CommComm and are subject to regular security audits.
Bots that perform actions on behalf of the project (such as moderation or membership
management actions) are required to maintain a log, accessible to all individuals
granted Owner permissions, of all actions taken.

[nodejs/admin]: https://github.com/nodejs/admin
