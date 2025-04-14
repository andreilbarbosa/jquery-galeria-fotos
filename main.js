$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoNovaImagem}"  />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" alt="Ver imagem em tempo real" target="_blank">
                    Ver imagem em tempo real
                </a>    
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(0o500);
        $('#endereco-imagem').val('');
    })
})

