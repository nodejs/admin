## Purpose

To establish and administer a fund for members of the Node.js
Foundation to travel and spread knowledge about and support the foundation
and the Node.js Foundation projects.

## Restrictions

* Candidates must be an individual member of the Node.js Foundation. The membership
  status can be checked on [the foundation website][].
* Requester must indicate that they do not have funding available from another source,
  such as an employer willing to cover the costs or the event covering costs
  for presenters or others.

## Process

Requests must be made prior to the start of travel.
Requests submitted after travel has started will not be approved.

Review of requests will take at least 72 hours and may take considerably longer.
Approval is not guaranteed. If a request is rejected, reimbursement will not be
issued. It is strongly recommended that you submit your request far enough in
advance to get approval before making relevant expenditures.

If you need a visa for the country in which the Node.js event you are attending
is being held, see the document on [preparing for a visa application](./travel-visas.md).

### Request

* Open a pull request which adds an entry to the table at the bottom of this
  file.
 * Include the name of the event you plan to attend.
 * Include the location of the event and where you will be traveling from.
 * Include the presentation you intend to give, if applicable.
 * Include the size of the stipend you wish to receive.
   * Reimbursement stipends are expected to vary with travel distance.
   * In the PR description, mention `@nodejs/tsc` and
     `@nodejs/community-committee`.
* Once the final amount spent is known, update the table again with that
  information.

### Approval

A request is approved when all of the following criteria are met:

* The pull request has been open for at least 72 hours.
* The request has approval from at least two members of @nodejs/tsc and two
  members of @nodejs/community-committee. (People who are members of both
  committees may only be counted for one or the other. Therefore, any request
  will always require at least four approvals.)
* No members of either @nodejs/tsc or @nodejs/community-committee have objected
  to the request.
* The pull request has been merged. Any member may merge once other
  prerequisites have been met.

If a request is blocked by an objection from a member of @nodejs/tsc or
@nodejs/community-committee, then the only way for the request to be approved is
for that committee to decide to approve the request using whatever
decision-making process the  committee uses when consensus is not reached. (For
example, for the TSC, there is a voting process to make decisions when consensus
cannot be reached.)

An appointed treasurer from either the @nodejs/tsc or @nodejs/community-committee
(or both) will liaise with a member of the Node.js Foundation on a regular basis
to review the status of the travel fund. In the event that any pending requests
might not be approved because of available funds, a separate issue will be raised.
Generally speaking, however, members shouldn't need to worry about the status
of the fund itself.

As examples, purpose of prior sponsored travels include attending TC39 meetings,
attending [Node.js collaboration summits][], and mentoring [Code and Learn][].

#### Considerations for approval of a request

##### Impact

* Preference given to events hosted or sponsored by the Node.js
  Foundation. For example, [Node.js collaboration summits][]
  and Diagnostics summits should be given precedence because they bring together
  members of the organization to help the foundation projects make progress.
* Preference given to speakers and panelists of a conference. Speaking and doing panels
  at a conference generate a more significant impact than attending. However, individuals
  applying for the travel fund to speak or participate in panels should confirm that
  the event organizers cannot cover the travel expenses before submitting a request.

##### Outreach

* Preference given to underserved communities. More specifically,
  within a subject the foundation is trying to promote awareness about (e.g.
  general knowledge about the foundation) there are people, communities, and
  geographies where that knowledge is not very widespread. This is where
  preference will be given. For instance, an event in San Francisco would be
  less attractive than an event of the same size in Kansas City.

##### Cost

The larger the stipend the more critically the travel fund admins will
consider the application. The budget for this program is a finite resource.

##### Equity

Preference given to individuals who cannot receive travel funding from their
employers or individuals who have not previously received a stipend.

### Reimbursement

Once the request has been approved, you must:

1. Provide receipts as attachments in an email stating your name, the participation covered,
and the total approved for reimbursement.
2. Fill out and attach the [Expense Report](./expense-report-template.xls?raw=true).
3. Email this reimbursement request to travelapprovals@nodejs.org.
4. Expense reports must be submitted within 30 days of event date. Any reports submitted after 30 days may not be reimbursed.
5. Disbursements are generally processed within 30 days. 

Due to privacy, the Individual Members list is not public. This team will verify the
requester is on the Individual Members list before funds are disbursed. The community manager or a member of the Node.js Foundation team within the Linux Foundation will report back amounts consumed from the travel allocation on a monthly basis to the Chairs.

First Name	|	Last Name	|	Event	|	Reason	|	Location	|	Travel Dates	|	Amount Requested:	|	Pull Request date	|	Pull Request link	|	Date Expense report sent	|	Amount of Expense Report	|	Date Sent to Finance	|	Date approved through Bill.com	|	Bill.com Amount approved for reimbusement
----------	|	---------	|	------	|	---------------------	|	--------	|	----	|	-----------------	|	-----------------	|	------------------------	|	------------------------	|	--------------------	|	----------------------	|	--------------------	|	-----------------------------------------
Anna	|	Henningsen	|	JS Interactive/Node.js Collaborator Summit/Code & Learn	|	Attendance, Collaborate and Code & Learn	|	Vancouver, BC, CAN	|	10Oct -12Oct, 2018	|	US$1360	|	21Jul 2018	|	https://github.com/nodejs/admin/pull/186	|	Yes	|	US$1400	|	30Jul 2018	|	30Jul 2018	|	US$1400
Guy 	|	Bedford	|	JS Interactive/Node.js Collaborator Summit/Code & Learn	|	Attendance & Collaboration	|	Vancouver, BC, CAN	|	10Oct 10-12Oct 2018	|	US$2040	|	25Jul 2018	|	https://github.com/nodejs/admin/pull/193	|	Yes	|	US$2040.24	|	24Jul 2018	|		|	US$2040.24
Richard	|	Trott	|	JS Interactive/Node.js Collaborator Summit/Code & Learn	|	Facilitate Code & Learn 	|	Vancouver, BC, CAN	|	10Oct - 12Oct 2018	|	US$1270.76	|	9Jul 2018	|	https://github.com/nodejs/admin/pull/176	|	Yes	|	US$380.76	| 25Jul 2018 - Airfare only	|	30Jul 2018	|	US$380.76
Joyee	|	Cheung	|	Diagnostics WG Summit	|	Attendance	|	Ottawa, ON, CA	|	12 Feb - 13 Feb 2018	|	US$1650	|	16Feb 2018	|	https://github.com/nodejs/admin/pull/65	|	26Feb 2018	|	US$1604	|	26Feb 2018	|	26Feb 2018	|	US$1604
Mihai 	|	Ene-Pietrosanu	|	Index 2018	|	Collaborator & learn	|	Portland, OR, US	|	20 Feb 2018	|	US$283	|	5Feb 2018	|	https://github.com/nodejs/admin/pull/60	|	28Feb 2018	|	US$283	|	28Feb 2018	|	28Feb 2018	|	US$283
Richard	|	Trott	|	Collab summit Spring 2018	|	Attendance (Code + Learn too, if it's happening)	|	Berlin, Germany	|	31May - 3Jun 2018	|	US$919.98	|	12Mar 2018	|	https://github.com/nodejs/admin/pull/92	|	31Mar 2018	|	US$919.98	|	31Mar 2018	|	31Mar 2018	|	US$919.98
Benjamin	|	Zaslavsky	|	Collab Summit Spring 2018	|	Attendance - Inclusivity Initiative	|	Berlin, Germany	|	31May - 1Jun 2018	|	US$385.59	|	9Mar 2018	|	https://github.com/nodejs/admin/pull/86	|	20Apr 2018	|	US$385.59	|	20Apr 2018	|	20Apr 2018	|	US$385.59
Ben	|	Michel	|	Spring 2018 Collaborator's Summit and Code & Learn	|	Attendance & WG facilitator	|	Berlin, Germany	|	30May - 2Jun 2018	|	US$1618	|	11Apr 2018	|	https://github.com/nodejs/admin/pull/113	|	22May 2018	|	US$1618	|	22May 2018	|	22May 2018	|	US$1618
Rachel 	|	White	|	Collab Summit Spring 2018	|	Attendance & Code & Learn Mentor	|	Berlin, Germany	|	31May - 3Jun 2018	|	US$1400	|	12Mar 2018	|	https://github.com/nodejs/admin/pull/89	|	1Jun 18 & 15Jun 18	|	US$1445	|	1Jun 2018	|	1Jun 2018	|	US$1421.77
Dhruv	|	Jain	|	Collab Summit Berlin 2018	|	Attendance & Code & Learn Mentor	|	Berlin, Germany	|	30May - 3June 2018	|	US$2000	|	3Mar 2018	|	https://github.com/nodejs/admin/pull/82	|	12Jun 2018	|	US$258	|	12Jun 2018	|	12Jun 2018	|	US$258
Manil	|	Chowdhury	|	Spring 2018 Collaborator's Summit	|	Attendance and facilitation	|	Berlin, Germany	|	30May - 2Jun 2018	|	US$1377	|	28Mar 2018	|	https://github.com/nodejs/admin/pull/104	|	11Jun 2018	|	US$1351.2	|	11Jun 2018	|	11Jun 2018	|	US$1351.2
Ujjwal	|	Sharma	|	Collab Summit Spring 2018	|	Attendance & Collaborate	|	Berlin, Germany	|	29May - 3June  2018	|	US$1384	|	17Apr 2018	|	https://github.com/nodejs/admin/pull/120	|	15Jun 2018	|	US$1383.95	|	15Jun 2018	|	15Jun 2018	|	US$1383.95
Manil	|	Chowdhury	|	MSBuild 2018	|	Microsoft <> Node.js Collaboration, CommComm Representation	|	Seattle, WA, USA	|	6May - 10May 2018	|	US$209.4	|	22May 2018	|	https://github.com/nodejs/admin/pull/142	|	15Jun 2018	|	US$221.54	|	15Jun 2018	|	15Jun 2018	|	US$221.54
Agiri 	|	Abraham Jnr	|	JS Interactive/Collab Summit	|	Attendance & Collaborate	|	Vancouver, BC, Cannada	|	10Oct  - 14Oct 2018	|	US$2995	|	22Jun 2018	|	https://github.com/nodejs/admin/pull/157	|	23May 2018	|	US$280	|	23May 2018	|	23May 2018	|	US$280
Dhruv	|	Jain	|	Node Collab Summit & JS Interactive 2018	|	Attendance, Collaborate and Code & Learn	|	Vancouver, BC, Cannada	|	10Oct - 13Oct 2018	|	US$2100	|	15Jun 2018	|	https://github.com/nodejs/admin/pull/163	|	8Jun 2018	|	US$386.8	|	8Jun 2018	|	8Jun 2018	|	US$386.8
Benjamin	|	Gruenbaum	|	Collab Summit Spring 2018	|	Attendance & Code & Learn Mentor	|	Berlin, Germany	|	31May - 3Jun 2018	|	US$400	|		|		|		|		|		|		|	
Hassan	|	Sani	|	Collab Summit Spring 2018	|	Attendance & Code & Learn	|	Berlin, Germany	|	30May - 3Jun 2018	|	US$1000	|	6Aug 2018	|	https://github.com/nodejs/admin/pull/203	|		|		|		|		|	
Richard	|	Littauer	|	Collab Summit Spring 2018	|	Attendance & Collaborate	|	Berlin, Germany	|	31May - 3Jun 2018	|	US$800	|		|		|		|		|		|		|	
Dan	|	Shaw	|	Spring 2018 Collaborator's Summit and Code & Learn	|	Attendance & WG facilitator	|	Berlin, Germany	|	30May - 3Jun 2018	|	US$1500	|		|		|		|		|		|		|	
Ben	|	Michel	|	Node.js at MSBuild 2018	|	Node.js Collaboration & CommComm Representation	|	Seattle Washington, USA	|	6May - 9May 2018	|	US$402	|		|		|		|		|		|		|	
Nicola	|	Del Gobbo	|	Collab Summit Spring 2018	|	Attendance	|	Berlin, Germany	|	30May - 2Jun 2018	|	US$534.47	|		|		|		|		|		|		|	
Gus	|	Caplan	|	TC39 Meeting	|	Attendance	|	Redmond, WA, US	|	 23Jul –  Jul27 2018	|	US$1112.28	|		|		|		|		|		|		|	
Dhruv	|	Jain	|	Node Collab Summit & JS Interactive 2018	|	Attendance, Collaborate and Code & Learn	|	Vancouver BC, CAN	|	10Oct - 13Oct 2018	|	US$2100	|		|		|		|		|		|		|	
Никита	|	Сковорода	|	Collab Summit 2018	|	Attendance & Collaboration	|	Vancouver BC, CAN	|	12Oct - 13Oct 2018	|	US$1500	|		|		|		|		|		|		|	
Hassan Yabagi Sani	|		|	Collab Summit & JS Interactive 2018	|	Code and Learn	|	Vancouver BC, CAN	|	10Oct - 13Oct 2018	|	US$2376	|		|		|		|	US$2741	|		|		|	US$2741
Ahmad	|	Bamieh	|	Collab Summit & JS Interactive 2018	|	Attendance, Collaborate and Code & Learn	|	Vancouver BC, CAN	|	10Oct - 13Oct 2018	|	US$2250	|		|		|		|		|		|		|	
Patricia	|	Realini	|	Node Summit	|	Panel Speaker	|	San Francisco, CA, USA	|	23Jul - 25Jul 2018	|	US$1150	|		|		|		|		|		|		|	
Alejandro	|	Oviedo	|	Collab Summit & JS Interactive 2018	|	Attendance & Collaborate	|	Vancouver, BC, CAN	|	10Oct - 14Oct 2018	|	US$2200	|	1Jul 2018	|	https://github.com/nodejs/admin/pull/174	|		|		|		|		|	
Ujjwal	|	Sharma	|	Collab Summit & JS Interactive 2018	|	Attendance & Collaborate	|	Vacouver BC, CAN	|	9Oct - 14Oct 2018	|	US$2500	|	22Jul 2018	|	https://github.com/nodejs/admin/pull/189	|		|		|		|		|	
Jamie	|	Davis	|	Collab Summit & JS Interactive 2018	|	Attendance & Collaborate	|	Vacouver BC, CAN	|	9Oct - 14Oct 2018	|	US$1175	|	26Jul 2018	|	https://github.com/nodejs/admin/pull/194	|		|		|		|		|	
Tobias	|	Nießen	|	JS Interactive and Collaborator Summi	|	Attendance, Collaborate and Code & Learn	|	Vancouver, British Columbia, Canada	|	9Oct - 14Oct 2018	|	US$2100	|	6Aug 2018	|	https://github.com/nodejs/admin/pull/202	|		|		|		|		|	
Yoshua	|	Wuyt	|	JS Interactive + Collaborator Summit	|	Attendence & Collaborate	|	Vancouver BC, Canada	|	10Oct - Oct13 2018	|	US$1250	|	5Aug 2018	|	https://github.com/nodejs/admin/pull/201	|		|		|		|		|	
Liran	|	Tal	|	JS Interactive	|	Panel speaker	|	Vancouver, Canada	|	9Oct - 14Oct 2018	|	US$550	|	1Aug 2018	|	https://github.com/nodejs/admin/pull/198	|		|		|		|		|	
Adam 	|	Miller	|	JS Interactive + Collaborator Summit	|	Attendance & Collaborate	|	Vancouver BC, Canada	|	9Oct -14Oct 2018	|	US$2115	|	2Aug 2018	|	ammiller@linkedin.com	|		|		|		|		|	
Rachel 	|	White	|	JS Interactive + Collaborator Summit	|	Attendance & Collaborate	|	Vancouver BC, Canada	|	10Oct -13Oct 2018	|	US$2439.86	|	2Aug 2018	|	https://github.com/nodejs/admin/pull/199	|		|		|		|		|	
Agiri 	|	Abraham	|	ConcatenateConf	|	Manning booth	|	Lagos, Nigeria.	|	10Aug - 11Aug 2018	|	US$393	|	29Jul 2018	|	https://github.com/nodejs/admin/pull/195	|		|		|		|		|	
Matheus	|	Marchini	|	JS Interactive and Collaborator Summit	|	Attendance, Collaborate and Code & Learn	|	Vancouver, British Columbia, Canada	|	10Oct - 13Oct 2018	|	US$1200	|	9Aug 2018	|	https://github.com/nodejs/admin/pull/209	|		|		|		|		|	
Trivikram	|	Kamat	|	JS Interactive and Collaborator Summit	|	Attendance, Collaborate and Code & Learn	|	Vancouver BC, Canada	|	9Oct -14Oct 2018	|	US$1000	|	17Jul 2018	|	https://github.com/nodejs/admin/pull/183	|		|		|		|		|	

## 2018 Board of Directors Allocation
The coordinated request from the Technical Steering Committee and the Community Committee for the joint travel fund for 2018 was approved in the amount of $60,000.

[the foundation website]: https://identity.linuxfoundation.org/user/me
[Node.js collaboration summits]: https://github.com/nodejs/summit
[Code and Learn]: https://github.com/nodejs/code-and-learn
