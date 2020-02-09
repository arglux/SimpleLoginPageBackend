function Database(title) {
  this.title = title;
  this.content = {};

  this.insert = function(entry) {
    // inserts user object into database when registering

    let user = entry.name;

    // build user object
    this.content[user] = {
      username: entry.name,
      password: entry.password,
      email: entry.email,
      loggedIn: false,
    };

    let message = `Success! User: ${entry.name} has been added to database.`;

    return message;
  };

  this.authenticate = function(entry) {
    // aunthenticates user when logging in

    let registeredUser = this.has(entry);

    if (registeredUser != null) {
      registeredUser['loggedIn'] = true;
      return registeredUser;
    }

    else {
      let message = `Error! Please check username and password.`
      // console.log('registered user:', registeredUser);
      // console.log('entry:', entry)
      return message;
    };
  };

  this.has = function(entry) {
    // checks that database has this user
    // returns the user object

    let user = entry.name;

    if (user in this.content) {
      return this.content[user];
    }

    else {
      return null;
    };

  };
};

// exports
exports.Database = Database;
