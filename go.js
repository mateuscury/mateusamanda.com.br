// Short links: mateusamanda.com.br/<token>  ->  the household's RSVP page.
// The token is the household's private RSVP key; nothing about guests is stored on this site.
(function () {
  var RSVP = 'https://script.google.com/macros/s/AKfycbwc1CApJjTylAtyHS7zBfLYTDVIZ7MKPI-VGb4cKGDxb-CgZRMntJZRCcACw5mAQ9iAvA/exec';
  // Tolerate trailing punctuation or capitals picked up when the link is typed or copied from a message.
  var code = location.pathname.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (/^[a-z0-9]{12}$/.test(code)) {
    var status = document.getElementById('status');
    if (status) status.textContent = 'Abrindo seu convite…';
    location.replace(RSVP + '?id=' + code);
  }
})();
