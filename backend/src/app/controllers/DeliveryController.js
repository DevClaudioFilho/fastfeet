import * as Yup from 'yup';

import Package from '../models/Package';

class DeliveryController {
  async index(req,res){
    const { page = 1 } = req.query;
    const delivery = await Package.findAll({
      where: {
        deliveryman_id: req.params.deliverymanID,
        canceled_at: null,
        end_date:null,
      },
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id','recipient_id','product'],
    });
    return res.json(delivery);
  }
  async store(req,res){
    const {id} = req.params

    const delivery = await Package.findByPk(id)

    if(!delivery){
      return res.json(id)
    }

    const date = new Date();
    const hours = date.getHours();

    if(delivery.start_date === null ){

      if(8 <= hours > 17){
        return res.json({error: "Retiradas só podem ser efetuadas entre 8h as 17h"})
      }

     delivery.start_date = date

     const startdate = delivery.start_date

     const response = await delivery.update(startdate)

     return res.json(response)
    }

    return res.json({error:"You alredy start this delivery"})
  }
  async update(req,res){
    const schema = Yup.object().shape({
      signature_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {signature_id} = req.body

    if(!signature_id){
      return res.json({error:'You need have the signature to finish delivery'})
    }
    const {id} = req.params

    const delivery = await Package.findByPk(id)

    if(!delivery){
      return res.json(id)
    }

    const date = new Date();



    if(delivery.end_date === null ){

      delivery.end_date = date

      const enddate = delivery.start_date
      const bodyresponse = req.body

      const response = await delivery.update(bodyresponse,enddate)


     return res.json(response)
    }

    return res.json({error:"You alredy end this delivery"})
  }
}
export default new DeliveryController();
