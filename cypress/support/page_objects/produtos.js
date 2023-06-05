class Produtos {
    
    items () {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(' .product-block').eq(0).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').click().clear().type(1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get(' .product-block').eq(0).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').click().clear().type(1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get(' .product-block').eq(1).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').click().clear().type(1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get(' .product-block').eq(2).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').click().clear().type(1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
    
}

}

export default new Produtos ()