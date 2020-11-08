import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React from "react"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const handleCheckout = async () => {
    const response = await fetch("/.netlify/functions/checkout", {
      method: "post",
    })
    const data = await response.json()
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "aslam bhai",
          address: "lolll noorani kabab house",
        },
      },
    })
    console.log(result)
  }

  return (
    <div>
      Checkout Form
      <CardElement />
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default CheckoutForm
