import{ mobilerepl } from "../support/pages/mobilerepl.spec.cy";
import { transfera } from "../support/pages/transfera.spec.cy";
import { pageBases } from "../support/pages/pageBases.spec.cy";

// beforeEach('setup succssesful response', () =>{
// cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?',
//     {fixture:'confirmresponse/succsses.json'})
// })
// beforeEach('setup succssesful response', () =>{
//     cy.intercept('https://danube-webshop.herokuapp.com/api/books',
//         {fixture:'confirmresponse/test.json'})
//     })

beforeEach('Archive', () =>{
        cy.intercept('https://next.privat24.ua/api/p24/pub/archive?',
            {fixture:'confirmresponse/archive.json'})
        })
it.only ('Archive tab',() => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[title="Archive"]').click()
    cy.wait(2000).get('tbody').toMatchImageSnepshot();

})


// it.only('book', () =>{
//     cy.visit('https://danube-webshop.herokuapp.com/');
//     // cy.get('[name="erotic"]').click()

// })

// beforeEach('setup succssesful response', () =>{
//     cy.intercept('https://danube-webshop.herokuapp.com/api/books',
//         {fixture:'confirmresponse/test.json'})
//     })
    
//     it.only('test', () =>{
//         cy.visit("https://danube-webshop.herokuapp.com/")
//     })


// it('Replanishment of Uk phone number', () =>{
//     pageBases.open('https://next.privat24.ua/mobile/?lang=en');
//     mobilerepl.typePhonenumber('686979712');
//     pageBases.typeAmmount('100');
//     cy.wait(3000);
//     pageBases.typeDebitcardnamber('4149499610151407','0524','111');
//     // cy.wait('[data-qa-node="firstNamedebitSource"]')
//     // cy.get('[data-qa-node="firstNamedebitSource"]').type('Taras');
//     pageBases.typesybmitpayment();
//     // cy.wait(3000)
//     cy.contains('Pay').click();
//     // cy.get('[data-qa-node="expire"]').type('0524');
//     // cy.get('[data-qa-node="cvv"]').type('111');
//     // cy.wait(2000);
//     // cy.contains('Confirm').click();

// cy.wait('[data-qa-node="firstNamedebitSource"]').its('status')


// })
//   .should('eq', 'first name');
// //     cy.get('.sc-fvEvSO.goyrCm', { timeout: 20000 })
// //   .type('Test')

//     // cy.get('.sc-eVspGN.hpDCAQ').click();
//     // cy.wait('[data-qa-node="firstNamedebitSource"]').should('be.visible');
//         // cy.get('[data-qa-node="firstNamedebitSource"]').should('be.visible')});



//     cy.get('[data-qa-node="firstNamedebitSource"]').should('be.visible')
//     cy.get('[data-qa-node="firstNamedebitSource"]').type('Tamar');
//     // cy.get('.sc-csuSiG gNIGBR').type();
//     mobilerepl.typesybmitpayment();

    // cy.get('.sc-dkcEsn').click().wait(5000);
    // cy.get('.sc-fvEvSO.buuNhP').click();
    // cy.get('[data-qa-node="submit"]').click();
    // cy.get('[data-qa-node="amount"]')
    // .should('have.text', '100');
    // cy.get('[data-qa-node="card"]')
    // .should('contain.text','4552 **** **** 8217');

    

it.skip ('Replanishment of Uk phone number', () =>{
        pageBases.open('https://next.privat24.ua/money-transfer/card/?lang=en');
        pageBases.typeDebitcardnamber('4552331448138217','05.24','213');
        transfera.typeNameSurname('Shayne','McConnel');
        transfera.typeReceivecard('5309233034765085');
        pageBases.typeAmmount('500');
        transfera.typeReceineNameSurname('Juliana','Jannsen');
        transfera.typeComment('for you');
        pageBases.typesybmitpayment();
        transfera.checkReceivecard('5309 2330 3476 5085');
        transfera.checkSendCard('4552 3314 4813 8217');
        transfera.checkAmmount('500 UAH');
        transfera.checCommition('120.49');
        transfera.checkTotall('620.49');

})
    // // cy.focus('[data-qa-value="100"]');
    // cy.focus('[data-qa-node="firstNamedebitSource"]')
    // .type('Test')
    // .get('[data-qa-node="lastNamedebitSource"]')
    // .type('Test')
    // .get('[data-qa-node="submit"]')
    // .click()
    // .get(".sc-cuOiQm bidhHS card_kAGUALSv9b")
    // // .contains('4552 **** **** 8217.').should('be.visiable')
    // .should('have.text', '4552 **** **** 8217')
    // .get('[data-qa-node="amount"]')
    // .should('have.text', '100')
    // .get('[data-qa-node="commission"]')
    // .should('have.text', '2')
    // .get('[data-qa-node="commission-currency"]')
    // .should('have.text', 'UAH')

// it('uncaught:exception', () =>{
//     cy.visit ('https://next.privat24.ua/mobile/?lang=en')
//     cy.wait(1000).get('[data-qa-node="phone-number"]')
//     cy.get('[data-qa-node="phone-number"]').type('675721232')
//     // cy.get('[data-qa-node="amount"]').clear().type(100)
//     cy.get('[data-qa-node="numberdebitSource"]').type('4552331448138217')
//     cy.get('[data-qa-node="expiredebitSource"]').type('0524')
//     cy.get('[data-qa-node="cvvdebitSource"]').type('213')   
//     // cy.get('.sc-csuSiG.bFqFCo').scrollIntoView()
//     cy.get('form[method="post"]').click()
//     cy.get('[data-qa-node="amount-hot-spot"]:first').click()
//     // cy.get('[placeholder="TARAS]').should('be.visible').wait(5000)

//     // cy.get('[placeholder="TARAS"]').type('Test')
//     // cy.get('[data-qa-node="lastNamedebitSource"]').type('Test')
//     cy.get('[data-qa-node="submit"]').click()
//     cy.get(".sc-cuOiQm bidhHS card_kAGUALSv9b").should('contain.text', '4552 **** **** 8217')
//     cy.get('[data-qa-node="amount"]') .should('have.text', '100')
//     cy.get('[data-qa-node="commission"]').should('have.text', '2')
//     cy.get('[data-qa-node="commission-currency"]').should('have.text', 'UAH')

