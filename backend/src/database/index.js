import Sequelize from 'sequelize';
import mongoose from 'mongoose';


import databaseConfig from '../config/database'

import User from "../app/models/User"
import Recipient from "../app/models/Recipient"
import Deliveryman from "../app/models/Deliveryman"
import File from "../app/models/File"
import Package from "../app/models/Package"
import DeliveryProblems from "../app/models/DeliveryProblems"


const models = [User, Recipient,Deliveryman, File,Package,DeliveryProblems];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
    mongo() {
      this.mongoConection = mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
  }
}
export default new Database();
