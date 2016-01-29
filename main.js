var APP = new Firebase('https://wfuturochat.firebaseio.com/');
 
$('#mensagem').keypress(function (e) {
  if (e.keyCode == 13) {

    var msg = $('#mensagem').val();
    var usr = $('#nomeusuario').val();
    APP.push({ nomeusuario: usr, mensagem: msg });

    $('#mensagem').val('');
  }
});

APP.on('child_added', function(snap) {
  var novamensagem = snap.val(); //Nova mensagem recebida.
  carregaMensagem(novamensagem.nomeusuario, novamensagem.mensagem);
});

function carregaMensagem(nome, mensagem) {
  $('<div/>').text(mensagem)
    .prepend($('<strong/>').text(nome + ': '))
    .appendTo($('#mensagens'));

  $('#mensagens')[0].scrollTop = $('#mensagens')[0].scrollHeight;
}