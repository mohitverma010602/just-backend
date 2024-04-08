import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      //one who is subscribing
      typeof: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      //the one who is being subscribed
      typeof: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
