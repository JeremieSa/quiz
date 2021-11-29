# Quiz - Arthur Jeannot et Jérémie Saingre
Ce projet a pour but l'implémentation d'un quiz, ici sur les libellules, sur une page web. Le langage principale utilisé est le javaScript.

Ce court quiz de quatres questions pourra vous faire tester vos connaissances sur les libellules. En effet ces insectes sont beaucoup plus interessants qu'ils n'y paraissent.

## Comment lancer le projet ?
Il faut en premier lieu installer les dépendances nécessaires à l'execution du projet. Cela se fait avec la commande "npm install" depuis la raçine du projet.

Ensuite, il faut ouvrir **Quiz.html** situé dans **src/vue**. Si vous n'avez pas d'outil pour l'ouvrir, utilisez l'extention *live server* de *VS Code* (*https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer*).

## Fonctionnalités mises en place
### Architecture générale
Ce projet suit une architecture MVC. Nous y avons ajouté des tests dans un dossier **test** et des données dans **src/data**.

### Quiz

### Gestion des questions et réponses
Les questions et réponses sont stockés dans un fichier JSON. Nous ne voulions pas écrire en dur ces valeurs et l'utilisation d'un fichier JSON en local semble être un bon choix.
Cette lecture du fichier JSON est géré avec **QuestionParser.js** situé dans **src/modele**.

Dans une version supérieur du projet, nous pouvons imaginer que ce fichier JSON peut-être récupérer depuis un serveur à l'aide d'une API. Cela ne changerai donc pas le reste de notre code.

### Sauvegarde
Par sauvegarde, nous entendons garder le status de chaque question.
Une question peut avoir le statut :
- (0) To complete : Aucune réponse n'a été donnée
- (1) Wrong : La réponse est mauvaise ou le temps pour y répondre a été atteint sans qu'il y ait de réponses satisfaisantes.
- (2) Completed : Correctement répondue
Grâce à la classe **Sauvegarde.js** située dans **src/modele**, nous stockons ces valeurs dans le local storage à l'aide de la fonctionnalité de clé / valeur.
Une clé correspond à la question en elle-même *(ex: "Vitesse max libellule ? (km/h)")* et la valeur à un état.

### Tests
La classe de tests **Quiz.test.js** est située dans **test**. Vous remarquerez que ces derniers ne s'execute pas. En effet, pour une raison qui nous est inconnue, l'utlisation d'imports afin de tester telles ou telles méthodes d'un fichier JavaScript nous empêche de réaliser les tests. Nous avons cherché des réponses sur internet et il semblerait que nous ne sommes pas les seuls à avoir cette erreur là.

Comme vous pouvez aussi le constater, nous avons voulu tester les méthodes de **Sauvegarde** mais il semblerai que le local storage ne marche pas nativement avec JEST. Nous n'avons pas non plus réussi à comprendre comment l'utiliser dans nos tests.
