//Le cambié el nombre a las variables por unos mas entendibles, 
//agregué async a la función para que funcione el await
//modifique los parametros en las funciones para que lean los nuevos nombres asignados a las vars
//corregí las referencias de los queryselectors para que llamen los elementos correctamente
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const paragraphname = document.querySelector('.name');
const blog = document.querySelector('.blog');
const location1 = document.querySelector('.location');

async function displayUser(username) {
  paragraphname.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  paragraphname.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  location1.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  paragraphname.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);