# Moderation policy

If you are not a member of the Node.js GitHub Organizations and wish to submit a
moderation request, please see [Requesting Moderation][]

* [Applicability][]
* [Terms][]
* [Grounds for Moderation][]
* [Requesting Moderation][]
* [Consideration of Intent][]
* [Guidelines and Requirements][]
  * [Collaborator Posts][]
  * [Non-Collaborator Posts][]
  * [Temporary Interaction Limits][]
  * [Temporary and Indefinite Blocks][]
* [Privacy of the nodejs/moderation Repository][]
* [Moderation Team][]
* [Escalation of Issues][]
* [Modifications to This Policy][]

## Applicability

This policy applies to all repositories under the Node.js
[GitHub Organizations][] and all Node.js Working Groups. This policy also
applies to the [Node.js Slack Community](https://node-js.slack.com),
supported by the Admin team of the Slack organization.

## Terms

* *Collaborator* refers to any individual with configured write (commit)
  permissions to any Node.js GitHub organization repository *other than the
  Moderation Repository*. See [GitHub's access permissions documentation][] for
  more information.
* *TSC* refers to the [Node.js Technical Steering Committee][].
* *Post* refers to the content and titles of any issue, pull request, comment,
  discussion, or wiki page.
* *Moderate* means to modify, lock, or delete one or more Posts to correct or
  address Code of Conduct violations.
* *Remove* refers to the act of removing the configured write (commit)
  permissions for an individual Collaborator's GitHub account from *all*
  Node.js GitHub Organizations repositories as well as removing the account from
  the Node.js GitHub Organizations membership.
* *Block* refers to the act of prohibiting an individual GitHub account from any
  further participation in the Node.js GitHub Organizations. A block may be
  *temporary* or *indefinite*.
  * This Moderation Policy applies only to blocking from the organization.
    Individuals may choose to
    [block other individuals from their personal GitHub accounts][]. This policy
    does not restrict blocking from personal GitHub accounts.
* *Requester* refers to an individual requesting Moderation on a Post.

## Grounds for Moderation

Any Post in violation of the Node.js [Code of Conduct][] is
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
Moderation Team member) the moderation team must log the issue internally and
report it periodically to the TSC.

Requests should contain as much information and context as possible, including
the URL and a screenshot of the Post in question. Screenshots may be modified
to obscure obscene or offensive content.

External public venues or social media services such as Twitter must never be
used to request Moderation.

Collaborators must never discuss the specific details of a Moderation request
in any public forum or any social media service outside of the Node.js GitHub
Organizations.

Note that quoting the original content of a Post within a Moderation request or
nodejs/moderation repository issue is not a violation of the
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
inappropriate. In such cases, the author should be given an
opportunity to correct any error that may have been made.

Note, however, that unfamiliarity with the [Code of Conduct][] does not excuse
a Post from Moderation.

## Guidelines and Requirements

* All Posts are expected to respect the Node.js [Code of Conduct][].
* Any Collaborator with commit rights to a given repository may Moderate Posts
  within that repository's issue tracker.
* The Moderation Team serves as the final arbiter for all Moderation issues.
* Moderation Team members may Remove or Block an individual from the Node.js
  GitHub Organizations.
* For any Removal or Blocking action, an issue describing the reasons for the
  action, and identifying the Github account being acted upon, must be posted
  to the Moderation Repository with an explanation provided by the Moderation
  Team member performing the action.
* Any individual Blocked from the Node.js GitHub Organizations will be recommended
  for exclusion from any Node.js Foundation sponsored event or activity.
* Minor edits to the formatting of a Post or to correct typographical errors
  are not "Moderation". Such edits and their intent must
  still be documented with a short note indicating who made the edit and why.

### Collaborator Posts

* Prior to Moderating any Post authored by a Collaborator, the author must be
  given a reasonable opportunity to modify or remove the Post on their own.
* If the author of the Post disagrees that Moderation is required, the matter
  can be escalated to the Moderation Team for resolution. In such cases, no
  Moderation action may be taken until a decision by the Moderation Team is
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
* When moderating non-Collaborator posts, the moderating Collaborator must:
  * Explain the justification for Moderating the post, and
  * Identify all changes made to the Post.
  * If the Moderation action included Blocking, an indication of whether the Block
    is temporary or indefinite is required, along with a note justifying the
    action.
* If an explanation of a Moderation action for a non-Collaborator Post is
  provided, it must be provided in:
  * The original Post being modified (as replacement or appended content),
  * A new post within the original thread, or
  * A new issue within the private nodejs/moderation repository.
* Moderation of Posts authored by non-Collaborators may result in those
  non-Collaborators being Blocked temporarily or indefinitely from further
  participation in the Node.js GitHub organization.
* If it is clear that there is no intention to collaborate in good faith,
  it is possible to hide comments of non-Collaborators. In that case there is
  an exception to the reporting requirement described above.
* Accounts that are reasonably believed to be bots (other than bots authorized
  by the TSC) are subject to immediate Blocking.
* Issues, pull requests, discussions, and comments that are spam (job posting,
  service advertising, etc.) are subject to immediate moderation.
* Collaborators may use the Hide feature in the GitHub interface for off-topic
  posts by non-Collaborators.
* Moderation Team members and TSC voting members can delete any issues or
  comments posted by accounts that have been deleted by GitHub. These accounts
  show up in the GitHub interface as user `ghost`. There is no need to
  screenshot or document these deletions.

There are a few examples of moderating non-Collaborator posts:

Scenario 1:
 * A non-Collaborator posts a comment that indicates that they are a bot.
 * A collaborator sees the post and hides it.
 * No further action is necessary.

Scenario 2:
 * A non-Collaborator posts a comment that is against the Code of Conduct.
 * A Collaborator sees the comment and asks the author to edit it.
 * The author refuses to edit their comment.
 * The Collaborator deletes the comment and posts an issue in the moderation
   repository explaining their actions.

Scenario 3:
 * A non-Collaborator opens a pull request with comments indicating they are a
   bot.
 * A Collaborator sees that pull requests, closes it, deletes the comments
   and posts an issue in the moderation repository explaining their actions.
 * A moderation team member sees the issue and decides to block the user from the
   organization.

Scenario 4:
 * A non-Collaborator posts a comment on an old commit that is against the
   Code of Conduct.
 * A Collaborator sees the comment, takes a screenshot, and deletes it.
 * The Collaborator posts an issue in the moderation repository explaining
   their actions.

### Temporary Interaction Limits

The Moderation Team may, at their discretion, choose to enable [GitHub's
Temporary Interaction Limits][] on any GitHub repository in the Node.js GitHub
Organizations.

Any Collaborator may request that the Moderation Team enable the Temporary
Interaction Limits by posting an issue to the moderation repository. If the
Moderation Team chooses not to do so, then a comment explaining why that
decision was made must be added to the moderation repository thread.

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

Moderation team members have the same expectations as other leadership groups
as outlined [here](https://github.com/nodejs/admin/blob/master/MemberExpectations.md).

At least once per month, the Moderation Team must provide a report of all Moderation
actions taken by the Moderation Team to the TSC.

*Nomination*

Moderation team members are Collaborators who self-nominate or are nominated by 
the TSC. Team members must be approved by the TSC with annual 
recertification. If there are no objections after seven days, the nomination is automatically
accepted. If there are objections to a specific nomination, then a TSC vote
in favor of the nomination is required.

*Onboarding*

New Moderation Team members are onboarded with:
- an invite to Node.js Moderation Team channel in the OpenJS Slack
- permission changes made to GitHub to allow access to moderate
- a walkthrough of relevant processes, expectations, and documents by an existing Moderation Team member
- access to existing documents

*Recertification*

An annual recertification vote is required for all Moderation Team members.
For an individual to be recertified, a TSC vote in favor of recertification is required.

*Departure*

A TSC vote is required to remove a moderator who has not resigned.

*Resignation*

At any time a Moderation Team member may notify the team that they will no longer be serving. 
Either the resigning member or an active member will file an issue notifying the Admin group 
that the team member is stepping down. An active team member will take necessary steps to 
remove resigning team member from respective permissions and private access.

<!-- referenced from the CoC page -->
<a id="current-members"></a>

### Current Members of Moderation Team

* [aduh95](https://github.com/aduh95) -
  **Antoine du Hamel** <<duhamelantoine1995@gmail.com>> (he/him)
* [atlowChemi](https://github.com/atlowChemi) -
  **Chemi Atlow** <<chemi@atlow.co.il>> (he/him)
* [benjamingr](https://github.com/benjamingr) -
  **Benjamin Gruenbaum** &lt;benjamingr@gmail.com&gt;
* [bmuenzenmeyer](https://github.com/bmuenzenmeyer) -
  **Brian Muenzenmeyer** <<brian.muenzenmeyer@gmail.com>> (he/him)
* [JohnTitor](https://github.com/JohnTitor) -
  **Yuki Okushi** &lt;huyuumi.dev@gmail.com&gt;
* [othiym23](https://github.com/othiym23) -
  **Forrest L Norvell** &lt;othiym23@gmail.com&gt;
* [ovflowd](https://github.com/ovflowd) -
  **Claudio Wunder** &lt;cwunder@gnome.org&gt; (he/they)
* [Trott](https://github.com/Trott) -
  **Rich Trott** &lt;rtrott@gmail.com&gt;
* [UlisesGascon](https://github.com/ulisesgascon) -
  **Ulises Gascón** <<ulisesgascongonzalez@gmail.com>> (he/him)

### Admins for Node.js Slack community

* [alextes](https://github.com/alextes) -
  **Alexander Tesfamichael** &lt;alex.tesfamichael@gmail.com&gt;
* [aredridel](https://github.com/aredridel) -
  **Aria Stewart** &lt;aredridel@dinhe.net&gt;
* [hackygolucky](https://github.com/hackygolucky) -
  **Tracy Hinds** &lt;tracyhinds@gmail.com&gt;
* [jxm262](https://github.com/jxm262) -
  **Justin Maat** &lt;jxm262@gmail.com&gt;
* [ljharb](https://github.com/ljharb) -
  **Jordan Harband** &lt;ljharb@gmail.com&gt;

## Escalation of Issues

Moderation issue disputes not involving a TSC voting member or Moderation Team
member may be escalated to the TSC for review by tagging the
original issue, pull request, or associated nodejs/moderation repository
tracking issue with the `moderation-review` label. Any such Moderation action
may be overturned through a TSC vote.

TSC or Moderation Team members directly involved in a Moderation
issue (as either the Requester or author of the Post in question) are
required to recuse themselves from any decisions required to resolve the
issue.

Moderation disputes involving TSC or Moderation Team members,
including questions of whether a TSC or Moderation Team member has
violated the Code of Conduct, *shall* be referred to an Independent Mediator
selected by the OpenJS Foundation.

## Modifications to This Policy

Modifications to this policy are subject to approval by the TSC.
When modifications are proposed, if there are no objections after
72 hours, the modifications are accepted. If there any objections to
any proposed change, a TSC vote in favor of the change is required.

[Code of Conduct]: https://github.com/nodejs/admin/blob/master/CODE_OF_CONDUCT.md
[Node.js Technical Steering Committee]: https://github.com/nodejs/node#tsc-technical-steering-committee
[GitHub's access permissions documentation]: https://help.github.com/articles/access-permissions-on-github/
[GitHub's Temporary Interaction Limits]: https://github.com/blog/2370-introducing-temporary-interaction-limits
[Applicability]: #applicability
[Terms]: #terms
[Grounds for Moderation]: #grounds-for-moderation
[Requesting Moderation]: #requesting-moderation
[Consideration of Intent]: #consideration-of-intent
[Guidelines and Requirements]: #guidelines-and-requirements
[Collaborator Posts]: #collaborator-posts
[Non-Collaborator Posts]: #non-collaborator-posts
[Temporary Interaction Limits]: #temporary-interaction-limits
[Temporary and Indefinite Blocks]: #temporary-and-indefinite-blocks
[Privacy of the nodejs/moderation Repository]: #privacy-of-the-nodejsmoderation-repository
[Moderation Team]: #moderation-team
[Moderation Team members]: #current-members
[Escalation of Issues]: #escalation-of-issues
[Modifications to This Policy]: #modifications-to-this-policy
[report@nodejs.org]: mailto:report@nodejs.org
[block other individuals from their personal GitHub accounts]: https://help.github.com/en/articles/blocking-a-user-from-your-personal-account
[GitHub Organizations]: https://github.com/nodejs/admin/blob/master/GITHUB_ORG_MANAGEMENT_POLICY.md
