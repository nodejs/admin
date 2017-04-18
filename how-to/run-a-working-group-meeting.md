How to run a Node.js Working Group Meeting
================================================================================

This document describes one way to run a Node.js Working Group meeting.  It is
not meant to be **THE** way to run a meeting, just an example.


Overview
================================================================================

A working group meeting will be run at Google Hangouts as a "Hangouts on Air"
event.  If you have a non-personal (eg, business) account with Google Apps, you
will probably be able to host more people at the hangout than with a personal
account.  Typically this means 15 people online concurrently, instead of 10.
So, you probably want to use your non-personal account, if you have one.

A Google Hangout on Air will result in the creation of a YouTube movie for
future reference.


Before the meeting
--------------------------------------------------------------------------------

The following things should occur before the meeting:

* create a GitHub issue to announce the meeting

  Create a GitHub issue in the working group's repo.  This issue will be the
  primary placeholder for all the associated links to the meeting artifacts.  An
  example is
  [issue #11 at the API WG repo](https://github.com/nodejs/api/issues/11).

  Note that the initial comment should contain all the links to the artifacts,
  and is editable after you create it.  As you will probably add this link as a
  back pointer in the artifacts you are creating (Hangout, GDoc, etc), you
  should go ahead and create this first.  As you add the additional artifacts,
  you can edit the page to add links to them.

  The title of the article should eventually contain the date of the actual
  meeting, but since you don't know that yet, you can leave it more general,
  like just the year/month.

  Assuming the working group has a GitHub "team" associated with it, you should
  reference the team with `@node/team-name` in the issue, so that all team
  members are notified of the meeting.  This is the only notification currently
  used, as there doesn't seem to be any other easy way to do this.

* create a Doodle to let people pick the meeting date

  The [Doodle service](http://doodle.com/) allows you to create a set of
  proposed dates/times for a meeting, and then allow folks to add an entry for
  themselves indicating their availability.  As folks add their availabilities,
  Doodle will show them on a table of green/red entries (available/not
  available), and highlight the date/time with the most availability.

  Doodle is currently a free service.  

  When creating the Doodle, add a link to the GitHub issue in the description.

  You should create the Doodle with up to two weeks of weekday dates (10 days),
  and times appropriate for the audience.  The API Working Group currently
  creates time slots from 11AM Eastern to 8PM Eastern.

* create a Google Doc to set up agenda, allow for meeting minutes to be taken

  The Google Doc will initially be used to set the initial agenda items, and can
  be used during the meeting to track minutes.  An example is
  [Node.js API WG Agenda and Meeting Minutes 2015-11-19](https://docs.google.com/document/d/1gyz0yaKtOW97bPcXOG2mgzpKy5LxFKWezWSzxc_-YQA/edit).

* create a Google Hangout on Air Event

  A description of how to create a Google Hangouts On Air event is available
  in the nodejs/node GitHub wiki as document
  [Meetings: Creating a Hangouts On Air Event](https://github.com/nodejs/node/wiki/Meetings:-Creating-a-Hangouts-On-Air-Event).


During the meeting
--------------------------------------------------------------------------------

You probably want to watch some Working Group meetings to see the flow of the
meetings, to decide how it should actually run.  Typically the following will
happen:

* introduction of people present

  Even if everyone already knows everyone, it's nice for everyone to at least
  say their name, to make it easier to figure out who attended after the fact,
  when reviewing the YouTube movie of the Hangout.

* brief review of the agenda items

* in-depth review of agenda items

* listing of new action items


After the meeting
--------------------------------------------------------------------------------

The minutes for the meeting should be added as a markdown file in the
GitHub repo.  This file should contain all the relevant information from the
GitHub issue, as well as:

* list of attendees
* agenda
* minutes
* summary

An example is the
[November 19th 2015 - Node.js API WG Meeting](https://github.com/nodejs/api/blob/master/wg-meetings/2015-11-19.md).
