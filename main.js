const button = document.querySelector('button')
const eventList = document.querySelector('ul')

// Open the persistent connection to the local server
const host = 'http://localhost:3000/events'
const es = new EventSource(host)

// The connection event
es.onopen = () => { console.log('The connection has been established.') }

// The new incoming event
es.onmessage = (event) => {
    console.log(event.data)
    const { emittedNumber, convertedNumber } = JSON.parse(event.data)
    document.querySelector('#content').innerHTML = `The conversion of ${emittedNumber} is ${convertedNumber}`;
}

// The connection failure event
es.onerror = () => { console.log('The connection has failed.') }

// Close the connection
button.onclick = () => {
    console.log('The connection has been closed.')
    es.close()
}