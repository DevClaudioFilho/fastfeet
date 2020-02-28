import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';

class DeliverymanControlller {

  async index(req,res) {
    const deliveryman = await Deliveryman.findAll()

    return res.json(deliveryman)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required(),
      email: Yup.string()
      .email()
      .required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email } = req.body;

    const checkDeliveryman = await Deliveryman.findOne({ where: { email } });

    if (checkDeliveryman) {
      res.status(400).json({ error: 'Deliveryman already exist ' });
    }

    const response = await Deliveryman.create(req.body)

    return res.json(response);
  }

  async update(req,res){
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
      .email()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params
    const deliveryman = await Deliveryman.findByPk(id);

    if(!deliveryman){
      return res.json({error:"deliveryman not exist"})
    }

    const response = await deliveryman.update(req.body)

    return res.json(response)
  }
  async find(req,res){
    const { id } = req.params
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not exist' });
    }

    return res.json(deliveryman)
  }
  async delete(req,res){
    const { id } = req.params
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not exist' });
    }

    await deliveryman.destroy()

    return res.json(deliveryman)
  }
}
export default new DeliverymanControlller();
