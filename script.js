 window.onload = function(){
 let langEl =document.getElementById('channel-btns');
        //let fragment = new DocumentFragment();
		const fragment = document.createDocumentFragment();
		function createMenuItem(src, alt, title) {
            let a = document.createElement('a');
			
            a.textContent = name;
            a.href = src;
			a.appendChild(img_create(src, alt, title));
            return a;
        }
		function img_create(src, alt, title) {
				var img = document.createElement('img');
				img.src = src;
				if ( alt != null ) img.alt = alt;
				if ( title != null ) img.title = title;
				return img;
			}
        Canales.forEach(language => {
            let li = document.createElement('li');
			li.appendChild(createMenuItem(language.url,language.nombre,language.imgUrl));
			
           // li.innerHTML = language.nombre;
            fragment.appendChild(li);
        })

        langEl.appendChild(fragment);
 };
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