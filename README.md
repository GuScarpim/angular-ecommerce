Core

É literalmente sua palavra em inglês: o núcleo [da aplicação]. Lá está tudo que é essencial para o funcionamento.

Models, nessa pasta estão os modelos os quais criou para sua aplicação.

Components, aqui estão os componentes universais da aplicação. A navbar ou o footer que criou são bons exemplos.

Guards, é onde você irá por os guardas de rota que criou, como por exemplo aquele para proteger rotas que o usuário estar autenticado é um
pré-requisito.

Interceptors, é a pasta que conterá nossos interceptadores de requisições, um exemplo mais que excelente é um interceptor cujo sua
responsabilidade é injetar o token obtido no header da requisição.

Layouts, pasta que armazena os layouts pré-definidos criados da aplicação.

Translations, armazena as traduções utilizadas na internacionalização.

Configs, pasta onde fica alguns arquivos de configuração.

Overrides, é a pasta que tem os arquivos que utilizamos para sobrescrever uma parte terceira. Um exemplo é um arquivo responsável por
sobrescrever uma classe do Bootstrap.

Variables.scss, é um arquivo com algumas variáveis CSS que podem ser necessárias.

Theme.scss, é um arquivo de tema. Muito comum para customizar uma UI que está utilizando como Bootstrap, Angular Material, PrimeNG etc.

É importante que você carregue (importando) o core.module.ts no app.module.ts da aplicação. Fazemos isso para carregar todo o seu conteúdo na inicialização da aplicação, pois é o conteúdo núcleo dela.

Features

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
        |-- dashboard.module.ts

Vale destacar a importância de cada feature ter seu próprio module, pois isso é fundamental para fazer uma aplicação utilizando o conceito de lazy loading.

Observe que simples é. Temos features que comtemplam e agrupam todo seu sistema por características e entrega de valor. Além disso, caso seja necessário utilizar, por exemplo, os componentes de produtos em outras telas basta importar o module produtos-components.module.ts.

Shared
Essa é a mais baba. Aqui fica tudo que é compartilhado e reutilizado em toda aplicação, não tem segredo.

As pastas filhas são apenas para agrupar por tipo de conteúdo — pipes com pipes, components com components e assim por diante.

É importante que importe a shared.module.ts também em seu app.module.ts e em todos os outros demais modules criados. Fazemos isso, pois em tese tudo que está na shared.module.ts está disponível para ser utilizado.

Aproveite, também, a shared.module.ts para importar e exportar outros módulos comumente utilizados em toda aplicação, por exemplo:

HttpClientModule, ReactiveFormsModule, CommomModule, módulos do toolkit que está utilizando, entre outros módulos que possa fazer sentido.
