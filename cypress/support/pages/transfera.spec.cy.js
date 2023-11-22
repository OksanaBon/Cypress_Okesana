export class Transfer {

    // typeDebitcardnamber (cardnumber,expired,cvv){
    //     cy.get('[data-qa-node="numberdebitSource"]')
    //     .type(cardnumber)
    //     .get('[data-qa-node="expiredebitSource"]')
    //     .type(expired).wait(1000)
    //     .get('[data-qa-node="cvvdebitSource"]')
    //     .type(cvv);
    
    typeNameSurname (name, surname){
        cy.get('[data-qa-node="firstNamedebitSource"]')
        .type(name)
        .get('[data-qa-node="lastNamedebitSource"]')
        .type(surname);

    }
    typeReceivecard (cardnam2 ){

        cy.get('[data-qa-node="numberreceiver"]')
        .type(cardnam2)
       
    }
    typeAmount (ammount){
        cy.get('[data-qa-node="amount"]')
        .type(ammount)

    }
    typeReceineNameSurname (name,surname){
        cy.get('[data-qa-node="firstNamereceiver"]')
        .type(name)
        .get('[data-qa-node="lastNamereceiver"]')
        .type(surname);
    }
    typeComment (comment){
        cy.get('[data-qa-node="toggle-comment"]').click();
        cy.get('[data-qa-node="comment"]').type(comment);
    }
    typesybmitpayment (){
        cy.get('[type="submit"]').click()
    }
    checkReceivecard (typeDebitcardnamber) {
        cy.get('[data-qa-node="receiver-card"]')
        .should('have.text', typeDebitcardnamber);
    }
    checkSendCard (sendercard){
        cy.get('[data-qa-node="payer-card"]')
        .should('have.text', sendercard);

    }
    checkAmmount (ammount){
        cy.get('[data-qa-node="receiver-amount"]')
        .should('have.text', ammount);
    }
    checCommition (commission){
        cy.get('[data-qa-node="payer-currency"]')
        .should('contain.text', commission);
    }
    checkTotall(total){
        cy.get('.sc-fEXmlR')
        .should('contain.text', total)
        
    }

}
export const transfera = new Transfer