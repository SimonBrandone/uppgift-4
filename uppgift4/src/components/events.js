import React, { useState, useEffect } from 'react';
import concertsFromAsset from '../assets/concerts.json';
import '../App.css';
import Event from './event'

function Tickets() {
    const [events, setEvent] = useState([]);

    useEffect(() => {
        setEvent(concertsFromAsset);
    }, [])

    return (
        <section class="library">
            <h1 className="event-h1">Events</h1>
            <div class="wrapper">
                <main class="wrapper-tickets">
                    { events.map((event, index) => {
                        return <Event event={ event } key={ index } />
                    })}
                </main>
            </div>
        </section>
    )
}

export default Tickets;