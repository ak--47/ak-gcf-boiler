/* eslint-disable */
//@ts-ignore

const { main } = require('./index.js');
jest.useFakeTimers('legacy')
jest.setTimeout(60000);	

test('do tests work?', async () => {
    expect(true).toBe(true)
})


// ex ample test
// test('nps', async () => {
//     let contact = await main(true, `nps`, `davidliria.founder@gmail.com`) //contact
//     let lead = await main(true, `nps`, `2396293395@qq.com`) //lead	
//     expect(contact.slackPost).not.toBe(``)
//     expect(lead.slackPost).not.toBe(``)
// })
