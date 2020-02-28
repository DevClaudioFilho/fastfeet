import Sequelize, { Model } from 'sequelize';


class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        estate: Sequelize.STRING,
        town: Sequelize.STRING,
        cep: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Recipient;
