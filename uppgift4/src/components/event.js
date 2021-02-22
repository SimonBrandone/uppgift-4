import React from 'react';
import { useHistory } from 'react-router-dom';

function Event({ event }) {
    const history = useHistory();

    return (
        <article class="event" onClick={() => history.push(`/info/${event.id}`) }>
                <section class="ticket">
                    <div className="box">
                    <h5>{event.date}</h5>
                    </div>
                    <div className="text">
                    <h2>{event.name}</h2>
                    <h6>{event.place}</h6>
                    <h4>{event.time}</h4>
                    <h3>{event.price}</h3>
                    </div>
                </section>
        </article>
    )
}

export default Event;