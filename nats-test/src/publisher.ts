import nats from 'node-nats-streaming';
import { TicketCreatePublisher } from './events/ticket-created-publisher';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
});

stan.on('connect', async () => {
    console.log('publisher connected to nats');

    const publisher = new TicketCreatePublisher(stan);

    await publisher.publish({
        id: 'da',
        title: 'lkfdj',
        price: 20
    })


    // const data = JSON.stringify({
    //     id: '123',
    //     title: 'concert',
    //     price: 20
    // });

    // stan.publish('ticket:created', data, () => {
    //     console.log('Event published')
    // })

});