beforeEach(() => {
    cy.POST_auth().then((res_token) => {
        // expect(response.status).to.eq(200);
        token = res_token
        cy.log(token).wait(5000)
    })
  })
let token
describe('api_case', () => {
    
    it('API_GET', () => {
        cy.GET_User().then((response) => {
        expect(response.status).to.eq(200);
        var data = response.body
        cy.log(data[0].fname).wait(1000)
        cy.log(data[2].fname).wait(1000)
        cy.log(data[3].fname).wait(1000)
        assert.equal(data[0].fname,'Karn')
        assert.equal(data[2].fname,'Walter')
        assert.equal(data[3].fname,'Gayla')
        cy.log(data).wait(5000)
    })
})


// it('POST_Attraction', () => {
//     cy.POST_Attraction(token).then((response) => {
//         expect(response.status).to.eq(200);
//         var data = response.body
//         cy.log(data.attraction.name).wait(1000)
//         assert.equal(data.attraction.name,"ICE University")
//     })
// })

it('POST Attraction', () => {
    cy.POST_Attraction(token).then((response) => {
        expect(response.status).to.eq(200);
        var data = response.body
        cy.log(data.attraction.name).wait(2000)
        assert.equal(data.attraction.name , 'ICE University')
    });
})

})