## FSJS Project

This is a redo of my company's website, and
will be an ongoing project as I add more pages and activate more links.

Instructions:

* I am running Mongo on my local machine.
* Server is hosted at: localhost:2424
* npm install
* run application = node app.js

NPM Packages:
* body-parser
* ejs
* express
* express-session
* method-override
* mongoose
* mongoose-type-email
* mongoose-type-url
* passport
* passport-local
* passport-local-mongoose

### CRUD

_NOTE:_ Please see the "listusers" page for front end rendering and the Read/List piece of CRUD. The AJAX call is on this page only.
The rest of the site is rendered pages via routes. I advise to view the User List link last, as the Edit/Delete pieces are best seen right after registering/submitting the form.

Also, I don't have data pre-loaded in the database. You'll need to create one or more fake profiles to see the User List page features (shows all users).


### Create

Click on the Downloads link in the header and then the Register button below the login box. It will send you to a register form. All fields are required and will create a profile.

### Read/List

(I advise to view this part last, as the "edit/delete" parts are easily accessible after registering.)

Click on the User List link in the header. This will show all users in the database, showing only First Name and Company.
Clicking the "details" button will show the rest of the profile to the right. This is the AJAX portion of the project.

### Edit

Once a profile is created and submitted, a profile page will show the recently entered contents. From here the user is able to edit or delete it.
I am working on sessions and authentication so that one can come back to this page if clicked elsewhere.
Right now you have to put the id in the url after /profile or /loggedin to edit/delete the profile if you click on another page.

### Delete

Similar to Edit above, once a profile is created there is the option to delete the profile completely.
This route will be better served via sessions/authentication, as right now you can only access by pasting the id in the url after /loggedin.



****Future Additions:****
* user authentication and middleware - login from downloads page
* link both "customerProfile" and "User" schemas to one ID
* overall styling
* downloadable PDF's in whitepapers page
* contact us page post route
* better user experience (ex. a warning before deleting the profile)




