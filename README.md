###pour commencer on install : node install
# Pour demarrer le serveur, 
### 1) Lancer la commande npx tsc  pour compiler le programme
### 2) Puis lancer la commande node dist/app.js
# Le serveur est lancé et vous pouvez voir votre programme sur notre page web http://localhost:[variable_environnement]/ping

#### Mon programme permet d'écouter le port /ping dans lequel il retourne le get header au format JSON de de la requête
#### Cela retourne une erreur 404 si ecrit pas /ping dans l'url.