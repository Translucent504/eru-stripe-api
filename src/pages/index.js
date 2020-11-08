import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "../components/CheckoutForm"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISH_KEY)

export default function Home() {
  return (
    <div>
      Hello world!
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
