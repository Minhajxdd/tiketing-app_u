import {
  Listener,
  OrderCreatedEvent,
  OrderStatus,
  Subjects,
} from "@tkgtickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName: string = queueGroupName;

  async onMessage(
    data: {
      id: string;
      version: number;
      status: OrderStatus;
      userId: string;
      expiresAt: string;
      ticket: { id: string; price: number };
    },
    msg: Message
  ): Promise<void> {
    const order = Order.build({
      id: data.id,
      price: data.ticket.price,
      status: data.status,
      userId: data.userId,
      version: data.version,
    });

    await order.save();

    msg.ack();
  }
}
