// Script para inicializar o seletor horizontal e manipular a barra de navegação

// Função para inicializar o seletor horizontal e manipular eventos
function inicializarSeletor() {
    // Seleciona o seletor horizontal e os itens da barra de navegação usando jQuery
    var seletor = $(".hori-selector");
    var itens = $("#navbarSupportedContent li");

    // Função para atualizar o seletor com base no item ativo
    function atualizarSeletor(item) {
        var posicaoItem = item.position();
        seletor.css({
            "top": posicaoItem.top + "px",
            "left": posicaoItem.left + "px",
            "height": item.innerHeight() + "px",
            "width": item.innerWidth() + "px"
        });
    }

    // Manipulador de eventos para cliques nos itens da barra de navegação
    itens.on("click", function () {
        itens.removeClass("active");
        $(this).addClass("active"); // jQuery: Adiciona a classe 'active' ao item clicado
        atualizarSeletor($(this));
    });

    // Manipulador de eventos para redimensionamento da janela
    $(window).on("resize", function () {
        var itemAtivo = $("#navbarSupportedContent li.active");
        atualizarSeletor(itemAtivo);
    });

    // Manipulador de eventos para o botão de alternância da barra de navegação
    $(".navbar-toggler").on("click", function () {
        $(".navbar-collapse").slideToggle(300); // jQuery: Anima a exibição/ocultação da barra de navegação
        setTimeout(function () {
            atualizarSeletor($("#navbarSupportedContent li.active"));
        });
    });

    // Atualiza o seletor ao iniciar
    atualizarSeletor($("#navbarSupportedContent li.active"));
}

// Aguarda o documento ser totalmente carregado
$(document).ready(function () {
    // Chama a função de inicialização após um pequeno atraso
    setTimeout(function () {
        inicializarSeletor();
    });
});

// Adiciona a classe 'active' na página atual usando jQuery
jQuery(document).ready(function ($) {
    var caminhoURL = window.location.pathname.split("/").pop();
    if (caminhoURL == '') {
        caminhoURL = 'index.html';
    }
    var linkAtivo = $('#navbarSupportedContent ul li a[href="' + caminhoURL + '"]');
    linkAtivo.parent().addClass('active'); // jQuery: Adiciona a classe 'active' ao item correspondente
});
