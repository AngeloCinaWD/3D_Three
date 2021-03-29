3D:three

# Introduzione
All'interno della cartella `Traccia5FE` è presente tutto il materiale occorrente all'implementazione di una scena 3d tramite libreria Three.js.

## How to start the application

- Lanciare un webserver nella cartella `Traccia5FE` e servire il file index.html.

- Ad esempio con PHP:
  > aprire un terminale;
  > entrare nella cartella `Traccia5FE`;
  > lanciare il comando -> php -S localhost:8080;
  > aprire il browser all'indirizzo http://127.0.0.1:8080;
  
- Oppure copiare il contenuto della cartella `Traccia5FE` nella root di Apache2 e visualizzare l'app tramite indirizzo http://127.0.0.1 del browser. 
  


# Svolgimento della traccia 5 Front End:

- E' stata implementata una scena 3d tramite libreria Three.js;
- Il file 3d rappresentato è un file .gltf, aggiunto on run tramite GLTFLoader;
- tramite mouse è possibile muoversi all'interno della scena ed effettuare operazioni di zoom;
- Sono state settate 2 luci che consentono di aumentare il senso di profondità alla scena ed esaltarne la tridimensionalità dell'oggetto. Le luci scelte sono una di tipo HemisphereLight per riprodurre la luce che arriva dall'alto (dal cielo) e una di tipo SpotLight per riprodurre una luce principale.
