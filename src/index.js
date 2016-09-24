const got = require('got')
const _ = require('lodash')

const imgURL = 'http://mypantheon.net/img/WaifuAvatar/WaifuAvNum152.jpg?w=300&h=300&fit=crop'

if(!process.argv[2]) {
    console.error('No arguments given')
    process.exit(1)
}

got.post('https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Description', {
    body: JSON.stringify({ url: process.argv[2] }),
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.API_KEY
    }
})
.then(response => {
    const caption = _(response.body.description.captions)
    .sort('confidence')
    .reverse()
    .first()

    if(!caption) throw new Error('No captions returned')

    console.log(caption.text)
})
.catch(err => {
    console.error(err)
    process.exit(1)
})
