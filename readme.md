# ReactNative MasterMind

Ce que j'ai réussi à faire : 

	fonctionnalitées : 

		- je suis parti directement avec React Nativ pour ne pas avoir à adapter mon code ensuite.
		- le jeu est complètement fonctionnel
		- nouveau code codé à chaque début de partie
		- interface graphique assez simpliste
		- indicateur de victoire ou de défaite
		- on peut recommencer une partie

	choix d'implémentation : 

		- v1 une ligne de bouton qui permet de remplir une ligne de 4 boutons
		- v2 comparer cette ligne à un code et afficher nbBienPlacé et nbBonneCouleur
		- v3 plusieurs lignes
		- v4 création d'un code au début de chaque partie
		- v5 afficher les résultats de maniere visuelle (auparavent sous forme de alert())


		- state boardColors genre l'affichage de tout les boutons
		- à chaque fois que l'on appuie sur une couleur, changeNextButton() est appelée
		- on navigue dans boardColors.decodingBoard avec button et row;
		- à chaque fois que l'on atteint la fin d'une ligne, checkCode() est appelée et vérifie le contenu de ma ligne
		- ma fonction checkCode (dans utils.js) : 
			- checkPos() cherche les points bien placés et les enlève et les compte
			- checkColors() cherche si il reste des points de la bonne couleur et les enlève

		  - d'un point de vue performance, cette algorythme nécessite moins d'étape que de regarder si chaque points
		  est bien placé ou de la bonne couleur

		- test.js me permet de tester ma fonction checkCode();


	à implémenter : 

		- scroll suit les boutons que la personne entre
		- score / meilleur score = rapide à faire avec ma variable row
		- afficher le code en cas de défaite
		- niveaux de difficultés 
		- choix des couleurs







Hugo Faugeroux
