 const element = document.getElementById('channel-btns');
 //const fragment = document.createDocumentFragment();
//var element  = document.getElementById('ul'); // assuming ul exists
const fragment1 = document.createDocumentFragment();
//var browsers = ['Firefox', 'Chrome', 'Opera','Safari', 'Internet Explorer'];

Canales.forEach(canal => {
    const li = document.createElement('li');
    li.textContent = canal.nombre;
    fragment1.appendChild(li);
});

element.appendChild(fragment1);
 /*
 Canales.forEach(canal => {
	 console.log("a")
    if (canal.url !== undefined && canal.m3u === undefined){
        const BtnCanal = document.createElement('li');
            BtnCanal.classList.add('channel');
            BtnCanal.innerHTML = canal.nombre;
            BtnCanal.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
                divm3u.remove(); 
                nombreM3u.remove();  
                videoContainer.append(iframe);
                    iframe.src = canal.url;
                document.getElementById('video-container').append(nombreBarra);
                    a.href = canal.fuente;
                    a.innerText = canal.nombre;
                document.querySelector('.nombre-barra').append(a);
            };
        fragment.appendChild(BtnCanal);
    } else if (canal.url === undefined && canal.m3u !== undefined){
        const BtnCanalM3u = document.createElement('button');
            BtnCanalM3u.classList.add('channel');
            BtnCanalM3u.innerHTML = canal.nombre;
            BtnCanalM3u.classList.add('solo-m3u');
            BtnCanalM3u.onclick = () => {
                iframe.remove();
                nombreM3u.remove();  
                videoContainer.appendChild(divm3u)
                let m3uplayer = videojs(document.querySelector('.m3u-player'));
                    m3uplayer.src( {
                        src: canal.m3u,
                        controls: true,
                        preload: 'auto'
                    });
                m3uplayer.play();
            document.getElementById('video-container').append(nombreBarra);
                a.href = canal.fuente;
                a.innerText = canal.nombre;
            document.querySelector('.nombre-barra').append(a);
            }
        fragment.appendChild(BtnCanalM3u);
    }
});
     
seccionCanales.appendChild(fragment);*/