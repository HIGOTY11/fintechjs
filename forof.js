const clientes = ["Samuel","Joana"]
for(pessoa of clientes) {
    console.log("Cliente: " + pessoa);
}
clientes.push ("Matheus");
console.log("\nAdicionando um cliente...")
for(pessoa of clientes) {
    console.log("Cliente: " + pessoa);
}