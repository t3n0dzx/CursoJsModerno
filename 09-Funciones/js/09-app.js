const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar:function(id){
        console.log(`pausando ...`)
    },
    borrar : function(id){
        console.log(`borrando cancion ... ${id}`)
    },
    crearPlaylist : function(name){
        console.log(`Creando la playList ... ${name}`)
    },
    reproducirPlaylist : function(name){
        console.log(`reproduciendo la playList ... ${name}`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(15);
reproductor.pausar();
reproductor.borrar(50);
reproductor.crearPlaylist("Pa Pistear");
reproductor.reproducirPlaylist("Pa Pistear");


