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
/* Only Translate 404 because :
1. Simple since not a lot of Text
2. Because in "Index.html" & "Projets.html" There's some letters with special Style Code that cannot be done with Javascript or i just Don't know how to do it
*/
