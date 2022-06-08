# BASISTIC
Projet ISTIC

Voici le fichier qui vous donnera les instructions nécessaires à l'utilisation de notre interpréteur "BASISTIC".

## Mise en route et utilisation...

1. Importez les fichiers du projet depuis Git;
2. Rendez-vous dans le répertoire <emplacement_du_projet>/dist et ouvrez main.html;
3. Une fois la page ouverte, vous pouvez saisir votre code dans l'editeur ou bien importer un fichier écrit en BASISTIC avec le bouton "Choose file";
4. Vous pouvez utiliser des fichiers de démonstration dans le répertoire <emplacement_du_projet>/dist/test;
5. Pressez sur le bouton "Run" et observez le résultat.

## Pour aller plus loin

Il est possible d'ajouter des instructions au langage BASISTIC. Pour cela il faut :
1. Rendez-vous dans le répertoire <emplacement_du_projet>/src/antlr et modifiez la grammaire dans le fichier Grammar.g;
2. Une fois votre instruction ajouté à la grammaire, il vous faut generer de nouveaux Parser et Lexer, grâce au fichier script.bat (sous windows) ou script.sh (sous linux). Vous devez executer ce fichier après chaque modification de la grammaire;
3. Rendez-vous ensuite dans le répertoire <emplacement_du_projet>/src/ et ouvrez le fichier visitor.js. Ajoutez une fonction pour traiter la nouvelle instruction que vous venez d'ajouter. 
4. Ouvez un terminal et placez vous dans le à la racine du répertoire du projet. Ensuite, executez la commande suivante :
```npm run build```
5. Ouvrez le fichier main.html et testez vos modifications.

## Si vous n'avez NPM d'installé :
    1. Installation
        Installer Node.js (https://nodejs.org/en/download/) avec les paramètres par défaut.
        Vérifier l’installation en tapant npm -v dans un terminal
        Toujours dans le terminal, aller jusqu’à la racine du projet (dossier où se trouve package.json) et lancer la commande npm install --save-dev webpack puis 
        npm install --save-dev webpack-cli
    2. Utilisation
        Les modules d’ANTLR et les éventuels futurs modules utilisés par le projet sont tous appelés par le script src/index.js qui n’est pas directement utilisable dans un navigateur. Pour générer le fichier dist/main.js, il suffit de taper npm run build depuis la racine du projet.
        Si une erreur se produit, vérifier que le dossier antlr4 se trouve bien dans le dossier node_modules.