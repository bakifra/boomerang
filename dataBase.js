const { User } = require('./db/models' );

const findUser = async () => {
  try {
    const users = await User.findAll({raw: true, where: { id: 1 }});
    console.log(users);
  } catch ({ message }) {
    console.log (message);
  }
};

findUser();


