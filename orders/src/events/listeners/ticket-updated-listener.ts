import { Listener, Subjects, TicketUpdatedEvent } from "@tkgtickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/tickets";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

  queueGroupName: string = queueGroupName;

  async onMessage(
    data: {
      id: string;
      version: number;
      title: string;
      price: number;
      userId: string;
    },
    msg: Message
  ): Promise<void> {

    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    const { title, price } = data;

    ticket.set({ title, price });

    await ticket.save();

    msg.ack();
  }
}
