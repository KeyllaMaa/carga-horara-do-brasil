const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe como e oque é a carga-horária no brasil?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: " Que bom que você sabe sobre o conceito e características da carga horária no Brasil! "
            },
            {
                texto: "Não.",
                afirmacao: "A carga horária no Brasil refere-se ao número de horas que um trabalhador é contratado para trabalhar dentro de um período específico, geralmente por semana ou por mês. É definida por leis trabalhistas que estabelecem um limite máximo de horas de trabalho semanal e diário, visando proteger os direitos dos trabalhadores enquanto permitem certa flexibilidade para atender às demandas de diferentes setores econômicos."
            }
        ]
    },
    {
        enunciado: "Você se adapta bem com essa carga-horária?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: " Adaptar-se bem à carga horária pode ser um sinal de eficiência e habilidade em gerenciar seu tempo e suas responsabilidades no trabalho. "
            },
            {
                texto: "Não",
                afirmacao: "A carga horária desafiadora no Brasil, em comparação com outros países, é uma realidade para muitos trabalhadores brasileiros. Em diversos setores da economia, é comum encontrar jornadas extensas, muitas vezes excedendo o limite legal de 44 horas semanais. Além disso, a falta de regulamentação eficaz e fiscalização adequada pode levar à prática de horas extras não remuneradas, aumentando ainda mais a carga de trabalho dos brasileiros."
            }
        ]
    },
    {
        enunciado: "Você se você pudesse mudaria isto no brasil?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: " Em nações europeias, por exemplo, é comum encontrar uma cultura de trabalho que valoriza o equilíbrio entre vida profissional e pessoal, com jornadas de trabalho mais curtas e um maior respeito pelo direito ao descanso e lazer."
            },
            {
                texto: "Não",
                afirmacao: "Reconhecer e valorizar esses aspectos positivos pode ajudar os trabalhadores a aproveitar ao máximo suas horas de trabalho adicionais, promovendo tanto o crescimento profissional quanto o bem-estar pessoal."
            }
        ]
    },
    {
        enunciado: "O que você acha sobre a carga-horária no brasil?",
        alternativas: [
            {
                texto: "Acho bom!",
                afirmacao: "Trabalhar horas extras no Brasil pode trazer diversos benefícios significativos para os trabalhadores. Primeiramente, oferece uma oportunidade valiosa para aprender e crescer profissionalmente. Nas indústrias dinâmicas como tecnologia e empreendedorismo, o tempo adicional no trabalho permite uma imersão mais profunda em projetos e aquisição de novas habilidades. Isso é especialmente importante em um mercado de trabalho competitivo, onde o desenvolvimento contínuo é essencial para se manter à frente. "
            },
            {
                texto: "Não acho bom",
                afirmacao: " A carga horária desafiadora no Brasil pode ter diversos impactos negativos na vida dos trabalhadores, incluindo o aumento do estresse, a diminuição da qualidade de vida, e até mesmo problemas de saúde relacionados ao excesso de trabalho, como a síndrome de burnout."
            }
        ]
    },
    {
        enunciado: "é eficientre para você?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Trabalhar mais horas pode preparar os profissionais para enfrentar ambientes profissionais desafiadores. Em setores competitivos como finanças e consultoria, a experiência de lidar com uma carga horária estendida pode ser inestimável. Isso ajuda os profissionais a desenvolver habilidades essenciais, como gerenciamento de tempo e resolução de problemas, que são fundamentais para o sucesso em ambientes de trabalho competitivos."
            },
            {
                texto: "Não",
                afirmacao: "Essa carga horária pode afetar negativamente a produtividade e a eficiência no trabalho, uma vez que trabalhadores sobrecarregados tendem a ter menor concentração e energia para realizar suas tarefas de forma eficaz."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
