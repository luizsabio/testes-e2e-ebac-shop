class enderecoPage {
    editarEndereco(nome, sobrenome, empresa, pais, rua, cidade, estado, cep, celular, email) {
        
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
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').click().type(nome)
        cy.get('#billing_last_name').click().type(sobrenome)
        cy.get('#billing_company').click().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').click().type(rua)
        cy.get('#billing_city').click().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + "{enter}")
        cy.get('#billing_postcode').click().type(cep)
        cy.get('#billing_phone').click().type(celular)
        cy.get('#billing_email').click().type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()
       
    }

    

    

}

export default new enderecoPage()