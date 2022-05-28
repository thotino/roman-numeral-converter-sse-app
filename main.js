const button = document.querySelector('button')
const eventList = document.querySelector('ul')

const host = 'http://localhost:3000/events'
const es = new EventSource(host)


es.onopen = () => { console.log('The connection has been established.') }
es.onmessage = (event) => {
    console.log(event.data)
    document.querySelector('#content').innerHTML = event.data;
}
es.onerror = () => { console.log('The connection has failed.') }

button.onclick = () => {
    console.log('The connection has been closed.')
    es.close()
}