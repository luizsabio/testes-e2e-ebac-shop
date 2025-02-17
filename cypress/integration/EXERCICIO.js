/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
const Name = faker.person.firstName();
const Lastname = faker.person.lastName();
const empresa = faker.company.name();
const celular = faker.phone.number('##-#####-####');
const email = faker.internet.email();
import Finalizarpedido from '../support/page_objects/endereco.pagina'
import Produtos from '../support/page_objects/produtos';





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



    it('Fluxo de pedido -  Deve completar o pedido', () => {
        Produtos.items(0,".button-variable-item-Blue" ,1, 1)
        Produtos.items(0,".button-variable-item-Blue" ,1, 2)
        Produtos.items(0,".button-variable-item-Blue" ,1, 3)
        Produtos.items(0,".button-variable-item-Green" ,1, 4)
        Finalizarpedido.editardados(Name, Lastname, empresa, celular, email)
        
        cy.get('.woocommerce-notice').should('contain', "Obrigado. Seu pedido foi recebido.")
    });
    

})