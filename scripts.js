function Translate404() {
    document.getElementById('title').innerHTML = 'Page not Found - Error 404';
    document.getElementById('ERT').innerHTML = 'Error 404!';
    document.getElementById('p').innerHTML = 'An Error Occured, Page not found';
}
function Translate404fr() {
    document.getElementById('title').innerHTML = 'Page non trouveé - Erreur 404';
    document.getElementById('ERT').innerHTML = 'Erreur 404!';
    document.getElementById('p').innerHTML = 'La page n\'a pas été trouvée';
}
function TranslateContact() {
    document.getElementById('Why').innerHTML = 'Why ?';
    document.getElementById('Fhint').innerHTML = 'Need any help for a Project ?';
    document.getElementById('Shint').innerHTML = 'Any ideas of project ?';
    document.getElementById('ButtonForm').innerHTML = 'Send';
}
function TranslateContactfr() {
    document.getElementById('Why').innerHTML = 'Pourquoi ?';
    document.getElementById('Fhint').innerHTML = 'Besoin d\'aide pour un projet ?';
    document.getElementById('Shint').innerHTML = 'Des idées de projets ?';
    document.getElementById('ButtonForm').innerHTML = 'Envoyer';
}
/* Only Translate 404 And Contact because :
1. Simple since not a lot of Text
2. Because in "Index.html" & "Projets.html" There's some letters with special Style Code that cannot be done with Javascript or i just Don't know how to do it
*/
