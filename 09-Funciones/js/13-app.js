const reproductor = {
    cancion: '',
    reproducir : id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log(`pausando ...`),
    borrar : id => console.log(`borrando cancion ... ${id}`),
    crearPlaylist : name => console.log(`Creando la playList ... ${name}`),
    reproducirPlaylist : name => console.log(`reproduciendo la playList ... ${name}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Àñadiendo ${cancion}`);
    },
    
    get obtenerCancion(){
        console.log(`${this.cancion}`)

    }
}

reproductor.nuevaCancion = "Enter Sadman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(15);
reproductor.pausar();
reproductor.borrar(50);
reproductor.crearPlaylist("Pa Pistear");
reproductor.reproducirPlaylist("Pa Pistear");