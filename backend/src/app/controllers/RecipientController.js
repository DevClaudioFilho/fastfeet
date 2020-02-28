import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {

  async index(req,res) {
    const recipients = await Recipient.findAll()

    return res.json(recipients)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required(),
      street: Yup.string()
        .required(),
      number: Yup.number()
        .required(),
      complement: Yup.string()
        .required(),
      estate: Yup.string()
        .required(),
      town: Yup.string()
        .required(),
      cep: Yup.number()
        .required(),


    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { name } = req.body;
    const recipient = await Recipient.findOne({ where: { name } });
    if (recipient) {
      return res.status(401).json({ error: 'Recipient alredy exist' });
    }
    const response = await Recipient.create(req.body)

    return res.json(response);
  }

  async update(req,res){
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      estate: Yup.string(),
      town: Yup.string(),
      cep: Yup.number()


    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params
    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not exist' });
    }

    const response = await recipient.update(req.body)

    return res.json(response)
  }

  async find(req,res){
    const { id } = req.params
    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not exist' });
    }

    return res.json(recipient)
  }

  async delete(req,res){
    const { id } = req.params
    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not exist' });
    }

    await recipient.destroy()

    return res.json(recipient)
  }
}
export default new RecipientController();
