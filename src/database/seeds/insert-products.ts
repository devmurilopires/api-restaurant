import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { name: "Pastel", price: 45 },
        { name: "Calzone", price: 60 },
        { name: "Hambúrguer", price: 35 },
        { name: "Bolo", price: 110 },
        { name: "Bolo no pote", price: 15 },
        { name: "Pizza", price: 30 },
        { name: "Refri 2L", price: 10 },
        { name: "Nuttela", price: 30 },
        { name: "Leite Condensado", price: 5 },
        { name: "Creme de Leite", price: 2.5 },
        { name: "Barra de Chocolate", price: 10 },
    ]);
};
