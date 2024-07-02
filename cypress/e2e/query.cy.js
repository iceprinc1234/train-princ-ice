describe('Query_Case', () => {
    // it('find', () => {
    //     cy.task("sqlfind" , 
    //         "SELECT * FROM user" ).then(result => {
    //         cy.log(result[0]).wait(1000)
    //         cy.log(result[0].lastName).wait(1000)
    //         cy.log(result[0].firstName).wait(1000)
    //         expect({ last_name: result[0].last_name }).to.eql({ last_name: 'wutti' })
    //     })
    it('SQL find', () => {
        cy.task("queryDb" , "SELECT * FROM user").then(result => {
             cy.log(result[0].firstName)
             cy.log(result[0].lastName)
             expect(result[0].firstName).to.eql('kavita')
             expect(result[0].lastName).to.eql('Kongthitayakul')
             expect({ first_name: result[0].firstName }).to.eql({ first_name: 'kavita' })
             expect({ last_name: result[0].firstName }).to.eql({ last_name: 'Kongthitayakul' })
        });
      })
})