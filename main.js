function share() {
  if (navigator.share) {
    navigator.share({
      title: 'Linktree',
      text: 'Linktree By Widadi',
      url: 'https://ediywidadi.github.io/linktreev2/'
    })
    .then(() => console.log('Berhasil membagikan link'))
    .catch(error => console.error('Error sharing:', error));
  } else {
    alert('Sharing tidak didukung pada perangkat ini');
  }
}
