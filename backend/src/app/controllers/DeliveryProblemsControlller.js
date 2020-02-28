import * as Yup from 'yup';

import DeliveryProblems from '../models/DeliveryProblems';
import Packages from '../models/Package'

class DeliveryProblemsControlller {

  async store(req, res){
    const schema = Yup.object().shape({
      description: Yup.string()
        .required(),
      delivery_id:Yup.number()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {deliveryID} = req.params

    const checkDelivery = await Packages.findByPk(deliveryID)

    if(!checkDelivery){
      return res.json({error:"Delivery not exist"})
    }

    const response = await DeliveryProblems.create(checkDelivery,req.body)



    return res.json(response)

  }

}
export default new DeliveryProblemsControlller();
