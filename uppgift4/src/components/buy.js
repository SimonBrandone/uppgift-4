import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import concertsFromAsset from '../assets/concerts.json';
import { useHistory } from 'react-router-dom';


function Buy() {
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
                    <span className="bought-span">
                         Tack för din beställning
                    </span>
                </section>
                <div className="receipt-wrapper">
                <section class="receipt">
                    <label>WHAT
                    <div className="what">
                            <span className="rec-name">{ event.name }</span>
                    </div>
                    </label>
                    <label>WHERE 
                    <div className="where">
                            <span className="rec-place">{ event.place }</span>
                    </div>
                    </label>
                    <div className="bot-rec">
                    <label>WHEN
                        <div className="when">
                                <span className="rec-date">{ event.date }</span>
                        </div>
                        </label>
                        <label>FROM
                        <div className="from">
                                <span className="rec-time-start">{ event.from }</span>
                        </div>
                        </label>
                        <label>TO
                        <div className="to">
                            <span className="rec-time-end">{ event.to }</span>
                        </div>
                        </label>
                    </div>
                </section>
                </div>
            </div>
        </main>
    )
}

export default Buy;