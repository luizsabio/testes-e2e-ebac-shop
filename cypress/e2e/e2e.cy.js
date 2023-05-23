/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
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
        cy.get('#billing_first_name').click().type("Luiz")
        cy.get('#billing_last_name').click().type("Sábio")
        cy.get('#billing_company').click().type("EBAC")
        cy.get('#select2-billing_country-container').click().type("Brasil").get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').click().type("Rua do Feijão")
        cy.get('#billing_city').click().type("Americana")
        cy.get('#select2-billing_state-container').click().type("São Paulo{enter}")
        cy.get('#billing_postcode').click().type("13467520")
        cy.get('#billing_phone').click().type("199999999")
        cy.get('#billing_email').click().type("brunodelmo@gmail.com")
        cy.get('#terms').click()
        cy.get('#place_order').click()

    });


})