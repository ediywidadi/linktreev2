function share() {
  if (navigator.share) {
    navigator.share({
      title: 'Linktree',
      text: 'Linktree By Widadi',
      url: 'https://www.contoh.com'
    })
    .then(() => console.log('Berhasil membagikan link'))
    .catch(error => console.error('Error sharing:', error));
  } else {
    alert('Sharing tidak didukung pada perangkat ini');
  }
}
