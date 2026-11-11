/*
  RETOURS DE SPORTIFS - MentalBoost

  Comment ajouter un retour : écris une nouvelle ligne dans la liste ci-dessous,
  au format suivant (les trois parties sont séparées par le signe | ) :

      Prénom N. | Sport | Le texte du retour, tel que la personne l'a écrit

  - Une ligne = un retour. Le plus récent en haut si tu veux qu'il apparaisse en premier.
  - Les lignes qui commencent par # sont ignorées.
  - Tant que la liste est vide, la page Témoignages, la section de l'accueil et le lien
    du menu restent cachés. Dès qu'il y a un retour, tout apparaît tout seul.
  - Ajoute un retour uniquement avec l'accord de la personne (un message WhatsApp suffit),
    et pour un mineur avec l'accord d'un parent. Ne change pas le sens de ses mots.
  - Garde bien les deux accents graves ( ` ) qui entourent la liste, et n'en écris pas dans les textes.
  - Ouvre ce fichier avec un éditeur de texte simple (pas Word ni Pages).
    Sur Mac, dans TextEdit : menu Format > Convertir au format texte.
*/
var RETOURS_TEXTE = `

# Modèle à copier : Prénom N. | Sport | Ce que la personne a écrit sur son accompagnement

Aurélien | 23 ans, footballeur en Ligue 2 à l'US Boulogne | J'avais tendance à me mettre trop de pression et à ne plus savoir où j'allais. L'accompagnement m'a aidé à y voir plus clair, à me fixer des objectifs qui ont du sens pour moi et à mieux gérer les moments de tension. Une vraie écoute, beaucoup de sincérité, je recommande.

Charlotte | 24 ans, footballeuse en Ligue 2 à l'AS Cannes | Un grand merci pour cet accompagnement, ton écoute et la qualité de nos échanges. Au-delà du travail sur le relâchement et la gestion de la pression, cet accompagnement m'a permis de mieux me connaître, de gagner en confiance et surtout de repartir avec des outils que je peux désormais utiliser en toute autonomie. Une belle aventure humaine, autant que sportive. Merci pour ton accompagnement et ta bienveillance !

Florian | 24 ans, footballeur en National 2 au Riviera FC | Je me mettais beaucoup de pression et ça m'empêchait de jouer mon jeu. Les séances m'ont aidé à retrouver confiance en moi, et aujourd'hui je joue enfin libéré. Un accompagnement sincère et à l'écoute, je recommande.

Anthony | 25 ans, footballeur | Un accompagnement vraiment à l'écoute. On a pris le temps de se connaître, et je me suis senti en confiance dès les premières séances. Aujourd'hui, j'arrive les jours de match beaucoup plus serein. Merci pour tout.

Antoine | 25 ans, marathonien | Je ne savais pas vraiment à quoi m'attendre en commençant la préparation mentale, et j'ai été bluffé. Baptiste est à l'écoute, bienveillant, et il adapte vraiment le travail à la personne. Je me suis senti accompagné du début à la fin, et ça se ressent en course. Je recommande à 100 %.

Leland | 31 ans, footballeur | Je tenais à te remercier pour ton accompagnement. J'avais du mal à gérer mes émotions, et elles prenaient trop souvent le dessus sur mes performances. Tu as su trouver les mots justes et me proposer une méthode adaptée, qui m'aide aujourd'hui à garder la maîtrise dans les moments importants.

Valentine | 17 ans, gymnaste de niveau national | Un immense merci pour ce que tu m'as apporté. Ton accompagnement m'a énormément aidée. Tu m'as donné les clés pour mieux me comprendre, avancer et surtout devenir autonome en utilisant tout ce que tu m'as transmis. Merci pour ton écoute, ta bienveillance, ta confiance et surtout ton accompagnement. Tu es un préparateur mental en qui l'on peut vraiment avoir confiance, et je suis très reconnaissante d'avoir fait de la préparation mentale avec toi.

`;

/*
  PHOTOS : pour afficher une photo à côté d'un retour, ajoute une ligne
  Prénom | photos/nom-du-fichier.jpg
  (le fichier doit être dans le dossier "photos"). Uniquement avec l'accord de la personne.
*/
var RETOURS_PHOTOS = `

Aurélien | photos/aurelien.jpg
Charlotte | photos/charlotte.jpg
Florian | photos/florian.jpg
Anthony | photos/anthony.jpg
Antoine | photos/antoine.jpg
Leland | photos/leland.jpg
Valentine | photos/valentine.jpg

`;
