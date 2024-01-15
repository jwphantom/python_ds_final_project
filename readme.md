# Documentation de l'Application Web de Diagnostic des Maladies de Bananiers

## Présentation du Projet

Ce projet vise à développer une application web innovante destinée aux agriculteurs camerounais. L'objectif principal est de fournir un outil pratique pour diagnostiquer rapidement et efficacement les maladies des bananiers. En utilisant simplement la caméra de leur téléphone, les agriculteurs peuvent filmer une feuille de bananier, et l'application détermine si la plante est saine ou malade, en identifiant spécifiquement la nature de la maladie.

## Structure du projet

Le projet est divisé en deux dossiers (FrontEnd et BackEnd). Le FrontEnd codé en React et le BackEnd en FastAPI

Structure du BackEnd :

    alembic/
    app/
        init.py
        ###autres fichiers

        api/
            init.py
            ###autres fichiers
        
        models/
            init.py
            ###autres fichiers

        schema/
            ###fichiers de vue

        utils/
            ### fichier de fonction

    media/
    ml/
        labels.txt
        model.h5
    alembic.ini
    main.py

- Le dossier `alembic` contient le configuration des dossiers de gestion de la base de données
- Le dossier `ml` contient le modèle de entrainé de reconnaissance de plantes malades avec le fichiers labals.
- Le dossier `app` contient le code de l'application FastAPI.
- Le sous-dossier `api` contient les fichiers de routage de l'application.
- Le sous-dossier `models` contient les modèles pour la requêtage en BD.
- Le sous-dossier `schema` contient les schema des données en entrée.
- Le sous-dossier `utils` contient des fonctions statique.
- `alembic.ini` initialisation des fichiers alembic
- `main.py` est le point d'entrée de l'application.

## Installation des dépendances

Avant de lancer l'application, assurez-vous d'installer les dépendances nécessaires en utilisant `pip` et le fichier `requirements.txt`. Exécutez la commande suivante à la racine de votre projet :

```shell
pip install -r requirements.txt
```

## Lancement de l'application

```shell
uvicorn main:app --reload
```

## Usage
- James Olongo (https://github.com/jwphantom)
- Arthur fouda (https://github.com/resix237)


## Licence
Ce projet est sous licence MIT
