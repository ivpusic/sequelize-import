sequelize-import
================

Importing ``sequelize`` modules with ease.

### Installation
```
npm install sequelize-import
```

### How to use?

Let we say we have following directory structure:

```
/path/to/models
├── Contacts
│   └── Contact.js
└── User.js
```

If you want to include all defined models inside ``/path/to/models`` directory you can use following:

```
var models = require('sequelize-import')('/path/to/models', sequelize_connection);
```

Model definitions inside ``*.js`` files can be something like this:
```
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('User', {
		email: DataTypes.STRING,
		password: DataTypes.STRING
	});
};
```

Now you can access to ``Contact`` and ``User`` models in this way:
```
models.User
models.Contacts.Contact
```

Note that ``sequelize-import`` will recursively search for ``*.js`` files inside provided directory.

With this you can separate models definitions into multiple files, and then load it into some central place, then define relations between models, etc..
