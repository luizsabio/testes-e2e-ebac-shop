class Produtos {
    
    items (numeroproduto, cor, quantidade, carrinho) {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(' .product-block').eq(numeroproduto).click()
    cy.get('.button-variable-item-M').click()
    cy.get(cor).click()
    cy.get('.input-text').click().clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', carrinho)
    
    
}

}

export default new Produtos ()