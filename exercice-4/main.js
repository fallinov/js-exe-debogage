(function main() {
	let lancementOk = false;
	let niveauDeCarburant = 17000;

	if (niveauDECarburant >= 20000) {
		console.log('Niveau de carburant vérifié.');
		lancementOk = true;
	} else {
		console.log('AVERTISSEMENT : Carburant insuffisant !');
		lancementOk = false;
	}
}()); // Main IIFE
