/*
La sauvegarde se fait a partir d'un fichier JSON "Save" situe dans "data".
Sauvegardes.js va donc lire et ecrire dans ce fichier JSON.

Une liste "questionsState" retiendra l'état des questions :
    Completed : Bonne reponse fournie
    To complete : Question pas encore repondue
    Wrong : Mauvaise reponse
De base, "questionsState" est vide.
C'est en commenant un quiz que la liste va etre initie avec autant de valeur
"To complete" qu'il y a de questions.

Le score n'est pas retenu mais est calcule a partir du nombre de questions "Completed".
*/