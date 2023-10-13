É simplesmente a pasta que contém definitivamente aquilo que dá valor ao sistema, ou seja, as entregas. Features são as características do sistema. Imagine um e-commerce, poderíamos listar como features:

A tela que lista os produtos;
A tela que mostra particularmente um produto;
A tela de cadastro do usuário;
A tela de pagamento.
Todas essas features são exemplos de partes funcionais do sistema. Cada item dentro dessa pasta pode ter seus próprios componentes e, até quem sabe, outros modules. Tudo depende do seu projeto.

Vamos viajar mais ainda. Imagine que está construindo um pequeno ERP para gerenciamento de uma indústria. É claro que de forma bem acadêmica, poderíamos muito bem ter uma pasta features com a seguinte organização e composição:

|-- features
    |-- clientes
        |-- components
            |-- [+] listagem-clientes
            |-- [+] novo-cliente
            |-- clientes-components.module.ts
        |-- clientes.component.ts
        |-- clientes.component.html
        |-- clientes.component.scss
        |-- clientes.component.spec
        |-- clientes.module.ts
    |-- produtos
        |-- components
            |-- [+] listagem-produtos
            |-- [+] novo-produto
            |-- produtos-components.module.ts
        |-- produtos.component.ts
        |-- produtos.component.html
        |-- produtos.component.scss
        |-- produtos.component.spec
        |-- produtos.module.ts
    |-- vendas
        |-- components
            |-- [+] listagem-vendas
            |-- [+] nova-venda
            |-- vendas-components.module.ts
        |-- vendas.component.ts
        |-- vendas.component.html
        |-- vendas.component.scss
        |-- vendas.component.spec
        |-- vendas.module.ts
    |-- dashboard
        |-- dashboard.component.ts
        |-- dashboard.component.html
        |-- dashboard.component.scss
        |-- dashboard.component.spec
        |-- dashboard.module.tss
