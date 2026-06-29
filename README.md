# Formation-angular-seb
Initiation au developpement front avec angular 

# Installation

Angular a besoin de Nodejs pour fonctionner (CLI, build, serveur de dev)
- Telecharge la version LTS 
- Vérifie l'intallations node -v   npm-v
- Vérifie la compatibilité de version avec Angular (à date, Angular 18+ demande Node 18.19+ ou 20+)
- install Angular CLI

npm install -g @angular/cli
ng version


# Étape 1 — Les fondamentaux Angular
On démarre ta formation Angular. L'idée de cette étape 1 : te donner les bases minimales pour comprendre comment une app Angular est construite et comment elle communique avec le HTML. Pas besoin de tout maîtriser à 100% dès maintenant, l'objectif est surtout que les mécanismes de base deviennent des réflexes avant qu'on enchaîne sur des choses plus complexes (services, RxJS, etc.).

## Objectifs
- Comprendre l'architecture d'une app Angular standalone (sans NgModule)
- Maîtriser les 4 types de data binding
- Être capable de créer un composant de zéro et de le brancher dans l'app

## Concepts abordés
### Composants (@Component)
C'est l'unité de base d'Angular : une classe TypeScript (la logique/l'état) ,un template HTML (la vue),  un fichier css (scss) liés par un decorator.

@Component({
  selector: 'app-profile-card',   // le tag HTML qu'on pourra utiliser ailleurs
  standalone: true,                // pas besoin de NgModule (approche moderne)
  imports: [FormsModule],          // dépendances du composant (ex: ngModel)
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  // ici  tes propriétés et méthodes = l'état et le comportement du composant
}

### Bindings
- Interpolation {{ }} afficher une valeur dans le texte du HTML.

- Property binding [ ] pour lier une propriété HTML (src, class, disabled...) à une variable TS, la différence avec l'interpolation est qu'ici on lie un attribut, pas du texte brut.

- Event binding ( ) comme son nom l'indique, on réagit à une action utilisateur (click, input, etc.) en appelant une méthode du composant.

- Two-way binding [( )]  combine les deux précédents. Nécessite d'importer `FormsModule` dans le composant — si tu vois une erreur du type "ngModel n'est pas reconnu", c'est probablement cet import qui manque. 

### Cycle de vie :
le cycle de vie d’un composant (component lifecycle) correspond aux différentes étapes que traverse un composant : création -> rendu -> mises à jour -> destruction.

concentrons pour l'instant sur ngOnInit()
execute le code une seule fois quand le composant est pret à etre initialisé.
Concretement Angular crée le composant, injecte les dependances (constructor), initialise les proprietés (@input), appelle ngOninit
## Mini-projet
Carte de profil interactive (voir profile-card.component.ts)

Tu vas créer un composant Profile-card Component qui affiche une carte de profil (nom, bio, statut, avatar) et qui permet de la modifier en direct.

Voir le code complet dans :
- "profile-cards" (ou profile-card.component.ts")
- "profile-card.html"
- "profile-card.component.css"

Commandes pour démarrer le terminal vs studio:

ng new profile-card-app --standalone --routing=false --style=css   les routes seront vues dans une prochaines etapes
choisis css , dis non ssr pour l'instant et non aux tools ia
cd profile-card-app
ng generate component profile-card
ng serve


Déclare ProfileCardComponent dans les imports de app.component.ts, et d'ajouter <app-profile-card></app-profile-card> dans app.component.html pour l'afficher.

import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

## Exercices à faire

1. Ajoute un champ `age` (number) modifiable via `[(ngModel)]`, et affiche "majeur" ou "mineur" en fonction de la valeur (utilise un property binding sur une classe CSS, comme pour le statut en ligne/hors ligne).
2. Ajoute un bouton "Réinitialiser" qui remet `name`, `bio` et `age` à leurs valeurs par défaut (event binding).
3. Ajoute un `<select>` permettant de choisir un statut parmi 3 valeurs (`en ligne`, `absent`, `hors ligne`), bindé en two-way avec une variable `status`.
4. ajoute un status occuped
5. désactive le bouton "Changer statut" si le champ `name` est vide (property binding `[disabled]`).

Crée toi un repos privé et ajoute moi en collaborateur

