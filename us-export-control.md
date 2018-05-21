# US export control process

The United States imposes some controls over the export of cryptography.
These controls include special allowances for open source software like Node.js.

Best practice based on advice from the Node.js Foundation is to
follow the "Technology and Software-Unrestricted" (TSU) licensing exception
procedures. These procedures require the following:

* Sending notification emails listing the locations
  of our repositories that contain cryptographic software.
* Validating that our licenses are OSI-approved.
* Ensuring the software is generally available to any
  member of the public by posting it on a public Internet location.
* Reviewing our repositories for binaries. If binaries contain
  cryptography then the corresponding source must be available in the
  repository as well.

For complete details on the exception refer to
[CFR-2012-title15-vol2-sec740-13.pdf](https://www.gpo.gov/fdsys/pkg/CFR-2012-title15-vol2/pdf/CFR-2012-title15-vol2-sec740-13.pdf).

## Notification Emails 

Notification emails must be sent listing the locations which contain
cryptography. Since we regularly create additional copies of the
node core repository (which contains cryptography) we will list the
location of the [organization](https://github.com/nodejs)
as opposed to any specific repository. In addition, we will list
the website location as it hosts the Node.js binaries.

In order to meet the archival requirements of the (TSU) licensing exception
(5 years past the last date where the repository contained cryptographic
software), the foundation will provide an email account that will be
used to send the notifications. In addition, the Foundation executive
director will ensure that the archival requirements are met.

This email address will be `crypto-exports@nodejs.org`.

All notifications will be sent from this address.  All
mail sent to this address will be forwarded to the following:

* tsc@iojs.org, 
* the TSC director representative, and
* the Foundation executive director.

As part of the notification emails, we must list a primary and secondary
contact. The primary contact will be the Foundation executive director
and the secondary the TSC director representative. These two individuals
were selected as they are representatives of the Foundation either as
a board member or as an executive of the Foundation.

An example of the email would be:

```
TO: crypt@bis.doc.gov, enc@nsa.gov
CC: crypto-exports@nodejs.org
SUBJ: TSU NOTIFICATION - Encryption 
SUBMISSION TYPE: TSU
SUBMITTED BY: Foundation member sending email
SUBMITTED FOR: Node.js.org project
POINT OF CONTACT: Mark Hinkle, Myles Borins TELEPHONE: Marks #, Myles #
FAX: N/A
MANUFACTURER(S): Node.js
.ECCN: 5D002
INTERNET LOCATION(S): https://nodejs.org/en/ and https://github.com/nodejs 
```

## License validation

In order to use the "Technology and Software-Unrestricted" (TSU)
licensing exception, all licenses must be OSI-approved.

All new repositories which are brought under the Node.js organization
will be validated to ensure they include an OSI compliant license
before being accepted.

PENDING: Will we solicit volunteers review the licenses in the
existing repositories, and if not completed by Dec 2018 we
will ask the Foundation to hire a contractor to complete the review.

## General Availability

In order to use the "Technology and Software-Unrestricted" (TSU)
licensing exception, all of the sofware must be generally available to any
member of the public by posting it on a public Internet location.

We meet this requirement by hosting all of the software in github and/or
nodejs.org which does not restrict access.

## Object Code

In order to use the "Technology and Software-Unrestricted" (TSU)
licensing exception, the source code for any object code that
contains cryptography by be available.

For the Node.js binary downloads, this is covered by making all
of the source available through the GitHub repositories.

PENDING: We will solicit volunteers to:
* Create tooling to crawl through the github
  repositories and node.js to look for binaries.
* Review the list of binaries and identify if they contain 
  source code.
* For binaries that include cryptography, validate that the
  corresponding source code is also provided.
  If it is not, either add the source code or remove the binaries.
* Put a process in place that scans on a regular basis for
  new binaries so that they can be reviewed.

If this is not completed by Dec 2018 we will ask the Foundation
to hire a contractor to complete these steps.
