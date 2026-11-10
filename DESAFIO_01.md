# 🚀 DESAFIO: INVEST SMART

## Desenvolvimento de um Aplicativo Mobile com React Native e Expo

**Disciplina:** Desenvolvimento de Aplicações Mobile  
**Tecnologias:** React Native, Expo e JavaScript  
**Tipo de projeto:** Aplicativo Mobile  
**Objetivo:** Desenvolver um aplicativo para simulação de investimentos financeiros, aplicando conceitos de navegação, autenticação, gerenciamento de estados e desenvolvimento de interfaces mobile.

---

# 1. 🎯 Apresentação do Desafio

Você foi contratado para desenvolver um aplicativo mobile chamado **Invest Smart**, uma plataforma que permite aos usuários simular investimentos financeiros e acompanhar projeções de rentabilidade.

O aplicativo deverá possuir uma interface moderna, intuitiva e responsiva, proporcionando uma boa experiência de utilização.

O projeto deverá contemplar três módulos principais:

1. **Autenticação:** tela de login para acesso ao aplicativo.
2. **Dashboard:** painel principal com resumo financeiro e indicadores.
3. **Simulador de Investimentos:** ferramenta para calcular e visualizar projeções de investimentos.

O objetivo é aplicar, na prática, os conhecimentos adquiridos durante as aulas de React Native e Expo.

# 2. 🔐 Módulo 1 – Autenticação

A primeira tela apresentada ao usuário deverá ser a tela de Login.

O usuário deverá informar e-mail e senha para acessar o aplicativo.

### Credenciais obrigatórias

Para facilitar os testes e a avaliação do projeto, utilizaremos uma autenticação simulada.

| Campo  | Valor              |
| ------ | ------------------ |
| E-mail | admin@admin.com.br |
| Senha  | admin              |

### Funcionalidades obrigatórias

- Campo para informar e-mail.
- Campo para informar senha.
- Botão para realizar login.
- Validação dos campos obrigatórios.
- Validação das credenciais.
- Exibição de mensagem de erro caso os dados estejam incorretos.
- Redirecionamento para o Dashboard após autenticação bem-sucedida.

### Regras de negócio

- O usuário somente poderá acessar o Dashboard após realizar login.
- Caso informe credenciais incorretas, deverá receber uma mensagem de erro.
- O aplicativo deverá possuir uma opção para sair (Logout).
- Após realizar Logout, o usuário deverá retornar à tela de Login.

**Importante:** a autenticação poderá ser simulada localmente, sem necessidade de API ou banco de dados. As credenciais são exclusivamente para fins didáticos e não devem ser utilizadas como autenticação real em produção.

# 3. 📊 Módulo 2 – Dashboard

Após realizar o login com sucesso, o usuário deverá ser direcionado para a tela principal do aplicativo: Dashboard.

O Dashboard deverá apresentar um resumo das funcionalidades e informações financeiras da plataforma.

### Informações obrigatórias

O Dashboard deverá apresentar:

- Nome da aplicação: Invest Smart.
- Mensagem de boas-vindas ao usuário.
- Saldo total investido (valor demonstrativo).
- Total de rendimentos acumulados (valor demonstrativo).
- Quantidade de simulações realizadas.
- Atalhos para acessar o simulador.
- Opção para realizar Logout.

### Sugestão de interface

Organize o Dashboard utilizando cards para apresentar as informações financeiras.

Exemplo de informações:

| Indicador            | Valor demonstrativo |
| -------------------- | ------------------: |
| Total investido      |        R$ 15.000,00 |
| Rendimentos          |         R$ 1.250,00 |
| Patrimônio projetado |        R$ 16.250,00 |
| Simulações           |                   8 |

Os valores poderão ser estáticos ou calculados com base nas simulações realizadas.

### Navegação

O usuário deverá conseguir acessar o Simulador de Investimentos diretamente pelo Dashboard.

# 4. 💰 Módulo 3 – Simulador de Investimentos

Este será o principal módulo do aplicativo.

O objetivo é permitir que o usuário informe os dados de um investimento e visualize uma projeção de quanto seu dinheiro poderá render ao longo do tempo.

### Funcionalidades obrigatórias

O simulador deverá permitir informar:

1. Valor inicial do investimento.
2. Valor do aporte mensal.
3. Taxa de rendimento mensal.
4. Período do investimento em meses.
5. Modalidade do investimento.

### Modalidades de investimento

O aplicativo deverá disponibilizar pelo menos três opções:

- CDB.
- LCI.
- Criptomoedas.

Cada modalidade deverá apresentar uma identificação visual.

### Exemplo de simulação

Considere os seguintes dados:

| Informação           |        Valor |
| -------------------- | -----------: |
| Investimento inicial | R$ 10.000,00 |
| Aporte mensal        |    R$ 500,00 |
| Rentabilidade mensal |        0,90% |
| Período              |     24 meses |
| Modalidade           |          CDB |

Após clicar no botão **Simular Investimento**, o aplicativo deverá apresentar os resultados.

### Resultados obrigatórios

O aplicativo deverá exibir:

- Valor total investido.
- Total de aportes realizados.
- Rendimento acumulado.
- Saldo final projetado.
- Rentabilidade acumulada em percentual.

### Fórmula de cálculo

Para calcular uma simulação com aportes mensais, considere:

**Saldo inicial:**

\[
S_0 = V_0
\]

**Saldo após cada mês:**

\[
S*n = S*{n-1}(1+i)+A
\]

Onde:

- \(S_n\): saldo ao final do mês.
- \(S\_{n-1}\): saldo do mês anterior.
- \(i\): taxa de rendimento mensal em decimal.
- \(A\): aporte mensal.

**Total investido:**

\[
I = V_0 + (A \times n)
\]

**Rendimento acumulado:**

\[
R = S_n - I
\]

**Exemplo de implementação:**

```javascript
function calcularInvestimento(valorInicial, aporteMensal, taxaMensal, meses) {
  let saldo = valorInicial;

  for (let i = 0; i < meses; i++) {
    saldo = saldo * (1 + taxaMensal);
    saldo += aporteMensal;
  }

  const totalInvestido = valorInicial + aporteMensal * meses;

  const rendimento = saldo - totalInvestido;

  return {
    saldoFinal: saldo,
    totalInvestido,
    rendimento,
  };
}
```

A taxa deverá ser convertida de percentual para decimal antes do cálculo. Por exemplo: 0,90% = 0,009.

**Observação:** o cálculo é uma projeção didática com taxa constante. Não representa necessariamente a rentabilidade real de CDB, LCI ou criptomoedas. Para simplificar, não será obrigatório implementar impostos, taxas ou oscilações de mercado.

# 5. 📈 Visualização dos Resultados

Após realizar a simulação, o aplicativo deverá apresentar os resultados de maneira visual.

Utilize cards, indicadores e, se possível, gráficos.

Sugestões:

- Gráfico de evolução do patrimônio.
- Comparação entre valor investido e rendimento.
- Indicador de rentabilidade.
- Resumo da simulação.

O objetivo é permitir que o usuário compreenda facilmente o crescimento projetado do investimento.

# 6. 🛠️ Requisitos Técnicos

O projeto deverá obrigatoriamente utilizar:

| Tecnologia                      | Aplicação                          |
| ------------------------------- | ---------------------------------- |
| React Native                    | Desenvolvimento das interfaces     |
| Expo                            | Ambiente de desenvolvimento mobile |
| JavaScript                      | Lógica da aplicação                |
| StyleSheet                      | Estilização dos componentes        |
| React Hooks                     | Gerenciamento de estados e efeitos |
| React Navigation ou Expo Router | Navegação entre telas              |

### Hooks obrigatórios

Durante o desenvolvimento, deverão ser utilizados:

**useState**

- Armazenar e atualizar os campos do formulário.
- Controlar os dados do usuário.
- Atualizar os resultados da simulação.

**useEffect**

- Executar ações quando necessário.
- Controlar verificações de autenticação.
- Atualizar informações da aplicação.

### Componentização

O projeto deverá possuir componentes reutilizáveis.

Sugestões:

- Input.
- Button.
- Card.
- Header.
- InvestmentCard.
- DashboardCard.
- InvestmentResult.

Evite desenvolver toda a aplicação em um único arquivo.

# 7. 📁 Sugestão de Estrutura do Projeto

Organize o projeto de maneira profissional.

```text
invest-smart/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── src/
│   │
│   ├── components/
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Card.js
│   │   └── Header.js
│   │
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── DashboardScreen.js
│   │   └── SimulatorScreen.js
│   │
│   ├── services/
│   │   └── investmentService.js
│   │
│   ├── contexts/
│   │   └── AuthContext.js
│   │
│   ├── navigation/
│   │   └── AppNavigation.js
│   │
│   └── styles/
│       └── theme.js
│
├── App.js
├── package.json
└── README.md
```

Essa estrutura é uma sugestão. Você poderá adaptá-la conforme a arquitetura escolhida.

# 8. 🎨 Requisitos de Interface

O aplicativo deverá possuir uma identidade visual própria.

Requisitos:

- Interface moderna.
- Boa organização dos elementos.
- Cores harmoniosas.
- Botões bem identificados.
- Campos de formulário organizados.
- Cards para apresentar informações.
- Boa experiência de navegação.
- Compatibilidade com diferentes tamanhos de tela.

Você poderá utilizar ferramentas de IA para criar sugestões de layouts, paletas de cores, ícones e componentes.

# 9. 🤖 Utilização de Inteligência Artificial

**O uso de Inteligência Artificial está liberado!**

Vocês poderão utilizar ferramentas como ChatGPT, Claude, Gemini e outras para auxiliar no desenvolvimento.

A IA poderá ser utilizada para:

- Criar componentes React Native.
- Desenvolver telas.
- Corrigir erros.
- Explicar funcionalidades.
- Criar fórmulas matemáticas.
- Melhorar o design.
- Criar testes.
- Sugerir melhorias na arquitetura.

Entretanto, existe uma regra importante:

**Você precisa compreender o código que está utilizando.**

Durante a apresentação, o professor poderá solicitar que você explique ou modifique qualquer parte do aplicativo.

# 10. ⭐ Funcionalidades Extras (Diferenciais)

Os seguintes recursos não são obrigatórios, mas poderão agregar valor ao projeto:

- Histórico de simulações.
- Salvar simulações utilizando AsyncStorage.
- Tema Dark Mode.
- Gráficos utilizando bibliotecas React Native.
- Comparação entre CDB, LCI e criptomoedas.
- Tela de perfil do usuário.
- Animações nas transições.
- Compartilhamento dos resultados.
- Persistência da autenticação.
- Exportação dos resultados em PDF.

# 11. 📋 Critérios de Avaliação

| Critério                           | Pontuação |
| ---------------------------------- | --------: |
| Tela de Login e validações         |       1,5 |
| Autenticação e navegação           |       1,0 |
| Dashboard                          |       1,5 |
| Simulador de investimentos         |       2,5 |
| Cálculos e resultados corretos     |       1,5 |
| Organização e componentização      |       1,0 |
| Interface e experiência do usuário |       1,0 |
| **Total**                          |  **10,0** |

# 12. 📦 Entrega do Projeto

A entrega deverá conter:

1. Código-fonte completo do projeto.
2. Projeto organizado em pastas.
3. Arquivo README.md com instruções para execução.
4. Prints das principais telas.
5. Aplicativo executando no Expo Go ou em APK.

### Informações que deverão constar na entrega

- Nome dos integrantes.
- Nome do projeto.
- Tecnologias utilizadas.
- Instruções para executar o aplicativo.
- Credenciais de acesso para avaliação.

# 13. 🧪 Checklist de Validação

Antes de entregar, verifique:

- [ ] O aplicativo inicia corretamente.
- [ ] A tela de Login é apresentada primeiro.
- [ ] O login com admin@admin.com.br e senha admin funciona.
- [ ] Credenciais incorretas apresentam mensagem de erro.
- [ ] Após o login, o usuário acessa o Dashboard.
- [ ] O Dashboard apresenta os indicadores financeiros.
- [ ] É possível acessar o Simulador.
- [ ] O simulador recebe os dados corretamente.
- [ ] Os cálculos apresentam resultados coerentes.
- [ ] O usuário consegue visualizar os resultados.
- [ ] O Logout retorna para a tela de Login.
- [ ] O aplicativo funciona no Expo Go ou APK.

---

# 🏆 DESAFIO FINAL

Você não está apenas desenvolvendo algumas telas!

Você está construindo um aplicativo mobile que simula uma plataforma real de investimentos.

Utilize sua criatividade, explore os recursos do React Native e do Expo, pesquise, teste e aproveite a Inteligência Artificial como ferramenta de desenvolvimento.

**O objetivo é entregar uma aplicação funcional, organizada e com aparência profissional.**

**Boa sorte, desenvolvedores! 🚀**
