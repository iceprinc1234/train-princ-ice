
// const patient_info = require(`../fixtures/package_detail.json`)
const dayjs = require('dayjs')
let todaysDate = parseInt(dayjs().format('DD'))
let time = dayjs().format('HH:mm')
let startDate = todaysDate + 1
let endDate = todaysDate + 2


beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.login_portal_qa('rachata.li@princhealth.com','123456')
    cy.verify_landing_page()
    // cy.log(tomorrowdate)
  })

describe('workshop_testsuit', () => {
    it('create_single_package_successful', () => {

        

        // in the test

        // cy.log(tomorrowdate)

        //select package&promotion menu
        cy.get(':nth-child(4) > .v-list-item > .v-list-item__content > .v-list-item__title').click().wait(3000)
        //verify package list
        cy.get('.pageHeadline').should('have.text',' Package & Promotion ')
        cy.get('#add-btn').should('be.visible')
        //create package
        cy.get('#add-btn').click().wait(1000)
        cy.get('.v-input__icon > .v-icon').click()
        cy.contains('Single package').click()

        cy.get(':nth-child(3) > [t-data="reset-btn"]').should('be.visible')
        cy.get(':nth-child(3) > [t-data="cancel-btn"]').should('be.visible')
        cy.get(':nth-child(3) > [t-data="preview-btn"]').should('be.visible') 
        cy.get(':nth-child(3) > [t-data="save-btn"]').should('be.visible') 

        cy.get('#product-list-price-text-box').type('250')
        cy.get('.col-5 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.contains('Percentage (%)').click()
        cy.get('#value-text-box').type('10')
        cy.get('#input-693').type('psuv012012')
        cy.get('.branch-multiple-selecter > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.contains('plpn').click()
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.contains('Orthopaedic Center').click()
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.contains('Available').click()
        cy.get('#input-714').click()
        cy.get('.v-btn__content').contains(startDate).click()
        cy.get('#input-719').type(time)
        // cy.get('#input-724').click()
        // cy.get('.v-btn__content').contains(endDate).click()
        cy.get('#input-756').type("tagstesAutomate")
        cy.get('#input-764').type("aiasNameAutomate")
        cy.get('#input-765').type("titleNameAutomate")
        cy.get('.input-file').attachFile("image/88_1619069786852.jpg", { subjectType: 'input' }).wait(1000)
        // cy.get('[t-data="thai-info-content"] > .container > .mb-4 > :nth-child(3) > [data-v-350a63ca=""][data-v-59653406=""] > .dropzone-container > .dropzone-image-upload-box-error > .input-file')
        cy.get('.input-file').attachFile("image/88_1619069786852.jpg", { subjectType: 'input' }).wait(1000)
        cy.get('#input-779').type("altTextAutomate")
        cy.get(':nth-child(8) > .v-card__text > .px-2 > [t-data="checkbox-duplicate"] > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
        cy.get(':nth-child(3) > [t-data="save-btn"]').click()

        // cy.get('#input-729').type(time)
        // cy.get('#input-734').click()
        // cy.get('.v-btn__content').contains(startDate).click()
        // cy.get('#input-719').type(time)



        // let a = cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text','1')
        // let a = cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(parseFloat)
        // cy.log(a)

        // cy.get('tbody > :nth-child(1) > :nth-child(3) > .v-btn > .v-btn__content')
        // cy.get('tbody > :nth-child(2) > :nth-child(3) > .v-btn > .v-btn__content')
        

            // cy.get('#radio-group-3-messages > .v-messages__message').should('have.text', 'กรุณาเลือกประเภทลูกค้า')
            // cy.get('.input-file').attachFile("88_1619069786852.jpg", { subjectType: 'input' }).wait(1000)
            // cy.get('#input-305').type(`iceorg${i}`)
            // cy.get('.white-text-button > .v-btn__content').click().wait(3000)


    })
  })