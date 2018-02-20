# How to enable Travis in a repository under the Node.js GitHub organization

Since we don't allow third-party access to the Node.js GitHub organization
except our own bots, when a repository is transferred into the Node.js
foundation, Travis won't be able to update the build status of pull requests
automatically. Instead, we need to use our own GitHub bot to pull the status
from Travis and send the update in GitHub. This is what needs to be done:

### Step 1: Travis setup

Make sure Travis can listen to the push and pull request events of the
repository. Go to "Settings -> Integrations & services" page of the
repository. If Travis has been integrated with the repository before,
then it should be listed under "Services". If not, click on the dropdown
"Add service", and search for Travis to add it.

The service does not really have to be configured to enable Travis. All of the
following configurations work:

* User and Token configured as someone who is not "nodejs", and Domain is
  blank
* User and Token left blank, Domain is `notify.travis-ci.org`
* User and Token configured as someone who is not "nodejs", Domain is
  `notify.travis-ci.org`
* User, Token, Domain all left blank
  
If `https://travis-ci.org/nodejs/{reponame}` starts building new pull requests
or pull request updates in the repository after the service is enabled, then
the Travis end is set up.

### Step 2: add the bot to your team

Go to the "Settings -> Collaborators & teams" page of the repository, add
`@nodejs-github-bot`, or the `@nodejs/bots` team to the collaborators of the
repository, so that the GitHub bot account has write access to it. If there
are 404 responses in the logs of build status updates sent from the bot, it
usually means the bot is not granted write access to the repository. 

### Step3: add the webhook for the bot

On the "Settings -> Webhooks" page, add a new webhook for the bot:

* Payload URL: `http://github-bot.nodejs.org:3333/hooks/github`
* Content type: `application/json`
* Secret: can be obtained in the https://github.com/nodejs/secrets repository,
  or ask someone from the build working group to add the webhook for you.
* In "Which events would you like to trigger this webhook?", select "Let me
  select individual events.", check "Push" and "Pull Request".
* Finally, check "Active" and save the webhook. GitHub will send a test
  payload to the bot, if it comes back green, the bot is set up with the
  repository.

### Step 4: update the bot

Open a pull request to https://github.com/nodejs/github-bot, adding the
repository to the `enabledRepos` in
https://github.com/nodejs/github-bot/blob/master/scripts/display-travis-status.js,
so the bot will not ignore the events from your repository and start sending
updates.

### How it works

The bot works like this:

1. When a pull request is opened or updated, GitHub will send an event to both
  Travis (configured in step 1) and the bot (step 3).
2. Travis will start the build, and the bot will start polling Travis
  for build status (this requires step 4 otherwise the bot would ignore the
  event).
3. When the bot finds the build matching the last commit in the PR, it
  will update the build status of that PR as "pending" (this update requires
  step 2).
4. When a poll comes back as a successful build, the bot will update the
  build status as "success".

### Aside

If the transferred project is used across different platforms, consider
transferring the testing to the Node.js build infrastructure as well, so that
it can be tested across the platforms supported by Node.js. Open an issue in
https://github.com/nodejs/build for help getting the transfer done.
