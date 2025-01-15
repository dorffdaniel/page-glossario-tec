const descricoes ={
    "Soft Skills": "Soft Skills são habilidades comportamentais que nos ajudam a interagir com as outras pessoas. Incluem comunicação eficaz, trabalho em equipe, empatia, paciencia e resolução de conflitos. Essas habilidades são essenciais para o sucesso profissional e pessoal, pois facilitam relacionamentos harmoniosos e produtivos.",
    "Hard Skills": "Hard Skills referem-se às habilidades técnicas e conhecimentos específicos que podem ser aprendidos. Incluem competências como programação, proficiência em idiomas estrangeiros, operação de máquinas e ferramentas, e qualificações acadêmicas. São geralmente adquiridas por meio de educação formal, cursos ou treinamentos e são essenciais para desempenhar tarefas específicas no ambiente de trabalho.",
    "CRM": "CRM (Customer Relationship Management) é uma estratégia e tecnologia focada no relacionamento com clientes, ajudando a empresa a gerenciar e analisa interaçoes com clientes e possiveis clientes, buscando melhorar o relacionamento e impulsionar vendas.",
    "ERP": "ERP (Enterprise Resource Planning) é um planejamento dos recursos empresariais, pois quando se produz bastante temos que planejar esta produçao, se conecta com outros setores da empresa para fazer troca de informaçoes, quando temos toda informaçao dentro de um unico sistema os erros sao mais dificeis de acontecer.",
    "MES": "MES (Manufacturing Execution System) esta relacionado com a gestao da Produçao da empresa, monitora, rastreia, e controla a fabricaçao em tempo real, garantindo a eficiencia e a qualidade na produçao, ERP e o MES se complementam para fornecer soluçao completa do gerenciamento da produçao.",
    "SCM": "SCM (Supply Chain Management) é a gestao que acontece para produzir e entregar a um cliente, desde a obtençao da materia prima até a entrega do consumidor final, visando otimizar o processo e reduzir custos, é como garantir que todo mundo na 'corrente' (suprimento, fabrica, transporte) estejam trabalhando bem juntos.",
    "WMS": "WMS (Warehouse Management System) é um sistema que gerencia as operações de armazém, incluindo o controle de estoque e movimentação de mercadorias.",
    "HRM": "HRM (Human Resource Management) é a area responsavel por cuidar das pessoas dentro da organizaçao, gerencia tudo que envolve o trabalho e os trabalhadores, garantindo que eles estejam motivados, produtivos e alinhados ao objetivo da empresa, atua no recrutamento, treinamento, desenvolvimento, gestao de beneficio e salario.",
    "BIG DATA": "Big Data refere-se ao processamento e análise de grandes volumes de dados para identificar padrões e tendências, um exemplo simples é a Netflix ela analisa o que o usuario assiste e recomenda series/filmes com base nos seus habitos, em outra palavras como um 'superpoder' para tomar decisões mais rápidas e inteligentes em áreas como negócios, saúde, tecnologia e muito mais",
    "Cibersecurity": "Cibersecurity envolve a proteção de sistemas, redes e dados contra ataques digitais.",
    "IA": "IA (Inteligência Artificial) é a simulação de processos de inteligência humana por sistemas computacionais, como reconhecimento de fala, tomada de decisões e tradução de idiomas.",
    "IOT": "IOT (Internet of Things) é a interconexão de dispositivos físicos à internet, permitindo a troca de dados, exemplo em uma casa inteligente quando se tem uma geladeira que avisa no seu celular que acabou o leite, um aspirador-robô limpa o chão enquanto você está no trabalho, se torna util pois economiza o tempo, tem mais conforto e é eficiente",
    "IIOT": "IIOT (Industrial Internet of Things) é a aplicação da IOT em ambientes industriais para otimizar processos, pense assim é como  se as máquinas tivessem 'olhos' (sensores), 'ouvidos' (monitoramento) e 'cérebro' (internet e inteligência artificial) para ajudar a fazer o trabalho melhor.",
    "AR": "AR (Augmented Reality) é a tecnologia que sobrepõe elementos virtuais ao mundo real, como o celular, tablet ou oculos especiais, um exemplo bem simples de AR  que temos é o jogo do Pokemon Go onde podemos ver um Pokémon no quarto ou na rua pela tela do celular ",
    "VR": "VR (Virtual Reality) é a criação de ambientes digitais imersivos que simulam a realidade, Ou seja, você 'sai' do mundo real e entra em um mundo totalmente virtual.",
    "B2B": "B2B (Business to Business) refere-se a um negócio que vendem produtos ou serviços para outros negócios. É um tipo de transação comercial onde uma empresa vende para outra empresa, e não para o consumidor final, um exemplo Uma empresa desenvolve um software de gestão empresarial (como ERP) e vende para outras empresas que precisam de uma ferramenta para controlar seu estoque, finanças ou vendas.",
    "B2C": "B2C (Business to Consumer) refere-se a transações comerciais entre empresas e consumidores finais, basicamente qualquer coisa que você compra como pessoa fisica de uma loja, site ou marca é B2C.",
    "H2H": "H2H (Human to Human) enfatiza a interação direta entre pessoas, sem intermediários, ao invés de apenas focar em transações de negócios, o H2H valoriza construir relacionamentos reais entre as pessoas, criando uma experiência mais pessoal e confiável.",
    "NFC": "NFC (Near Field Communication) é uma tecnologia de comunicação sem fio de curto alcance, dispositivos próximos dois dispositivos com NFC (por exemplo, um celular e uma máquina de pagamento) são aproximados, são prático , rápido e seguros",
    "RFID": "RFID (Radio Frequency Identification) utiliza ondas de rádio para identificar e rastrear objetos, é um pequeno chip que contém informações, como um número de identificação único. Ele pode ser fixado em um objeto, animal ou pessoa, um exemplo é quando nao precisamos parar o carro em um pedagio pois o pagamento ja é efetuado quando se passa e isso acontece através do RFID.",
    "BAR CODE": "Código de barras é uma representação gráfica de dados que pode ser lida por scanners, ele contém dados como o preço, o número do produto, ou informações de identificação, basicamente, ele funciona como uma 'identidade' única para cada produto, ajudando a organizar e rastrear itens de forma automática.",
    "QR CODE": "QR Code é um tipo de código de barras bidimensional que armazena informações, em vez de ser feito de barras e espaços como o código de barras tradicional, o QR Code é formado por quadrados pretos e brancos organizados em um padrão, dentro do código, você pode guardar links, textos, números, ou até dados mais complexos, como informações de pagamento ou localização e é tao usado pois armazena mais informaçoes e é facil de usar",
    "Blockchain": "O Blockchain é como um livro-caixa digital onde todas as transações ou dados registrados ficam armazenados de forma segura, transparente e impossível de alterar, Ele é a tecnologia que sustenta moedas digitais, registrando todas as transações.",
    "Data Science": "Data Science é a área que utiliza métodos científicos para extrair conhecimento de dados, exemplo quando a Netflix ou o Spotify sugerem filmes ou músicas que você pode gostar? Isso é Ciência de Dados!.",
    "Cloud Computing": "é a ideia de usar a internet para acessar recursos como armazenamento, processamento, e aplicativos, sem precisar ter tudo no seu computador ou em um servidor local, exemplos usar Google Drive, OneDrive ou iCloud para salvar e acessar fotos, documentos e vídeos e serviços de streaming entregando conteúdo sem precisar armazenar localmente.  ",
    "Deep Learning": "Deep Learning é um tipo avançado de inteligência artificial (IA) que imita o funcionamento do cérebro humano para aprender e resolver problemas. Ele usa redes neurais artificiais (matemáticas, inspiradas no cérebro) para analisar dados complexos, como imagens, sons e textos, sendo usado em aplicativos como Google Fotos para identificar rostos ou objetos em fotos. "
}

document.querySelectorAll('.btn').forEach((botao)=>{
    botao.addEventListener('click', ()=>{
        const termo = botao.getAttribute('data-term');
        const descricao = descricoes[termo];
        const resultado = document.querySelector('.res');
        resultado.innerHTML = descricao || "descriçao indisponivel";
        
       ;
    })
})

/*const meuObservador = new IntersectionObserver((entrar)=>{
    entrar.forEach((entre)=>{
        if(entre.isIntersecting){
            entre.target.classList.add('show');
        }else{
            entre.target.classList.remove('show');
        }
    })
});

const elementos = document.querySelectorAll('.hidden');

elementos.forEach((evento)=> meuObservador.observe(evento));
*/

const meuObservadorMostrar = new IntersectionObserver((entrar)=>{
    entrar.forEach((entre)=>{
        if(entre.isIntersecting){
            entre.target.classList.add('show');
        }else{
            entre.target.classList.remove('show');
        }
    })
})

const elemento = document.querySelector('.mostrar');
if(elemento){
    meuObservadorMostrar.observe(elemento);
}

const obervarEfeito = new IntersectionObserver((evento)=>{
    evento.forEach((event)=>{
        if(event.isIntersecting){
            event.target.classList.add('efeitoAparecer');
        }else{
            Event.target.classList.remove('efeitoAparecer');
        }
    })
})

const efeito = document.querySelector('.efeito');
if(efeito){
    obervarEfeito.observe(efeito);
}