/// <reference types="Cypress"/>


import AmazonHomePage from '../pageObjects/AmazonHomePage'

describe(' verify search functionality is working', function()
{
    before(function(){
        // run the below code before all the tests in the describe function
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })

    })

    
    it('Search for an item',function()
    {
       
        const amazonHomePage = new AmazonHomePage()
        cy.visit('https://www.amazon.co.uk')
        cy.title().should('eq','Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more')
     //   amazonHomePage.getSearchbox().type('Mobile Phone')
        amazonHomePage.getSearchbox().type(this.data.search)
        cy.wait(10000)
        amazonHomePage.getCookies()
        amazonHomePage.getsearchButton()
       
        cy.wait(20000)

        cy.title().should('eq','Amazon.co.uk : '+ this.data.search)


    })



})

    