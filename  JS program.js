////////////////////////////////////////////////////////////////////
fetch("http://localhost:4000/api/v1/tokens/authentication", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'aleperaza44@gmail.com',
      password: 'Cattalya03'
    })
  })
  .then(function(response) {
    response.text().then(function(text) {
      console.log("Response:", text);
    });
  }, function(err) {
    console.error("Error:", err);
  });

  ///////////////////////////////////////////////////////////////
  fetch('http://localhost:4000/api/v1/healthcheck', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer '
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  ///////////////////////////////////////////////////////////////
  fetch('http://localhost:4000/api/v1/books', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer IUP5HZI3VZXIDX2GCJGTF5JKPQ '
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
  ///////////////////////////////////////////////////////////////
  fetch("http://localhost:4000/api/v1/books", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer IUP5HZI3VZXIDX2GCJGTF5JKPQ'
    },
    body: JSON.stringify({
      title: "The Catcher in the Rye",
      authors: "J.D. Salinger",
      isbn: "9780316769488",
      publication_date: "March 12, 1951",
      genre: "Fiction",
      description: "A novel about the struggles of teenage angst and alienation, following the life of Holden Caulfield."
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(text => {
    console.log("Response:", text);
  })
  .catch(err => {
    console.error("Error:", err);
  });

/////////////////////////////////////////////////////////////////////
  fetch("http://localhost:4000/api/v1/tokens/password-reset", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer AWOMGUAZM4FZILQQSGIXXIYSRY '
    },
    body: JSON.stringify({
      email: 'aleperaza44@gmail.com'
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(text => {
    console.log("Response:", text);
  })
  .catch(err => {
    console.error("Error:", err);
  });

  //////////////////////////////////////////////////////////////////////
  fetch("http://localhost:4000/api/v1/users/password", {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer AWOMGUAZM4FZILQQSGIXXIYSRY '
    },
    body: JSON.stringify({
      password: 'Spotty#03',
      token: "2ZQKMIHS7OWILGVLJWNMLJ4N74"
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(text => {
    console.log("Response:", text);
  })
  .catch(err => {
    console.error("Error:", err);
  });
  
  