Bonjour

Voici le fichier qui vous donnera les instructions nécessaires à l'utilisation de notre interpréteur "BASISTIC".

I. Utilisation
    1. Importer de GIT tous les fichiers du projet.
    2. Aller dans le dossier dist et ouvrir le fichier main.html. 
    3. Une fois la page web ouverte, écrire son code dans la zone prévu à cette effet à gauche ou bien importer un fichier écrit en BASISTIC avec le bouton "Choose file".
    4. Des fichiers de test préfait sont disponible dans le dossier test.
    5. Clicker sur le bouton RUN et observer le résultat.

II. Pour aller plus loin
    Si vous voulez rajouter des instructions au langage BASISTIC c'est possible. Pour cela il faut :
        1. Modifier la grammaire intitulé Grammar.g qui se trouve dans le dossier src puis dans le dossier antlr.
        2. Une fois l'instruction ajouté à la grammaire, il faut modifier le fichier visitor.js afin d'écrire en javascript ce que fera l'instruction ajouté.
        3. Executer le fichier script.bat (sous windows) ou script.sh (sous linux), éxécution nécessaire si vous avez modifé la grammaire.
        4. Ensuite ouvrir un terminal, aller à la racine du projet et éxécuter la commande npm run build(III).
        5. Rouvrir le main (ou actualisez le) et normalement l'instrcution sera utilisable.

III. Si vous n'avez NPM d'installé :
    1. Installation
        Installer Node.js (https://nodejs.org/en/download/) avec les paramètres par défaut.
        Vérifier l’installation en tapant npm -v dans un terminal
        Toujours dans le terminal, aller jusqu’à la racine du projet (dossier où se trouve package.json) et lancer la commande npm install --save-dev webpack puis 
        npm install --save-dev webpack-cli
    2. Utilisation
        Les modules d’ANTLR et les éventuels futurs modules utilisés par le projet sont tous appelés par le script src/index.js qui n’est pas directement utilisable dans un navigateur. Pour générer le fichier dist/main.js, il suffit de taper npm run build depuis la racine du projet.
        Si une erreur se produit, vérifier que le dossier antlr4 se trouve bien dans le dossier node_modules.