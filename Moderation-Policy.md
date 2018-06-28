# Moderation policy

If you are not a member of the Node.js GitHub Organization and wish to submit a
moderation request, please see [Requesting Moderation][]

* [Applicability][]
* [Terms][]
* [Grounds for Moderation][]
* [Requesting Moderation][]
* [Consideration of Intent][]
* [Guidelines and Requirements][]
  * [Collaborator Posts][]
  * [Non-Collaborator Posts][]
  * [Escalation to the TSC][]
  * [Temporary Interaction Limits][]
  * [Temporary and Indefinite Blocks][]
* [Privacy of the nodejs/moderation Repository][]
* [Moderation Team][]
* [Escalation of Issues][]
* [Modifications to This Policy][]

## Applicability

By default, this policy applies to all repositories under the Node.js GitHub
Organization and all Node.js Working Groups. This policy also applies to the
[Node.js Slack Community](http://node-js.slack.com), supported by the Admin
team of the Slack organization.

Individual Working Groups may adopt an alternative Moderation Policy for any
repository under their stewardship so long as the Moderation Policy is
openly documented as part of the Working Group charter and includes provisions
for clearly and openly documenting Moderation actions taken.

If a particular repository can be considered to fall under the stewardship of
multiple Working Groups that have adopted different Moderation Policies, they
can choose to either:

* Decide among themselves which Moderation Policy will be in effect for the
  repository in question, or
* Ask the TSC to determine which Moderation Policy should apply.

Any alternative Moderation Policy used for a given repository must be included
in the root directory of the repository using the `Moderation-Policy.md`
filename. If a repository does not contain a `Moderation-Policy.md` file, then
this default policy applies.

## Terms

* *Collaborator* refers to any individual with configured write (commit)
  permissions to any Node.js GitHub organization repository *other than the
  Moderation Repository*. See [GitHub's access permissions documentation][] for
  more information.
* *TSC* refers to the [Node.js Technical Steering Committee][].
* *CommComm* refers to the [Node.js Community Committee][].
* *Post* refers to the content and titles of any issue, pull request, comment
  or wiki page.
* *Moderate* refers to the act of modifying the content and title of, or
  deleting, any Post for the purpose of correcting or addressing Code of Conduct
  violations.
* *Remove* refers to the act of removing the configured write (commit)
  permissions for an individual Collaborator's GitHub account from *all*
  Node.js GitHub Organization repositories as well as removing the account from
  the Node.js GitHub Organization membership.
* *Block* refers to the act of prohibiting an individual GitHub account from any
  further participation in the Node.js GitHub Organization. A block may be
  *temporary* or *indefinite*.
* *Requester* refers to an individual requesting Moderation on a Post.

## Grounds for Moderation

Any Post considered to be in violation of the Node.js [Code of Conduct][] is
subject to Moderation.

The Moderation Team is responsible for deciding what constitutes inappropriate
behavior that may be subject to Moderation.

## Requesting Moderation

Anyone may request Moderation of a Post. Requesting Moderation of a Post can be
accomplished in one of four ways:

* Via the [report@nodejs.org][] email address,
* Via private email to individual [Moderation Team members][],
* Via a new Post in the same thread as the Post being requested for Moderation,
* Via a new Post in the private nodejs/moderation repository.

Note that Collaborators may Moderate non-Collaborator Posts at any time without
submitting an initial request (see: [Non-Collaborator Posts][]).

Use of the [report@nodejs.org][] email address -- or private email to individual
Moderation Team members -- is appropriate when the individual requesting the
Moderation does not feel comfortable directly or publicly making the request.
All emails sent to the [report@nodejs.org][] address are currently forwarded
to all members of the Moderation Team.

When a request is sent by email to the [report@nodejs.org][] (or directly to a
Moderation Team member) a new issue detailing the request must be created in
the private nodejs/moderation repository. The identity of the individual
submitting the request should be omitted from the issue unless permission to
include the identity is provided by the reporter.

Requests should contain as much information and context as possible, including
the URL and a screenshot of the Post in question. Screenshots may be modified
to obscure obscene or offensive content.

External public venues or social media services such as Twitter should never be
used to request Moderation.

Collaborators must never discuss the specific details of a Moderation request
in any public forum or any social media service outside of the Node.js GitHub
Organization.

Note that quoting the original content of a Post within a Moderation request or
nodejs/moderation repository issue is not considered a violation of the
[Code of Conduct][]. However, discretion is advised when including such quotes
in requests posted to public repositories.

Requests for Moderation that do not appear to have been submitted in good faith
with intent to address a legitimate [Code of Conduct][] violation will be
ignored.

## Consideration of Intent

Before Moderating a Post, Collaborators should carefully consider the possible
intent of the author. It may be that the author has simply made an error or is
not yet familiar with the [Code of Conduct][]; or it may be that cultural
differences exist, or that the author is unaware that certain content is
considered inappropriate. In such cases, the author should be given an
opportunity to correct any error that may have been made.

Note, however, that unfamiliarity with the [Code of Conduct][] does not excuse
a Post from Moderation.

## Guidelines and Requirements

* All Posts are expected to respect the Node.js [Code of Conduct][].
* Any Collaborator with commit rights to a given repository may Moderate Posts
  within that repository's issue tracker.
* The Moderation Team serves as the final arbiter for all Moderation issues.
* Moderation Team members may Remove or Block an individual from the Node.js
  GitHub Organization.
* For any Removal or Blocking action, an issue describing the reasons for the
  action, and identifying the Github account being acted upon, must be posted
  to the Moderation Repository with an explanation provided by the Moderation
  Team member performing the action.
* Any individual Blocked from the Node.js GitHub Organization will be recommended
  for exclusion from any Node.js Foundation sponsored event or activity.
* Minor edits to the formatting of a Post or to correct typographical errors
  are not considered to be "Moderation". Such edits and their intent should
  still be documented with a short note indicating who made the edit and why.

### Collaborator Posts

* Prior to Moderating any Post authored by a Collaborator, the author must be
  given a reasonable opportunity to modify or remove the Post on their own.
* If the author of the Post disagrees that Moderation is required, the matter
  can be escalated to the Moderation Team for resolution. In such cases, no
  Moderation action should be taken until a decision by the Moderation Team is
  made.
* When Moderating any Post authored by another Collaborator, the moderating
  Collaborator must:
  * Explain the justification for Moderating the post,
  * Identify all changes made to the Post, and
  * Identify the steps previously taken to resolve the issue.
  * If the Moderation action included Blocking, an indication of whether the Block
    is temporary or indefinite is required, along with an issue posted to the
    moderation repository justifying the action.
* Explanations of Moderation actions on Collaborator Posts must be provided in:
  * A new post within the original thread, or
  * A new issue within the private nodejs/moderation repository.
* Any Collaborator habitually violating the Code of Conduct or this Moderation
  policy may be Blocked temporarily or, in extreme cases, Removed and Blocked
  indefinitely.

### Non-Collaborator Posts

* Posts authored by non-Collaborators are always subject to immediate Moderation
by any Collaborator if the content is intentionally disruptive or in violation
of the [Code of Conduct][].
* When Moderating non-Collaborator Posts, the moderating Collaborator should:
  * Explain the justification for Moderating the post, and
  * Identify all changes made to the Post.
  * If the Moderation action included Blocking, an indication of whether the Block
    is temporary or indefinite is required, along with a note justifying the
    action.
* If an explanation of a Moderation action for a non-Collaborator Post is
  provided, it should be provided in:
  * The original Post being modified (as replacement or appended content),
  * A new post within the original thread, or
  * A new issue within the private nodejs/moderation repository.
* Moderation of Posts authored by non-Collaborators may result in those
  non-Collaborators being Blocked temporarily or indefinitely from further
  participation in the Node.js GitHub organization.
* In the case where a GitHub Account appears to have been created with no
  intention to collaborate in good faith, swift actions may be taken without
  following the above procedures including: removing Posts, Blocking
  indefinitely, and reporting accounts to GitHub.
* Accounts that are reasonably believed to be bots (other than bots authorized
  by both TSC and CommComm) are subject to immediate Blocking.
* Collaborators may use the Hide feature in the GitHub interface for off-topic
  posts by non-Collaborators.

### Temporary Interaction Limits

The Moderation Team may, at their discretion, choose to enable GitHub's
[Temporary Interaction Limits][] on any GitHub repository in the Node.js GitHub
Organization.

Any Collaborator may request that the Moderation Team enable the Temporary
Interaction Limits by posting an issue to the moderation repository. If the
Moderation Team choose not to do so, then a comment explaining why that
decision was made should be added to the moderation repository thread.

### Temporary and Indefinite Blocks

A Temporary Block is time limited, with the timeframe decided on by the Moderation
Team at the time of issuing, depending on the severity of the issue. Recommended
default options are 24-hour, 48-hour, and 7-day periods.

An Indefinite Block is set for an unspecified period of time and may only be
lifted for an individual through a simple majority vote of the Moderation
Team.

## Privacy of the nodejs/moderation Repository

The nodejs/moderation Repository is used to discuss the potentially sensitive
details of any specific moderation issue. The repository is private but
accessible to all Collaborators. The details of any issue discussed within the
nodejs/moderation repository are expected to remain confidential and are not to
be discussed in any public forum or social media service.

Any Collaborator found to be violating the privacy of the nodejs/moderation
repository by repeatedly sharing or discussing the details of nodejs/moderation
issues in any public forum or social media service risks being permanently
removed from the Node.js GitHub organization.

## Moderation Team

The Node.js Moderation Team is tasked with enforcement of this policy.

Moderation team members have the same expections as other leadership groups
as outlined [here](https://github.com/nodejs/admin/blob/master/MemberExpectations.md).

At least once per month, the Moderation Team must provide a report of all Moderation
actions taken by the Moderation Team to both the CommComm and TSC.

*Nomination*

Moderation team members are Collaborators who self-nominate or are nominated by either 
the TSC or CommComm. Team members must be approved by *both* committees with annual 
recertification. If there are no objections after seven days, the nomination is automatically
accepted. If there are objections to a specific nomination, then a simple majority
vote of each the TSC and CommComm members in *favor* of the nomination is required.

An annual recertification vote is required for all moderators. For an individual
to continue as a moderator, a simple majority vote of each the TSC and CommComm
members must vote in *favor* of retaining an individual moderator.

New Moderation Team members are onboarded with:
- an invite to Node.js Moderation Team Slack
- permission changes made to GitHub to allow access to moderate
- a walkthrough of relevant processes, expectations, and documents by an existing Moderation Team member
- access to existing documents

*Departure*

A simple majority vote of each the TSC and CommComm members is required to remove
a moderator.

*Resignation*

At any time a Moderation Team member may notify the team that they will no longer be serving. 
Either the resigning member or an active member will file an issue notifying the Admin group 
that the team member is stepping down. An active team member will take necessary steps to 
remove resigning team member from respective permissions and private access.

*Emeriti*

Past Moderation Team members in good standing are given Emeritus status. Emeriti must go 
through the full approval process in order to become a Moderation Team member again.

### Current Members of Moderation Team
* [refack](https://github.com/refack) -
**Refael Ackermann** &lt;refack@gmail.com&gt;
* [benjamingr](https://github.com/benjamingr) -
**Benjamin Gruenbaum** &lt;benjamingr@gmail.com&gt;
* [ryanmurakami](https://github.com/ryanmurakami) -
**Ryan Lewis** &lt;ryanharrisonlewis@gmail.comt&gt;
* [Trott](https://github.com/Trott) -
**Rich Trott** &lt;rtrott@gmail.com&gt;
* [thefourtheye](https://github.com/thefourtheye) -
**Sakthipriyan Vairamani** &lt;thechargingvolcano@gmail.com&gt;
* [bnb](https://github.com/bnb) -
**Tierney Cyren** &lt;hello@bnb.im&gt;
* [hackygolucky](https://github.com/hackygolucky) -
**Tracy Hinds** &lt;tracyhinds@gmail.com&gt;
* [gibfahn](https://github.com/gibfahn) -
**Gibson Fahnestock** &lt;gibfahn@gmail.com&gt;
* [othiym23](https://github.com/othiym23) -
**Forrest L Norvell** &lt;othiym23@gmail.com&gt;

### Admins for Node.js Slack community
* [alextes](https://github.com/alextes) -
**Alexander Tesfamichael** &lt;alex.tesfamichael@gmail.com&gt;
* [aredridel](https://github.com/aredridel) -
**Aria Stewart** &lt;aredridel@dinhe.net&gt;
* [ljharb](https://github.com/ljharb) -
**Jordan Harband** &lt;ljharb@gmail.com&gt;
* [jxm262](https://github.com/jxm262) -
**Justin Maat** &lt;jxm262@gmail.com&gt;
* [hackygolucky](https://github.com/hackygolucky) -
**Tracy Hinds** &lt;tracyhinds@gmail.com&gt;

## Escalation of Issues

Moderation issue disputes not involving a TSC, CommComm or Moderation Team
member may be escalated to the TSC and CommComm for review by tagging the
original issue, pull request, or associated nodejs/moderation repository
tracking issue with the `moderation-review` label. Any such Moderation action
may be overturned through a simple majority vote of each of the TSC and
CommComm members.

TSC, CommComm or Moderation Team members directly involved in a Moderation
issue -- as either the Requester or author of the Post in question -- are
*required* to recuse themselves from any decisions required to resolve the
issue.

Moderation disputes involving TSC, CommComm or Moderation Team members,
including questions of whether TSC, CommComm or Moderation Team member has
violated the Code of Conduct, *shall* be referred to an Independent Mediator
selected by the Node.js Foundation.

## Modifications to This Policy

Modifications to this policy are subject to approval by both the TSC and
CommComm. When modifications are proposed, if there are no objections after
72 hours, the modification are considered accepted. If there any objections to
any proposed change, a simple majority vote of each of the CommComm and TSC
in *favor* of the change is required.

[Code of Conduct]: https://github.com/nodejs/admin/blob/master/CODE_OF_CONDUCT.md
[Node.js Technical Steering Committee]: https://github.com/nodejs/node#tsc-technical-steering-committee
[Node.js Community Committee]: https://github.com/nodejs/community-committee
[GitHub's access permissions documentation]: https://help.github.com/articles/access-permissions-on-github/
[Temporary Interaction Limits]: https://github.com/blog/2370-introducing-temporary-interaction-limits
[Applicability]: #applicability
[Terms]: #terms
[Grounds for Moderation]: #grounds-for-moderation
[Requesting Moderation]: #requesting-moderation
[Consideration of Intent]: #consideration-of-intent
[Guidelines and Requirements]: #guidelines-and-requirements
[Collaborator Posts]: #collaborator-posts
[Non-Collaborator Posts]: #non-collaborator-posts
[Escalation to the TSC]: #escalation-to-the-tsc
[Temporary Interaction Limits]: #temporary-interaction-limits
[Temporary and Indefinite Blocks]: #temporary-and-indefinite-blocks
[Privacy of the nodejs/moderation Repository]: #privacy-of-the-nodejs-moderation-repository
[Moderation Team]: #moderation-team
[Moderation Team members]: #current-members
[Escalation of Issues]: #escalation-of-issues
[Modifications to This Policy]: #modifications-to-this-policy
[report@nodejs.org]: mailto:report@nodejs.org
