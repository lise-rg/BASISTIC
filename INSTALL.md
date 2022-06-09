# BASISTIC
Projet ISTIC

Voici le fichier qui vous donnera les instructions nécessaires à l'utilisation de notre interpréteur "BASISTIC".

Une [version en ligne](https://basistic.000webhostapp.com/) est disponible si vous souhaitez essayer l'application sans avoir à l'installer sur votre machine.

## Mise en route et utilisation...

Dans le cadre de votre première utilisation, vous pouvez suivre les étapes suivantes et ainsi avoir une idée du fonctionnement de l'application.

#### Etape 1
Importez les fichiers du projet depuis dépôt [Github](https://github.com/lise-rg/BASISTIC);

#### Etape 2
Rendez-vous dans le répertoire `<emplacement_du_projet>/dist` et ouvrez `main.html`;

#### Etape 3
Une fois la page ouverte, vous pouvez :
- saisir votre code dans l'editeur (`1`)
- importer un fichier écrit en BASISTIC avec le bouton "Browse" (`2`);

![Image de l'application avec les points d'interet mis en avant](https://media.discordapp.net/attachments/494223712548159498/984083790177652757/Untitled.png)

#### Etape 4
Vous pouvez utiliser des fichiers de démonstration dans le répertoire `<emplacement_du_projet>/dist/test`;

#### Etape 5
Pressez sur le bouton "Run" et observez le résultat.


## Pour aller plus loin...

Il est possible d'ajouter des instructions au langage BASISTIC. Pour cela il faut :

#### Etape 1
Rendez-vous dans le répertoire `<emplacement_du_projet>/src/antlr` et modifiez la grammaire dans le fichier `Grammar.g`;

#### Etape 2
Une fois votre instruction ajouté à la grammaire, il vous faut generer de nouveaux Parser et Lexer, grâce aux fichiers :
- `script.bat` (sous windows);
- `script.sh` (sous linux).
    
Vous devez executer ce fichier après chaque modification de la grammaire;
  
#### Etape 3
Rendez-vous ensuite dans le répertoire `<emplacement_du_projet>/src/` et ouvrez le fichier `visitor.js`. 

Ajoutez une fonction pour traiter la nouvelle instruction que vous venez d'ajouter. 
  
#### Etape 4
Ouvrez un terminal et placez dans la racine du répertoire du projet. Ensuite, executez la commande suivante : `npm run build`

#### Etape 5
Ouvrez le fichier `main.html` et testez vos modifications.


## Pour installer NPM...

#### Installation

Installez [Node.js](https://nodejs.org/en/download/) avec les paramètres par défaut.
    
Vérifiez l’installation en executant dans un terminal : `npm -v`
    
Toujours dans le terminal, placez dans la racine du répertoire du projet et executez successivement les commandes :
- `npm install --save-dev webpack`; 
- `npm install --save-dev webpack-cli`.

#### Utilisation

Les modules d’ANTLR et les éventuels futurs modules utilisés par le projet sont tous appelés par le script src/index.js qui n’est pas directement utilisable dans un navigateur. Pour générer le fichier `<emplacement_du_projet>/dist/main.js`, il suffit de taper `npm run build` depuis la racine du projet.
    
Si une erreur se produit, vérifier que le dossier `antlr4` se trouve bien dans le dossier `<emplacement_du_projet>/node_modules`.
