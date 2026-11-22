/*commande html ll tswer lkrheb*/
function changerPhoto(imag_votuire) {
            // Ylawej 3al galerie mta3 el karhba elli nzelt 3liha bark
            const galerie = imag_votuire.closest(".galerie-carte");
            const grande = galerie.querySelector(".photo-grande");
            
            grande.src = imag_votuire.src;
            grande.alt = imag_votuire.alt;

            galerie.querySelectorAll(".imag_votuire img").forEach(img => img.classList.remove("active"));
            imag_votuire.classList.add("active");
        }


/*incrption*/
function validerInscription(event) {
    event.preventDefault();

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const tel = document.getElementById("telephone").value.trim();
    const mdp = document.getElementById("mdp").value;
    const mdpConfirm = document.getElementById("mdp_confirm").value;

    if (tel !== "" ) {
        alert("Veuillez entrer un numéro de téléphone.");
        document.getElementById("telephone").focus();
        return false;
    }

    if (mdp.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        document.getElementById("mdp").focus();
        return false;
    }

    if (mdp !== mdpConfirm) {
        alert("Les deux mots de passe ne sont pas identiques !");
        document.getElementById("mdp_confirm").focus();
        return false;
    }

    alert(`Merci ${prenom} ${nom}, votre inscription a bien été enregistrée !`);
    document.getElementById("inscription").reset();
    return true;
}

/* (commender.html) */
function validerCommande(event) {
    event.preventDefault();

    const modele = document.getElementById("modele").value;
    const typeDemande = document.getElementById("type_demande").value;
    const dateRdv = document.getElementById("date_rdv").value;
    const nomComplet = document.getElementById("nom_complet").value.trim();
    const tel = document.getElementById("telephone_commande").value.trim();

    if (modele === "") {
        alert("Veuillez sélectionner un modèle de véhicule.");
        document.getElementById("modele").focus();
        return false;
    }

    if (nomComplet.length < 3) {
        alert("Veuillez entrer votre nom complet (au moins 3 caractères).");
        document.getElementById("nom_complet").focus();
        return false;
    }

   if (tel !== "" ) {
        alert("Veuillez entrer un numéro de téléphone.");
        document.getElementById("telephone").focus();
        return false;
    }
    if (dateRdv !== "") {
        const aujourdhui = new Date().toISOString().split("T")[0];
        if (dateRdv < aujourdhui) {
            alert("La date du rendez-vous ne peut pas être dans le passé.");
            document.getElementById("date_rdv").focus();
            return false;
        }
    }

    alert(`Merci ${nomComplet} ! Votre demande (${typeDemande}) pour le modèle "${modele}" a bien été enregistrée. Nous vous contacterons au ${tel}.`);
    document.getElementById("commande-form").reset();
    return true;
}