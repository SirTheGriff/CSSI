**FSJS Project**

This is a redo of my company's website, and
will be ongoing as I add more pages and activate more links.

Instructions:

I am running Mongo locally - http://localhost:2424

**CRUD**

_Create_

Click on Downloads in the header and the Register button. All fields are required and will create a profile.

_Read/List_ - (I advise to view this last, as "edit/delete" is easily accessible after registering.)

Click on the User List link in the header. This will show all users in the database, showing only First Name and Company.
Clicking the "details" button will show the rest of the profile to the right.

_Edit_

Once a profile is created and submitted, a profile page will show and the user is able to edit or delete it.
I am working on sessions and authentication so that one can come back to this page if clicked elsewhere.
Right now you have to put the id in the url to edit/delete profile.

_Delete_

Similar to Edit above, once a profile is registered is the option to delete the profile completely.
This will be better served via sessions/authentication, as right now you can only access by pasting the id in the url.



`Working on adding:`
* user authentication and middleware - login from downloads page
* overall styling
* downloadable PDF's in whitepapers page
* contact us page post route
* improving user experience




