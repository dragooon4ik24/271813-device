var contactsLink = document.querySelector('.contacts__link');
var writeUs = document.querySelector('.write-us');

var userName = writeUs.querySelector('.write-us__name');
var userEmail = writeUs.querySelector('.write-us__email');
var userText = writeUs.querySelector('.write-us__textarea');
var writeUsClose = writeUs.querySelector('.write-us__close');
var writeUsForm = writeUs.querySelector('.write-us__form');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';


try {
  storageName = localStorage.getItem('userName');
  storageEmail = localStorage.getItem('userEmail');
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUs.classList.add('write-us--show');

  if (storageName && storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userText.focus();
  } else if (storageName) {
    userName.value = storageName;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

writeUsClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUs.classList.remove('write-us--show');
  writeUs.classList.remove('write-us--error');
});

writeUsForm.addEventListener('submit', function(evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    writeUs.classList.remove('write-us--error');
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add('write-us--error');
  } else if (isStorageSupport) {
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('userEmail', userEmail.value);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains('write-us--show')) {
      writeUs.classList.remove('write-us--show');
      writeUs.classList.remove('write-us--error');
    }
  }
});


var contactsMap = document.querySelector('.contacts__map');

var map = document.querySelector('.map-popup');
var mapClose = map.querySelector('.map-popup__close');

contactsMap.addEventListener('click', function(evt) {
  map.classList.add('map-popup--show');
});

mapClose.addEventListener('click', function(evt) {
  map.classList.remove('map-popup--show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains('map-popup--show')) {
      map.classList.remove('map-popup--show');
    }
  }
});
