import readlinesync = require('readline-sync');


export function main() {

    let opcao: number;

    while (true) {
       
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                   Aura Candles                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Pedido                         ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produtos por Numero           ");
        console.log("            4 - Atualizar Pedido                     ");
        console.log("            5 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log("\nAura Candles - Velas aromáticas");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Pedido\n\n");

                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                break;
            case 3:
                console.log("\n\nBuscar Produtos - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Pedido\n\n");

                break;
            case 5:
                console.log("\n\nSair\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Gabriella Parra ");
    console.log("Gabriella Parra - gabriella.parra05@gmail.com");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();