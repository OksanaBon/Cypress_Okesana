
export class Basepage {
    open (URL){
        cy.visit (URL)

    }
    typeAmmount (Amount){
    cy.get('[data-qa-node="amount"]')
    .clear()
    .type(Amount)
    }
    typeDebitcardnamber (cardnumber,expired,cvv){
       
        cy.get('[data-qa-node="expiredebitSource"]')
        .type(expired).wait(1000)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
        .get('[data-qa-node="numberdebitSource"]')
        .type(cardnumber)
    }
    typesybmitpayment(){
        cy.get('button[type="submit"]').click();
    }


}

export const pageBases = new Basepage;


