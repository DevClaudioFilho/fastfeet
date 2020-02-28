import * as Yup from 'yup';
import {parseISO, format} from "date-fns"
import pt from "date-fns/locale/pt"

import Package from '../models/Package';
import Recipient from '../models/Recipient'
import Deliveryman from '../models/Deliveryman'
import Notification from '../schemas/Notification'

class PackageControlller {

  async index(req,res) {
    const response = await Package.findAll()

    return res.json(response)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .required(),
      deliveryman_id: Yup.number()
      .required(),
      product: Yup.string()
      .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { recipient_id, deliveryman_id, product} = req.body;

    const date = new Date()


    const checkDeliveryman = await Deliveryman.findByPk(deliveryman_id)

    if (!checkDeliveryman){
      return res.json({error:"Delivery not exist"})
    }

    const checkRecipient = await Recipient.findByPk(recipient_id)

    if (!checkRecipient){
      return res.json({error:"Recipient not exist"})
    }

    const { name } = checkDeliveryman;

    const formattedDate = format(date,
      "'dia ' dd 'de ' MMMM ', às ' H:mm'h' ",
      {locale: pt})

    await Notification.create({
      content: `${name} o produto ${product} foi cadastrado no sitema dia ${formattedDate} pronto para a retirada`,
      user: deliveryman_id,
    });

    const response = await Package.create(req.body)

    return res.json(response);

  }

  async update(req,res){
    const schema = Yup.object().shape({
      product:Yup.string(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params
    const pack = await Package.findByPk(id);

    if(!pack){
      return res.json({error:"package not exist"})
    }

    const {deliveryman_id,recipient_id} = req.body

    const checkDeliveryman = await Deliveryman.findByPk(deliveryman_id)

    if (!checkDeliveryman){
      return res.json({error:"Delivery not exist"})
    }

    const checkRecipient = await Recipient.findByPk(recipient_id)

    if (!checkRecipient){
      return res.json({error:"Recipient not exist"})
    }

    const response = await pack.update(req.body)

    return res.json(response)
  }

  async find(req,res){
    const { id } = req.params
    const pack = await Package.findByPk(id);

    if (!pack) {
      return res.status(401).json({ error: 'Package not exist' });
    }

    return res.json(pack)
  }
  async delete(req,res){
    const { id } = req.params
    const pack = await Package.findByPk(id);

    if (!pack) {
      return res.status(401).json({ error: 'Package not exist' });
    }

    await pack.destroy()

    return res.json(pack)
  }
}
export default new PackageControlller();
