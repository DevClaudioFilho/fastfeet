module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('deliverymans', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'files',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNUll: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeCollumn('deliverymans', 'avatar_id');
  },
};
