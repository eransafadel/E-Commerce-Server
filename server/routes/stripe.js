const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {  

  const customer  = await stripe.customers.list();
  console.log("customer:" + customer);


  const charge = await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr,stripeRes)=>{
      if(stripeErr)
      {
        console.log("no");
        res.status(500).json(stripeErr);
      }
      else{
        console.log("yes");
        res.status(200).json(stripeRes);
      }
    }
  );

}

);

module.exports = router