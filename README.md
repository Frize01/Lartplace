<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Projet L'artPlace

Ce projet est un clone de r/place, une expérience sociale collaborative où les utilisateurs peuvent placer des pixels colorés sur une toile partagée. Cette version est construite en utilisant le framework Laravel pour le backend et Vue.js pour le frontend.

## Fonctionnalités

- Système d'authentification des utilisateurs
- Toile partagée où les utilisateurs peuvent placer des pixels colorés
- Gestion des restrictions de placement de pixels par utilisateur

## Installation

1. Clonez le dépôt : `git clone https://github.com/Frize01/Lartplace.git`
2. Accédez au répertoire du projet : `cd Lartplace`
3. Installez les dépendances PHP : `composer install`
4. Copiez le fichier `.env.example` en `.env` et configurez les variables d'environnement telles que la base de données
5. Générez une clé d'application : `php artisan key:generate`
6. Exécutez les migrations pour créer les tables de la base de données : `php artisan migrate`
7. Installez les dépendances Node.js : `npm install`
8. Démarrez le serveur de développement : `php artisan serve`
9. Accédez à l'application dans votre navigateur à l'adresse http://localhost:8000

## Configuration

- Consultez le fichier `.env` pour configurer les paramètres de l'application, tels que la base de données.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE.md pour plus de détails.

# Help

* [Custom Breeze Login](https://dev.to/kingsconsult/customize-laravel-auth-laravel-breeze-registration-and-login-1769)
* Install api laravel : `php artisan install:api`