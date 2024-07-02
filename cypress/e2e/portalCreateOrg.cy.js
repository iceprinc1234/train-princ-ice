describe('template spec', () => {
    it('passes', () => {
        for (let i=12; i < 35; i++) {
            // cy.log(`patient_name : ${value[i][`patient_fullname`]} และอายุ ${value[i][`age`]} ปี`)
            cy.visit('https://portal-staging.medcury.health')
            //   cy.log('Ice said Hello world')
            cy.get('#username').type("rachata.li@princhealth.com")
            cy.get('#password').type("123456")
            cy.get('.btn-login > .v-btn__content').click().wait(1000)
            cy.get(':nth-child(17) > .v-list-group > .v-list-group__header > .v-list-item__title').click().wait(1000)
            cy.get('.v-list-group__items > :nth-child(3) > .v-list-item > .v-list-item__content > .v-list-item__title').click().wait(1000)
            cy.get('#add-btn > .v-btn__content').click().wait(1000)
            cy.get('.can-disable-selector > .dropzone-container > .dropzone-image-upload-box > .input-file').attachFile("88_1619069786852.jpg", { subjectType: 'input' }).wait(1000)
            cy.get('#input-254').type(`iceorg${i}`)
            cy.get('#input-257').type(`io0${i}`)
            cy.get('#input-287').type("13.1")
            cy.get('#input-290').type("100.5")
            cy.get('.input-file').attachFile("88_1619069786852.jpg", { subjectType: 'input' }).wait(1000)
            cy.get('#input-305').type(`iceorg${i}`)
            cy.get('.v-expansion-panel-header > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            cy.get('.white-text-button > .v-btn__content').click().wait(3000)
            cy.get('.info600Color--text > .v-btn__content').click().wait(3000)
            cy.get('.v-item-group > .v-list-item > .v-list-item__content > .v-list-item__title').click().wait(1000)
            cy.get('.primary > .v-btn__content').click().wait(1000)

            // cy.get('#input-254').click()
          }



    

    //   for (let i=0; i < value.length; i++) {
    //     cy.log(`patient_name : ${value[i][`patient_fullname`]} และอายุ ${value[i][`age`]} ปี`)
    //   }
    })
  })