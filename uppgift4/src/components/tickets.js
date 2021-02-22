import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import concertsFromAsset from '../assets/concerts.json';
import { useHistory } from 'react-router-dom';


function Tickets() {
    const { id } = useParams();
    const history = useHistory();
    const [event , setEvent] = useState({});
    console.log('useParams: ', id);

    useEffect(() => {
        console.log('events ', concertsFromAsset);
        const foundEvent = concertsFromAsset.filter((eventObj) => {
            return eventObj.id === parseInt(id);
        });

        console.log(foundEvent);
        setEvent(foundEvent[0]);
    }, [])

    return (
        <main class="concert">
            <div class="book-info">
                <header>
                    <a href="#" class="back" onClick={ () => history.push('/') }>Back</a>
                </header>
                <section class="display-text">
                    <span className="buy-span">
                         You are about to score some tickets to
                    </span>
                </section>
                <section class="info">
                    <h1 className="info-h1">{ event.name }</h1>
                    <span className="time-date">{ event.date } { event.time }</span>
                    <p><b>@</b> { event.place }</p>
                    <footer className="price-footer">
                    <span className="price-text">{ event.price }</span>
                    </footer>
                </section>
                <div className="button-div">
                    <button className="order-btn" onClick={() => history.push(`/buy/${event.id}`) }>Beställ</button>
                </div>
            </div>
        </main>
    )
}

export default Tickets;