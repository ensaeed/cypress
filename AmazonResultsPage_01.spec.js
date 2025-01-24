//// <reference types="Cypress"/>

import AmazonResultsPage from  '../pageObjects/AmazonResultsPage._old.js'


describe('Verify the relevant results are returned by the search engine', function()
{
it('Verify the items returned by the search', function()
{
    const amazonResultsPage = new AmazonResultsPage()

cy.visit('https://www.amazon.co.uk/s?k=Mobile+phones&crid=3BP43KMA4UHK8&sprefix=mobile+phones%2Caps%2C83&ref=nb_sb_noss_1')
cy.url().should('include','mobile+phones')
cy.title().should('eq','Amazon.co.uk : Mobile phones')

amazonResultsPage.getListResults()
cy.wait(30000)
///count.should('eq','26')
///const count=
cy.get('.a-link-normal s-line-clamp-2 s-link-style a-text-normal').its('length').should('be.gte',10)
//cy.get('class').find('.a-size-medium a-spacing-none a-color-base a-text-normal').its('length').should('be.gte',10)
///.find('wrap<h2.a-size-medium.a-spacing-none.a-color-base.a-text-normal>')
///count.should('be.gte','20')
//cy.get('[data-asin="B097NGJH9L"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-medium').click({ multiple: true, force: true })
/*cy.get('.a-size-medium.a-color-base.a-text-normal').each(($el, index, $list)=>
{
    {
        if ($el.text().includes('Alcatel'))
        cy.wrap($el).click()
    }
}


)


*/
}
)

}
)
