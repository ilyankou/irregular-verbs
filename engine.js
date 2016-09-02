/**
 * Model and controller for the Irregular Verbs web app
 *
 * @author Ilya Ilyankou
 * @version 0.9
 */

var index = 0; // index of verb in dictionary
var form = 0;  // first, second or third (0, 1 or 2 respectively)
var correct = 0; // counter of correct answers
var altogether = 0;  // counter of all attempts
var inputTag = '<input type="text" id="myInput" autocomplete="off">';

// Initializing the dictionary
var dict =
[
	['be', 'was/were', 'been', 'быть'],
	['beat', 'beat', 'beaten', 'бить'],
	['become', 'became', 'become', 'становиться'],
	['begin', 'began', 'begun', 'начинать'],
	['bend', 'bent', 'bent', 'гнуть'],
	['bite', 'bit', 'bitten', 'кусать'],
	['blow', 'blew', 'blown', 'дуть'],
	['break', 'broke', 'broken', 'ломать, разрушать'],
	['bring', 'brought', 'brought', 'приносить'],
	['build', 'built', 'built', 'строить'],
	['burn', 'burned/burnt', 'burned/burnt', 'гореть'],
	['burst', 'burst', 'burst', 'лопаться, взрываться'],
	['buy', 'bought', 'bought', 'покупать'],
	['catch', 'caught', 'caught', 'ловить'],
	['choose', 'chose', 'chosen', 'выбирать'],
	['come', 'came', 'come', 'приходить, прибывать'],
	['cost', 'cost', 'cost', 'стоить'],
	['cut', 'cut', 'cut', 'резать'],
	['dig', 'dug', 'dug', 'копать, рыть'],
	['do', 'did', 'done', 'делать'],
	['draw', 'drew', 'drawn', 'рисовать, чертить'],
	['dream', 'dreamed/dreamt', 'dreamed/dreamt', 'мечтать'],
	['drink', 'drank', 'drunk', 'пить'],
	['drive', 'drove', 'driven', 'ездить'],
	['eat', 'ate', 'eaten', 'есть, поглощать'],
	['fall', 'fell', 'fallen', 'падать'],
	['feed', 'fed', 'fed', 'кормить'],
	['feel', 'felt', 'felt', 'чувствовать'],
	['fight', 'fought', 'fought', 'драться, сражаться'],
	['find', 'found', 'found', 'находить'],
	['fly', 'flew', 'flown', 'летать'],
	['forget', 'forgot', 'forgotten', 'забывать'],
	['forgive', 'forgave', 'forgiven', 'прощать'],
	['freeze', 'froze', 'frozen', 'замерзать'],
	['get', 'got', 'got', 'получать'],
	['give', 'gave', 'given', 'давать'],
	['go', 'went', 'gone/been', 'идти'],
	['grow', 'grew', 'grown', 'расти'],
	['hang', 'hung', 'hanged/hung', 'вешать'],
	['have', 'had', 'had', 'иметь'],
	['hear', 'heard', 'heard', 'слышать'],
	['hide', 'hid', 'hidden', 'прятаться'],
	['hit', 'hit', 'hit', 'ударять'],
	['hold', 'held', 'held', 'держать'],
	['hurt', 'hurt', 'hurt', 'причинять боль'],
	['keep', 'kept', 'kept', 'держать, хранить'],
	['kneel', 'knelt', 'knelt', 'становиться на колени'],
	['know', 'knew', 'known', 'знать'],
	['lay', 'laid', 'laid', 'лежать'],
	['lead', 'led', 'led', 'вести, влиять, руководить'],
	['learn', 'learned/learnt', 'learned/learnt', 'учиться'],
	['leave', 'left', 'left', 'покидать, оставлять'],
	['lend', 'lent', 'lent', 'одалживать, давать взаймы'],
	['let', 'let', 'let', 'позволять'],
	['lie', 'lay', 'lain', 'обманывать, лгать'],
	['light', 'lit', 'lit', 'освещать'],
	['lose', 'lost', 'lost', 'терять'],
	['make', 'made', 'made', 'делать, создавать'],
	['mean', 'meant', 'meant', 'означать'],
	['meet', 'met', 'met', 'встречать'],
	['pay', 'paid', 'paid', 'платить'],
	['put', 'put', 'put', 'класть'],
	['read', 'read', 'read', 'читать'],
	['ride', 'rode', 'ridden', 'ехать верхом'],
	['ring', 'rang', 'rung', 'звонить'],
	['rise', 'rose', 'risen', 'восходить, поднимать'],
	['run', 'ran', 'run', 'бежать'],
	['say', 'said', 'said', 'говорить, произносить'],
	['see', 'saw', 'seen', 'видеть'],
	['sell', 'sold', 'sold', 'продавать'],
	['send', 'sent', 'sent', 'отправлять'],
	['set', 'set', 'set', 'устанавливать'],
	['shake', 'shook', 'shaken', 'трясти'],
	['shine', 'shone', 'shone', 'светить, озарять'],
	['shoot', 'shot', 'shot', 'стрелять'],
	['show', 'showed', 'shown', 'показывать'],
	['shut', 'shut', 'shut', 'закрывать'],
	['sing', 'sang', 'sung', 'петь'],
	['sink', 'sank', 'sunk', 'тонуть, погружаться'],
	['sit', 'sat', 'sat', 'сидеть'],
	['sleep', 'slept', 'slept', 'спать'],
	['slide', 'slid', 'slid', 'скользить'],
	['smell', 'smelled/smelt', 'smelled/smelt', 'нюхать, пахнуть'],
	['speak', 'spoke', 'spoken', 'говорить'],
	['spend', 'spent', 'spent', 'тратить'],
	['spill', 'spilled/spilt', 'spilled/spilt', 'проливать'],
	['spoil', 'spoiled/spoilt', 'spoiled/spoilt', 'портить, наносить ущерб'],
	['stand', 'stood', 'stood', 'стоять'],
	['steal', 'stole', 'stolen', 'воровать, красть'],
	['stick', 'stuck', 'stuck', 'вонзать, приклеивать'],
	['swim', 'swam', 'swum', 'плавать'],
	['take', 'took', 'taken', 'брать'],
	['teach', 'taught', 'taught', 'учить'],
	['tear', 'tore', 'torn', 'рвать'],
	['tell', 'told', 'told', 'говорить, сообщать'],
	['think', 'thought', 'thought', 'думать'],
	['throw', 'threw', 'thrown', 'бросать'],
	['understand', 'understood', 'understood', 'понимать'],
	['wake', 'woke', 'woken', 'просыпаться, бодрствовать'],
	['wear', 'wore', 'worn', 'носить'],
	['win', 'won', 'won', 'выиграть'],
	['write', 'wrote', 'written', 'писать'],
	['can', 'could', 'been able', 'мочь, уметь, быть способным'],
	['must', 'had to', 'had to', 'должен, обязан'],
	['bet', 'bet', 'bet', 'делать ставку'],
	['misunderstand', 'misunderstood', 'misunderstood', 'неправильно понимать'],
	['broadcast', 'broadcast', 'broadcast', 'вещать (по радио, ТВ)'],
];

function generateVerb() {
  hideAnswer();

	index = Math.floor(Math.random() * dict.length);
	form = Math.floor(Math.random() * 3);

  var entry = dict[index];

  $('#first').text(entry[0]);
  $('#second').text(entry[1]);
  $('#third').text(entry[2]);
  $('#russian').text(entry[3]);

  switch (form) {
    case 0:
      $('#first').html(inputTag);
      break;
    case 1:
      $('#second').html(inputTag);
      break;
    default:
    $('#third').html(inputTag);
  }

	$('#myInput').focus();
}


function checkVerb() {
	var myInput = $("#myInput").val().trim().toLowerCase();
  myInput = '$' + myInput + '$';

  var correctInput = '$' + dict[index][form].replace('/', '$') + '$';
  var timer = 0;


  if (correctInput.indexOf(myInput) > -1) {
    correct++;
    $("#myInput").css({backgroundColor: 'YellowGreen'});
    timer = 1500;
  } else {
    $('#myInput').css({backgroundColor: 'DarkSalmon'});
    showAnswer();
    timer = 3000;
  }

  setTimeout(generateVerb, timer);

  updateCounters();

}

function updateCounters() {
  $('#counterCorrect').text(correct);
  $('#counterAltogether').text(altogether);
}

function showAnswer() {
  $('#answer').text(dict[index][form]).show();
}

function hideAnswer() {
  $('#answer').hide();
}

$(document).ready(function() {
	generateVerb();

	$("form").submit(function () {
    altogether++;
		if ($("#myInput").attr("value") == "") {return false;}
		$("#myInput").attr({disabled: 'disabled'});
		checkVerb();
		return false;
	});
});
