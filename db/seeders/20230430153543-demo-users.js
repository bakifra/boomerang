"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataUsers = [
      {
        name: "SuperCheater",
        points: 10500,
      },
      {
        name: "Nyan Cat",
        points: 45,
      },
      {
        name: "firstPlayer",
        points: 42,
      },
      {
        name: "winner3000",
        points: 3000,
      },
    ];
    const users = dataUsers.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users',users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
