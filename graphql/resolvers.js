const Stripe = require("stripe");
require("dotenv").config({ path: "./variables.env" });

const stripe = new Stripe(process.env.STRIPE_KEY);

const resolvers = {
  Query: {
    queryRoot: () => "Connected.",
  },
  Mutation: {
    processPayment: async (_, { input }) => {
      const { id, amount } = input;
      try {
        const paymentInfo = await stripe.paymentIntents.create({
          amount,
          currency: "USD",
          description: "Triumph Speed Triple 1200 RS",
          payment_method: id,
          confirm: true,
        });
      } catch (error) {
        console.log(error.raw.message);
        throw new Error(error.raw.message);
      }
      return "Thank you for your purchase.";
    },
  },
};

module.exports = resolvers;
