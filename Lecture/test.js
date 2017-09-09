const bcrypt = require('bcryptjs');
bcrypt.hashSync(password, bcrypt.genSaltSync(8));
bcrypt.compareSync(password, this.password);