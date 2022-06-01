Bonjour

Voici le fichier qui vous donnera les instructions nécessaires à l'utilisation
de notre interpréteur "BASISTIC".

1.Utilisation

Pour utiliser l'interpréteur voous devez premièrement importer de GIT tous les fichiers du projet.
Ensuite il vous suffit d'aller dans le dossier dist et de double clicker sur le fichier main.
A ce moment là une page web s'ouvrira et vous n'aurez plus qu'à écrire votre code en BASISTIC dans
la zone prévu à cet effet à gauche ou bien d'importer un fichier écrit en BASISTIC avec le bouton "Choose file".
Des fichiers de test préfait sont disponible au même endroit que la page main. 
Ensuite il vous suffit de clicker sur le  bouton run et d'observer le résultat dans la zone en haut à droite et
sinon en bas à droite.

2.Pour aller plus loin

Si vous voulez rajouter des instructions au langage BASISTIC c'est possible.
Tout d'abord il vous faut modifier la grammaire intitulé Grammar.g qui se trouve dans le dossier src
puis dans le dossier antlr. Une fois l'instruction ajouté à la grammaire, il faut modifier le fichier visitor.js
afin d'écrire en javascript ce que fera l'instruction ajouté. Le fichier se trouve dans le dossier src. Si vous rajoutez
des fonctions graphique vous aurez peut-être la nécessité de modifié le fichier drawing.js qui se trouve au même endroit que
le fichier visitor.js. Une fois cela fait, vous devrez éxecuter le fichier script.bat (sous windows) ou script.sh (sous linux),
éxécution nécessaire si vous avez modifé la grammaire. Ensuite ouvrez un terminal, allez à la racine du projet et éxécuter
la commande npm run build. Ensuite rouvrez le main (ou actualisez le) et normalement votre instrcution sera utilisable.

3.Si vous n'avez NPM d'installé :
    1.Installation
        Installer Node.js (https://nodejs.org/en/download/) avec les paramètres par défaut.
        Vérifier l’installation en tapant npm -v dans un terminal
        Toujours dans le terminal, aller jusqu’à la racine du projet (dossier où se trouve package.json) et lancer la commande npm install --save-dev webpack puis 
        npm install --save-dev webpack-cli
    2.Utilisation
        Les modules d’ANTLR et les éventuels futurs modules utilisés par le projet sont tous appelés par le script src/index.js qui n’est pas directement utilisable dans un navigateur. Pour générer le fichier dist/main.js, il suffit de taper npm run build depuis la racine du projet.
        Si une erreur se produit, vérifier que le dossier antlr4 se trouve bien dans le dossier node_modules.