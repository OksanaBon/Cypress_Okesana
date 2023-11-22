
    //type
    it("type",() =>{
        cy.visit('https://next.privat24.ua/mobile/?lang=en')
        cy.get('[data-qa-node="phone-number"]').type('380675728332')
    })
    it("focus",() =>{
        cy.visit('https://next.privat24.ua/mobile/?lang=en')
        cy.get('.sc-fvEvSO.iEXcdo')
        .focus()
    })
    it("blur",() =>{
        cy.visit('https://next.privat24.ua/mobile/?lang=en')
        cy.get('.sc-fvEvSO.iEXcdo')
        .focus()
        .blur()
    })
    it("clear",() =>{
        cy.visit('https://next.privat24.ua/mobile/?lang=en')
        cy.get('[data-qa-node="phone-number"]').type('380675728332').clear()
    
    })
    it("submit",() =>{
        cy.visit('https://next.privat24.ua/mobile/?lang=en')
        cy.get('form[method="post"]')
        .submit()
    
    })
    it("click",() =>{
        cy.visit('https://next.privat24.ua/mobile/?lang=en')
        cy.wait(3000);
        cy.get('button[type="submit"]').click()
    })

    //Right click to edit

    it("rightclick",() =>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('Right click to edit').rightclick()
    })

    //Double click to edit
    it("dblclick",() =>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('Double click to edit').dblclick()
    })

    it("check",() =>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('[value="radio1"]').check()
        cy.wait(3000)
        .uncheck({force: true})

    })
    it("uncheck",() =>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('[value="checkbox1"]').uncheck({force: true})
    })
    it("scroll",() =>{
        cy.visit('https://next.privat24.ua/?lang=en')
        cy.wait(2000)
        cy.get('.lang').scrollIntoView()

    })

    it.only("scrollTo",() =>{
        cy.visit('https://next.privat24.ua/?lang=en')
        cy.wait(2000)
        .scrollTo(0, 500)

    })