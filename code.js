//хочет много зарабатывать
function an11() {
  //запрещаем дальнейшие нажатия на кнопки
  a10.disabled=true;
  a11.disabled=true;
  a10.style.visibility='hidden';
  //показываем следующий вопрос
  q2.innerHTML ='<p>Вы часто совершаете ошибки или сомневаетесь в себе?</p><button id = \'a21\' onclick=\'an21()\'>Да</button><button id = \'a20\' onclick=\'an20()\'>Нет</button>'
}

//не хочет много зарабатывать
function an10() {
  //запрещаем дальнейшие нажатия на кнопки
  a10.disabled=true;
  a11.disabled=true;
  a11.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Delphi</p>';
}

//Часто сомневается
function an21() {
  //получаем доступ к кнопкам
  var a20 = document.getElementById('a20');
  var a21 = document.getElementById('a21');
  //запрещаем дальнейшие нажатия на кнопки
  a20.disabled=true;
  a21.disabled=true;
  a20.style.visibility='hidden';
  //показываем следующий вопрос
  q3.innerHTML = '<p>Хотели ли бы вы заняться веб разработкой?</p> <button id = \'a31\' onclick=\'an31()\'>Да</button> <button id = \'a30\' onclick=\'an30()\'>Нет</button>';
}

//Не часто сомневается
function an20() {
  //получаем доступ к кнопкам
  var a21 = document.getElementById('a21');
  var a20 = document.getElementById('a20');
  // запрещаем дальнейшие нажатия на кнопки
  a20.disabled=true;
  a21.disabled=true;
  a21.style.visibility='hidden';
  // показываем следующий вопрос
  q3.innerHTML = '<p>Вы инженер или математик?</p> <button id = \'a91\' onclick=\'an91()\'>Инженер</button> <button id = \'a90\' onclick=\'an90()\'>Математик</button>';
}

// Есть друзья
function an31() {
  var a30 = document.getElementById('a30');
  var a31 = document.getElementById('a31');
  // запрещаем дальнейшие нажатия на кнопки
  a31.disabled=true;
  a30.disabled=true;
  a30.style.visibility='hidden';
  // показываем следующий вопрос
  q4.innerHTML = '<p>У вас есть друзья программисты?</p> <button id = \'a41\' onclick=\'an41()\'>Да</button> <button id = \'a40\' onclick=\'an40()\'>Нет</button>';
}

// Не часто сомневается
function an30() {
  var a30 = document.getElementById('a30');
  var a31 = document.getElementById('a31');
  // запрещаем дальнейшие нажатия на кнопки
  a30.disabled=true;
  a31.disabled=true;
  a31.style.visibility='hidden';
  // показываем следующий вопрос
  q4.innerHTML = '<p>вы хотите быстро обучиться языку и приступить к работе?</p> <button id = \'a61\' onclick=\'an61()\'>Да</button> <button id = \'a60\' onclick=\'an60()\'>Нет</button>';
}

// Друзья тоже тупят
function an41() {
  var a41 = document.getElementById('a41');
  var a40 = document.getElementById('a40');
  // запрещаем дальнейшие нажатия на кнопки
  a41.disabled=true;
  a40.disabled=true;
  a40.style.visibility='hidden';
  // показываем следующий вопрос
  q5.innerHTML = '<p>Они будут сотрудничать с вами в этой сфере?</p> <button id = \'a51\' onclick=\'an51()\'>Да</button> <button id = \'a50\' onclick=\'an50()\'>Нет</button>';
}

// Друзей нет
function an40() {
  var a41 = document.getElementById('a41');
  var a40 = document.getElementById('a40');
  //запрещаем дальнейшие нажатия на кнопки
  a41.disabled=true;
  a40.disabled=true;
  a41.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — PHP</p>';
}

//Друзья тоже тупят
function an51() {
  var a51 = document.getElementById('a51');
  var a50 = document.getElementById('a50');
  //запрещаем дальнейшие нажатия на кнопки
  a51.disabled=true;
  a50.disabled=true;
  a50.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — JavaScript</p>';
}

//Друзья не тупят
function an50() {
  var a51 = document.getElementById('a51');
  var a50 = document.getElementById('a50');
  //запрещаем дальнейшие нажатия на кнопки
  a51.disabled=true;
  a50.disabled=true;
  a51.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Ruby</p>';
}

//хочет быстро обучиться языку
function an61() {
  var a61 = document.getElementById('a61');
  var a60 = document.getElementById('a60');
  //запрещаем дальнейшие нажатия на кнопки
  a60.disabled=true;
  a61.disabled=true;
  a60.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Python</p>';
}

//Не хочет быстро обучиться языку
function an60() {
  var a61 = document.getElementById('a61');
  var a60 = document.getElementById('a60');
  //запрещаем дальнейшие нажатия на кнопки
  a61.disabled=true;
  a60.disabled=true;
  a61.style.visibility='hidden';
  //показываем следующий вопрос
  q5.innerHTML = '<p>Вам нравится Windows?</p> <button id = \'a71\' onclick=\'an71()\'>Да</button> <button id = \'a70\' onclick=\'an70()\'>Нет</button>';
}

//Нравится Windows
function an71() {
  var a71 = document.getElementById('a71');
  var a70 = document.getElementById('a70');
  //запрещаем дальнейшие нажатия на кнопки
  a71.disabled=true;
  a70.disabled=true;
  a70.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — C#</p>';
}

//Не нравится Windows
function an70() {
  var a71 = document.getElementById('a71');
  var a70 = document.getElementById('a70');
  //запрещаем дальнейшие нажатия на кнопки
  a71.disabled=true;
  a70.disabled=true;
  a71.style.visibility='hidden';
  //показываем следующий вопрос
  q6.innerHTML = '<p>Любите хвататься своим умом?</p> <button id = \'a81\' onclick=\'an81()\'>Да</button> <button id = \'a80\' onclick=\'an80()\'>Нет</button>';
}

//Нравится Windows
function an81() {
  var a81 = document.getElementById('a81');
  var a80 = document.getElementById('a80');
  //запрещаем дальнейшие нажатия на кнопки
  a81.disabled=true;
  a80.disabled=true;
  a80.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Swift</p>';
}

//Не нравится Windows
function an80() {
  var a81 = document.getElementById('a81');
  var a80 = document.getElementById('a80');
  //запрещаем дальнейшие нажатия на кнопки
  a81.disabled=true;
  a80.disabled=true;
  a81.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Perl</p>';
}

//Инженер
function an91() {
  var a91 = document.getElementById('a91');
  var a90 = document.getElementById('a90');
  //запрещаем дальнейшие нажатия на кнопки
  a91.disabled=true;
  a90.disabled=true;
  a90.style.visibility='hidden';
  //показываем следующий вопрос
  q4.innerHTML = '<p>Любите старину?</p> <button id = \'a101\' onclick=\'an101()\'>Да</button> <button id = \'a100\' onclick=\'an100()\'>Нет</button>';
}

//Математик
function an90() {
  var a91 = document.getElementById('a91');
  var a90 = document.getElementById('a90');
  //запрещаем дальнейшие нажатия на кнопки
  a91.disabled=true;
  a90.disabled=true;
  a91.style.visibility='hidden';
  //показываем следующий вопрос
  q4.innerHTML = '<p>Вы интроверт?</p> <button id = \'a111\' onclick=\'an111()\'>Да</button> <button id = \'a110\' onclick=\'an110()\'>Нет</button>';
}

//Любит старину
function an101() {
  var a101 = document.getElementById('a101');
  var a100 = document.getElementById('a100');
  //запрещаем дальнейшие нажатия на кнопки
  a101.disabled=true;
  a100.disabled=true;
  a100.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Pascal</p>';
}

//Не любит старину
function an100() {
  var a101 = document.getElementById('a101');
  var a100 = document.getElementById('a100');
  //запрещаем дальнейшие нажатия на кнопки
  a101.disabled=true;
  a100.disabled=true;
  a101.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Scala</p>';
}

//Интроверт
function an111() {
  var a111 = document.getElementById('a111');
  var a110 = document.getElementById('a110');
  //запрещаем дальнейшие нажатия на кнопки
  a111.disabled=true;
  a110.disabled=true;
  a110.style.visibility='hidden';
  //показываем следующий вопрос
  q5.innerHTML = '<p>Вы собираетесь работать с большим количеством информации?</p> <button id = \'a121\' onclick=\'an121()\'>Да</button> <button id = \'a120\' onclick=\'an120()\'>Нет</button>';
}

//Не интроверт
function an110() {
  var a111 = document.getElementById('a111');
  var a110 = document.getElementById('a110');
  // запрещаем дальнейшие нажатия на кнопки
  a111.disabled=true;
  a110.disabled=true;
  a11.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — С</p>';
}

//будет работать с большим кол-вом информации
function an121() {
  var a121 = document.getElementById('a121');
  var a120 = document.getElementById('a120');
  //запрещаем дальнейшие нажатия на кнопки
  a121.disabled=true;
  a120.disabled=true;
  a120.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — C++</p>';
}

//не будет работать с большим кол-вом информации
function an120() {
  var a121 = document.getElementById('a121');
  var a120 = document.getElementById('a120');
  //запрещаем дальнейшие нажатия на кнопки
  a121.disabled=true;
  a120.disabled=true;
  a121.style.visibility='hidden';
  //выводим результат
  result.innerHTML = '<p>Ваш выбор — Java</p>';
}
