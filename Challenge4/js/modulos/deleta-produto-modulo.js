export const deletaProduto = async (id) => {
    const resposta = await fetch(`https://my-json-server.typicode.com/Nelson_Nishiwaki/alurageek/produtos/${id}`, {
        method: "DELETE"
    });

    if (!resposta.ok) throw new Error("Não foi possível remover o produto");
}