document.addEventListener('DOMContentLoaded', function () {
  const avatar = document.getElementById('User');

  const zoneNom = document.getElementById('userName');

  const zoneEmail = document.getElementById('userEmail');

  const boutonDeconnexion = document.getElementById('logoutButton');

  const utilisateurSauvegarde = localStorage.getItem('utilisateur');

  console.log('Fichier compte.js chargé.');
  console.log('Élément User trouvé :', avatar);
  console.log('Utilisateur sauvegardé :', utilisateurSauvegarde);

  if (!utilisateurSauvegarde) {
    console.log('Aucun utilisateur trouvé.');

    window.location.href = 'inscription.html';
    return;
  }

  const utilisateur = JSON.parse(utilisateurSauvegarde);

  const prenom = utilisateur.prenom || '';

  if (avatar && prenom !== '') {
    const premiereLettre = prenom.trim().charAt(0).toUpperCase();

    avatar.textContent = premiereLettre;
  }

  if (zoneNom) {
    zoneNom.textContent = prenom;
  }

  if (zoneEmail) {
    zoneEmail.textContent = utilisateur.email;
  }

  if (boutonDeconnexion) {
    boutonDeconnexion.addEventListener('click', function () {
      localStorage.removeItem('utilisateur');

      window.location.href = 'inscription.html';
    });
  }
});
