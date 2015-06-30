 Meteor.startup(function () {
     if (Meteor.users.find().count() === 0) {
         Accounts.createUser({
             username: 'admin',
             email: 'admin@admin.fr',
             password: 'admin',
             profile: {
                 role: 'admin'
             }
         });
     }
 });