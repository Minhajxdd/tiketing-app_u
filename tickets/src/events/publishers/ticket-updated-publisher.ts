import { Publisher, Subjects, TicketCreatedEvent, TicketUpdatedEvent } from "@tkgtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

