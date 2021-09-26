 const seccionCanales = document.getElementById(&#39;channel-btns&#39;);
     Canales.forEach(canal => {
    if (canal.url !== undefined && canal.m3u === undefined){
        const BtnCanal = document.createElement('button');
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
        fragment.append(BtnCanal);
    } else if (canal.url === undefined && canal.m3u !== undefined){
        const BtnCanalM3u = document.createElement('button');
            BtnCanalM3u.classList.add('channel');
            BtnCanalM3u.innerHTML = canal.nombre;
            BtnCanalM3u.classList.add('solo-m3u');
            BtnCanalM3u.onclick = () => {
                iframe.remove();
                nombreM3u.remove();  
                videoContainer.append(divm3u)
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
        fragment.append(BtnCanalM3u);
    }
});
     