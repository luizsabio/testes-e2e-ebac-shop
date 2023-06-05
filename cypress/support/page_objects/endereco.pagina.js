class Finalizarpedido {
    
    editardados (nome, sobrenome, empresa, celular, email) {
 
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get('#cart > .dropdown-toggle').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    cy.get('#billing_first_name').click().type(nome)
    cy.get('#billing_last_name').click().type(sobrenome)
    cy.get('#billing_company').click().type(empresa)
    cy.get('#select2-billing_country-container').click().type("Brasil").get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').click().type("Rua do Feijão")
    cy.get('#billing_city').click().type("Americana")
    cy.get('#select2-billing_state-container').click().type("São Paulo{enter}")
    cy.get('#billing_postcode').click().type("13567640")
    cy.get('#billing_phone').click().type(celular)
    cy.get('#billing_email').click().type(email)
    cy.get('#terms').click()
    cy.get('#place_order').click()

}

}

export default new Finalizarpedido ()
