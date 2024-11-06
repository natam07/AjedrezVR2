import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x504644);
renderer.setAnimationLoop( animate );
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType( 'local' );
document.body.appendChild( renderer.domElement );

document.body.appendChild( VRButton.createButton( renderer ) );

//Definición de texturas
const a = new THREE.Vector2( 0.5, 0.5 );
const textureTablero = new THREE.TextureLoader().load('img/Tablero.png' );
const textureTableroN = new THREE.TextureLoader().load('img/Normal_Madera.jpg' );
const textureTableroS = new THREE.TextureLoader().load('img/Tablero_solo.png' );
//const textureTorre = new THREE.TextureLoader().load('Modelo/T-Rex/textures/TrexColor01152015.jpeg' );

const geometryTablero = new THREE.BoxGeometry( 15, 15, 0.8 ); 
const materialTablero = new THREE.MeshPhongMaterial( 
    {
        color: 0xffffff,
        map:textureTablero,
        normalMap:textureTableroN,
        normalScale: a,
    } 
); 
const Tablero = new THREE.Mesh( geometryTablero, materialTablero ); 
Tablero.castShadow = false;
Tablero.receiveShadow =true;
scene.add( Tablero );

const geometry = new THREE.PlaneGeometry( 12.5, 12.5 );
const material = new THREE.MeshPhongMaterial( 
    {
        color: 0xffffff,
        map:textureTableroS, 
        side: THREE.DoubleSide
    } 
);
const TableroS = new THREE.Mesh( geometry, material );
scene.add( TableroS );
TableroS.castShadow = false;
TableroS.receiveShadow =true;
TableroS.position.z=0.45;

//PIEZAS BLANCAS
const materialBlancas = new THREE.MeshPhongMaterial( 
    { 
        color: 0xc5b4a0, 
        
    } );

//CARGA DE LAS PIEZAS
//Torre
var loader = new FBXLoader();
loader.load( 'Modelados/Torre.fbx', function ( torreB1 ) {
    if ( torreB1 ) {

        torreB1.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        torreB1.castShadow = true;
        torreB1.receiveShadow =true;
        scene.add( torreB1 );
        torreB1.rotation.x = -(Math.PI/180 * 270);
        torreB1.position.x = 5.3;
        torreB1.position.y = 5.3;
        torreB1.position.z = 0.5;
        torreB1.scale.multiplyScalar(0.6);
} )

//CABALLO
var loader = new FBXLoader();
loader.load( 'Modelados/Caballo.fbx', function ( caballoB1 ) {
    if ( caballoB1 ) {

        caballoB1.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        caballoB1.castShadow = true;
        caballoB1.receiveShadow =true; 
        scene.add( caballoB1 );
        caballoB1.rotation.x = -(Math.PI/180 * 270);
        caballoB1.rotation.y = -(Math.PI/180 * 270);
        caballoB1.position.x = 3.8;
        caballoB1.position.y = 5.3;
        caballoB1.position.z = 0.5;  
        caballoB1.scale.multiplyScalar(0.45);
} )

//Alfil
var loader = new FBXLoader();
loader.load( 'Modelados/Alfil.fbx', function ( alfilB1 ) {
    if ( alfilB1 ) {

        alfilB1.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        alfilB1.castShadow = true;
        alfilB1.receiveShadow =true;
        scene.add( alfilB1 );
        alfilB1.rotation.x = -(Math.PI/180 * 270);
        alfilB1.position.x = 2.3;
        alfilB1.position.y = 5.3;
        alfilB1.position.z = 0.5;
        alfilB1.scale.multiplyScalar(0.55);
} )


//Reina
var loader = new FBXLoader();
loader.load( 'Modelados/Reina.fbx', function ( ReinaB ) {
    if ( ReinaB ) {

        ReinaB.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        ReinaB.castShadow = true;
        ReinaB.receiveShadow =true;
        scene.add( ReinaB );
        ReinaB.rotation.x = -(Math.PI/180 * 270);
        ReinaB.position.x = 0.8;
        ReinaB.position.y = 5.3;
        ReinaB.position.z = 0.5;
        ReinaB.scale.multiplyScalar(0.75);
} )

//Rey
var loader = new FBXLoader();
loader.load( 'Modelados/Rey.fbx', function ( ReyB ) {
    if ( ReyB ) {

        ReyB.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        ReyB.castShadow = true;
        ReyB.receiveShadow =true;
        scene.add( ReyB );
        ReyB.rotation.x = -(Math.PI/180 * 270);
        ReyB.position.x = -0.7;
        ReyB.position.y = 5.3;
        ReyB.position.z = 0.5;
        ReyB.scale.multiplyScalar(0.75);
} )

//Alfil
var loader = new FBXLoader();
loader.load( 'Modelados/Alfil.fbx', function ( alfilB2 ) {
    if ( alfilB2 ) {

        alfilB2.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        alfilB2.castShadow = true;
        alfilB2.receiveShadow =true;
        scene.add( alfilB2 );
        alfilB2.rotation.x = -(Math.PI/180 * 270);
        alfilB2.position.x = -2.3;
        alfilB2.position.y = 5.3;
        alfilB2.position.z = 0.5;
        alfilB2.scale.multiplyScalar(0.55);
} )

//Caballo
var loader = new FBXLoader();
loader.load( 'Modelados/Caballo.fbx', function ( caballoB2 ) {
    if ( caballoB2 ) {

        caballoB2.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        caballoB2.castShadow = true;
        caballoB2.receiveShadow =true;
        scene.add( caballoB2 );
        caballoB2.rotation.x = -(Math.PI/180 * 270);
        caballoB2.rotation.y = -(Math.PI/180 * 270);
        caballoB2.position.x = -3.8;
        caballoB2.position.y = 5.3;
        caballoB2.position.z = 0.5;
        caballoB2.scale.multiplyScalar(0.45);
} )

//Torre
var loader = new FBXLoader();
loader.load( 'Modelados/Torre.fbx', function ( torreB2 ) {
    if ( torreB2 ) {

        torreB2.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialBlancas
            }
        } )
    }
        torreB2.castShadow = true;
        torreB2.receiveShadow =true;
        scene.add( torreB2 );
        torreB2.rotation.x = -(Math.PI/180 * 270);
        torreB2.position.x = -5.3;
        torreB2.position.y = 5.3;
        torreB2.position.z = 0.5;
        torreB2.scale.multiplyScalar(0.6);
} )

//PIEZAS NEGRAS
//PIEZAS BLANCAS
const materialNegras = new THREE.MeshPhongMaterial( 
    { 
        color: 0x6b4d42, 
        
    } );

//CARGA DE LAS PIEZAS
//Torre
var loader = new FBXLoader();
loader.load( 'Modelados/Torre.fbx', function ( torreB1 ) {
    if ( torreB1 ) {

        torreB1.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        torreB1.castShadow = true;
        torreB1.receiveShadow =true;
        scene.add( torreB1 );
        torreB1.rotation.x = -(Math.PI/180 * 270);
        torreB1.position.x = 5.3;
        torreB1.position.y = -5.3;
        torreB1.position.z = 0.5;
        torreB1.scale.multiplyScalar(0.6);
} )

//CABALLO
var loader = new FBXLoader();
loader.load( 'Modelados/Caballo.fbx', function ( caballoB1 ) {
    if ( caballoB1 ) {

        caballoB1.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        caballoB1.castShadow = true;
        caballoB1.receiveShadow =true;
        scene.add( caballoB1 );
        caballoB1.rotation.x = -(Math.PI/180 * 270);
        caballoB1.rotation.y = -(Math.PI/180 * 90);
        caballoB1.position.x = 3.8;
        caballoB1.position.y = -5.3;
        caballoB1.position.z = 0.5;
        caballoB1.scale.multiplyScalar(0.45);
} )

//Alfil
var loader = new FBXLoader();
loader.load( 'Modelados/Alfil.fbx', function ( alfilB1 ) {
    if ( alfilB1 ) {

        alfilB1.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        alfilB1.castShadow = true;
        alfilB1.receiveShadow =true;
        scene.add( alfilB1 );
        alfilB1.rotation.x = -(Math.PI/180 * 270);
        alfilB1.position.x = 2.3;
        alfilB1.position.y = -5.3;
        alfilB1.position.z = 0.5;
        alfilB1.scale.multiplyScalar(0.55);
} )

//Reina
var loader = new FBXLoader();
loader.load( 'Modelados/Reina.fbx', function ( ReinaB ) {
    if ( ReinaB ) {

        ReinaB.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        ReinaB.castShadow = true;
        ReinaB.receiveShadow =true;
        scene.add( ReinaB );
        ReinaB.rotation.x = -(Math.PI/180 * 270);
        ReinaB.position.x = -0.7;
        ReinaB.position.y = -5.3;
        ReinaB.position.z = 0.5;
        ReinaB.scale.multiplyScalar(0.75);
} )

//Rey
var loader = new FBXLoader();
loader.load( 'Modelados/Rey.fbx', function ( ReyB ) {
    if ( ReyB ) {

        ReyB.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        ReyB.castShadow = true;
        ReyB.receiveShadow =true;
        scene.add( ReyB );
        ReyB.rotation.x = -(Math.PI/180 * 270);
        ReyB.position.x = 0.8;
        ReyB.position.y = -5.3;
        ReyB.position.z = 0.5;
        ReyB.scale.multiplyScalar(0.75);
} )

//Alfil
var loader = new FBXLoader();
loader.load( 'Modelados/Alfil.fbx', function ( alfilB2 ) {
    if ( alfilB2 ) {

        alfilB2.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        alfilB2.castShadow = true;
        alfilB2.receiveShadow =true;
        scene.add( alfilB2 );
        alfilB2.rotation.x = -(Math.PI/180 * 270);
        alfilB2.position.x = -2.3;
        alfilB2.position.y = -5.3;
        alfilB2.position.z = 0.5;
        alfilB2.scale.multiplyScalar(0.55);
} )

//Caballo
var loader = new FBXLoader();
loader.load( 'Modelados/Caballo.fbx', function ( caballoB2 ) {
    if ( caballoB2 ) {

        caballoB2.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        caballoB2.castShadow = true;
        caballoB2.receiveShadow =true;
        scene.add( caballoB2 );
        caballoB2.rotation.x = -(Math.PI/180 * 270);
        caballoB2.rotation.y = -(Math.PI/180 * 90);
        caballoB2.position.x = -3.8;
        caballoB2.position.y = -5.3;
        caballoB2.position.z = 0.5;
        caballoB2.scale.multiplyScalar(0.45);
} )

//Torre
var loader = new FBXLoader();
loader.load( 'Modelados/Torre.fbx', function ( torreB2 ) {
    if ( torreB2 ) {

        torreB2.traverse( function ( child ) {
            //Una vez detecta el objeto, cambia el material según lo que le diga al mesh
            if ( child.isMesh ) {
                child.material= materialNegras
            }
        } )
    }
        torreB2.castShadow = true;
        torreB2.receiveShadow =true;
        scene.add( torreB2 );
        torreB2.rotation.x = -(Math.PI/180 * 270);
        torreB2.position.x = -5.3;
        torreB2.position.y = -5.3;
        torreB2.position.z = 0.5;
        torreB2.scale.multiplyScalar(0.6);
} )

//CONSTRUCCIÓN DEL PEÓN
const points = [];
for ( let i = 0; i < 8; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.5 ) * 0.4 + 0.1, ( i + 1.2 ) * 0.15 ) );
}
const geometrypeon = new THREE.LatheGeometry( points );
const peon = new THREE.Mesh( geometrypeon, materialBlancas );
scene.add( peon );
peon.rotation.x = -(Math.PI/180 * 270);
peon.rotation.z = (Math.PI/180 * 180);
peon.position.y =3.5;
peon.position.x =5.3;
peon.position.z =1.4;

const peonS = new THREE.SphereGeometry( 0.3, 25, 18 ); 
const sphere = new THREE.Mesh( peonS, materialBlancas ); 
scene.add( sphere );
sphere.position.y =3.5;
sphere.position.x =5.3;
sphere.position.z =1.47;

//CREACIÓN DEL RTESTO DE PEONES 
// Coordenadas de los peones blancos y negros
const peonBlancoPositions = [
    [5.3, 3.5, 1.4],
    [3.8, 3.5, 1.4],
    [2.3, 3.5, 1.4],
    [0.8, 3.5, 1.4],
    [-0.7, 3.5, 1.4],
    [-2.3, 3.5, 1.4],
    [-3.8, 3.5, 1.4],
    [-5.3, 3.5, 1.4],
];

const peonNegroPositions = [
    [-5.3, -3.5, 1.4],
    [-3.8, -3.5, 1.4],
    [-2.3, -3.5, 1.4],
    [-0.8, -3.5, 1.4],
    [0.7, -3.5, 1.4],
    [2.3, -3.5, 1.4],
    [3.8, -3.5, 1.4],
    [5.3, -3.5, 1.4],
];

// Crear peones blancos
for (let i = 0; i < peonBlancoPositions.length; i++) {
    const peon = new THREE.Mesh(geometrypeon, materialBlancas);
    scene.add(peon);

    peon.rotation.x = -(Math.PI / 180 * 270);
    peon.rotation.z = (Math.PI / 180 * 180);
    peon.position.set(peonBlancoPositions[i][0], peonBlancoPositions[i][1], peonBlancoPositions[i][2]);
    peon.castShadow = true;
    peon.receiveShadow =true;

    const peonS = new THREE.SphereGeometry(0.3, 25, 18);
    const sphere = new THREE.Mesh(peonS, materialBlancas);
    scene.add(sphere);
    sphere.position.set(peonBlancoPositions[i][0], peonBlancoPositions[i][1], peonBlancoPositions[i][2] + 0.07);
    sphere.castShadow = true;
    sphere.receiveShadow =true;
    
}

// Crear peones negros
for (let i = 0; i < peonNegroPositions.length; i++) {
    const peon = new THREE.Mesh(geometrypeon, materialNegras);
    scene.add(peon);

    peon.rotation.x = -(Math.PI / 180 * 270);
    peon.rotation.z = (Math.PI / 180 * 180);
    peon.position.set(peonNegroPositions[i][0], peonNegroPositions[i][1], peonNegroPositions[i][2]);
    peon.castShadow = true;
    peon.receiveShadow =true;


    const peonS = new THREE.SphereGeometry(0.3, 25, 18);
    const sphere = new THREE.Mesh(peonS, materialNegras);
    scene.add(sphere);
    sphere.position.set(peonNegroPositions[i][0], peonNegroPositions[i][1], peonNegroPositions[i][2] + 0.07);
    sphere.castShadow = true;
    sphere.receiveShadow =true;
}




//Definimos las luces 
const light1 = new THREE.PointLight( 0xFFffff, 2, 20 );
light1.position.set( 0, -9, 0 );
light1.castShadow = true;
scene.add( light1 );

const lightP2 = new THREE.PointLight( 0xFFffff, 2, 20 );
lightP2.position.set( 0, 0, 5 );
lightP2.castShadow = true;
scene.add( lightP2 );

//Son los atributos que generan la sombra
lightP2.shadow.mapSize.width = 512; // default
lightP2.shadow.mapSize.height = 512; // default
lightP2.shadow.camera.near = 0.5; // default
lightP2.shadow.camera.far = 500; // default

camera.position.z = 8;
camera.position.y = -10;
camera.position.x = 0;

//Orbit
function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );

}

animate();