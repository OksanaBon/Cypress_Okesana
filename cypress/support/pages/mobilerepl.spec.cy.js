

export class MobileforReplenishment {
    typePhonenumber (PhoneNumber){
        cy.get('[data-qa-node="phone-number"]')
        .type(PhoneNumber);
    }
    // typeAmmount (Amount){
    //     cy.get('[data-qa-node="amount"]')
    //     .clear()
    //     .type(100)
    
    typeDebitcardnamber (cardnumber,expired,cvv){
        
        cy.get('[data-qa-node="expiredebitSource"]')
        .type(expired).wait(1000)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
        .get('[data-qa-node="numberdebitSource"]')
        .type(cardnumber)
    }
}

    // typesybmitpayment(Submit){
    //     cy.get('[data-qa-node="submit"]').click();


    export const mobilerepl = new MobileforReplenishment