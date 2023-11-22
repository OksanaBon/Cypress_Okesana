// cy.task('formatJson', { filePath: 'path/to/your/json/file.json' })

it('Exampling Get request', () => {
    cy.request('https://next.privat24.ua/')
        .then((response) => {
            console.log(response);
        })
})
it('Exampling POST request', () => {
    const requestBody = {
        action: "add",
        phone: "+380675728332",
        amount: 120,
        currency: "UAH",
        cardCvv: "246",
        cardExp: "1224",
        card: "4552331448138217",
        operator: "Kyivstar Ukraine",
        operatorId: "602",
        xref: "fbce74d561b04efa20ee3ddba2ca1a82",
        nameA: "Taras T",
        withDuplicateCheck: true,
        _: 1678540725758
    };
    const headers = {
        cookie: "pubkey=2eb0aa4b713b1d38e4c3bd2c01a379e5; lfp=3/15/2021, 6:08:01 PM; pa=1678372960427.36870.397575310960117next.privat24.ua0.124117510575662+6; fp=79",
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headers
    }).then((response) => {
        expect(response).to.have.property('status').to.equal(200);
        expect(response.body).to.have.property('status').to.equal("success");
        // expect(response.body.data).to.have.property('amount').to.equal('50');
        expect(response).to.have.property('statusText').to.equal('OK');
        console.log(response);
    });

});

it.only('Should', () => {
    const requestBody = {
        action: "add",
        phone: "+380675728332",
        amount: 120,
        currency: "UAH",
        cardCvv: "246",
        cardExp: "1224",
        card: "4552331448138217",
        operator: "Kyivstar Ukraine",
        operatorId: "602",
        xref: "fbce74d561b04efa20ee3ddba2ca1a82",
        nameA: "Taras T",
        withDuplicateCheck: true,
        _: 1678540725758
    };
    const headers = {
        cookie: "pubkey=2eb0aa4b713b1d38e4c3bd2c01a379e5; lfp=3/15/2021, 6:08:01 PM; pa=1678372960427.36870.397575310960117next.privat24.ua0.124117510575662+6; fp=79",
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headers
    }).its('body').should('contains',{
        status:'success'
    }).its('data').should('contain',{
    })


});

