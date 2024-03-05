document.addEventListener('DOMContentLoaded', function() {


    const header=document.createElement('header')
    const nav=document.createElement('nav')
    headerinnerHTML=  navContent=` <nav>
    <div class="logo">
        <a href="https://es.duolingo.com/">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg" alt="Duolingo Logo">
        </a>
    </div>
    <ul>
                <li><a href="#">Idioma de la pagina.</a></li>
                <button id="start-btn" class="btn2">Empieza ahora.</button>
    </ul>
  
  
    
    </nav>`;
    header.innerHTML = navContent;
    document.body.appendChild(header);
    
    const centro = document.createElement('centro')
    centroinnerHTML= divContent=` 
    <div class="centro">
    <img src="https://1734811051.rsc.cdn77.org/data/images/full/390308/duolingo.png" alt="centro 1">
    <h1>¡Aprende un nuevo idioma con Duolingo!</h1>
    <p>¡Gratis!</p>
    <a href="https://es.duolingo.com/register"><button id="start-btn" class="btn">Empieza ahora.</button></a>
    <a href="https://es.duolingo.com/?isLoggingIn=true"><button id="start-btn" class="btn1">Ya tengo una cuenta.</button></a>
    
    </div>
    
    <div class="banderas">
    <a href="https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s">
    <img src="data:image/png;base64,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" alt="Ingles">
    </a>
    <a href="https://es.duolingo.com/course/de/es/Aprender-alem%C3%A1n">
    <img src="data:image/jpeg;base64,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" alt="Alemania">
    </a>
    <a href="https://es.duolingo.com/course/fr/es/Aprender-franc%C3%A9s">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAD1BMVEUAJlT////OESZUbYzeYG4LVZZKAAAAiUlEQVR4nO3PMQEAMAgDMGDzrxkRfTgSB6mKvY79ieUPERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERGRm5EFiZhqgvuGvCoAAAAASUVORK5CYII=" alt="Francia">
    </a>
    <a href="https://es.duolingo.com/course/pt/es/Aprender-portugu%C3%A9s">
    <img src="data:image/png;base64,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" alt="portugual">
    </a>
    <a href="https://es.duolingo.com/course/sv/es/Aprender-sueco">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAHlBMVEUAaqf+zAD/0QAAaKlPfJZggpAAZqpdgZFKepiBj4EDfUmrAAABn0lEQVR4nO3ay43CUBBFwYc9/PJPeIig8IKWkDmVQKvP+q41Y79ul3e26z50/csVB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYFzxNln3O4H4txvQ9c/ZP3NeDwPxHk+hq5/yNqmvG3zqvPl1oEfflZxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kDLLmgTCK1JYWzBe4od8pDiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOHCKOP/ItlPLsoEE4gAAAABJRU5ErkJggg==" alt="portugual">
    </a>
    <a href="https://es.duolingo.com/course/ru/es/Aprender-ruso">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////VKx4AOaYAGJ4AOq3fKgABXnTtAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII=" alt="rusia">
    </a>
    <a href="https://es.duolingo.com/course/it/es/Aprender-italiano">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AjEXNISoAiD16tI7dgYTMEh4CaWFTAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=" alt="italia">
    </a>
    <a href="https://es.duolingo.com/course/ca/es/Aprender-catal%C3%A1n">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAG1BMVEX83QnaEhr+5AjlbRbZABr+5wfXABvysA/94Agr0g6mAAABBUlEQVR4nO3dwW1CQRAFwTFgIP+IuU+frcVfVSH08Y20OwMAAAAA8AdubHNnmwfb/LBpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJ2dnKHlt2+zp9SgEAAACAS/hlmyeb+05pUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVK2x5oX27zZTp9SAAAAAPiHTo9aX8geW3b7ct8pTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU3K9ljetajTpxQAAAAAuITTn2d9If++lf8By32nNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpOxsZY8tu32dPqUAAAAAANf0AcuNtp+ascSpAAAAAElFTkSuQmCC" alt="italia">
    </a>
    
    </div>
    
    `;
    centro.innerHTML = divContent;
    document.body.appendChild(centro);
    
    const seccion1 = document.createElement('seccion1')
    seccion1innerHTML= div1Content=`
    <div class="secciones">
    <div class="seccion">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKPEGIg6ojDRoII1XLr_81aioGKYnzi6TJQ61XcdX9Oilg5ItTXW_O6jzaVGduLWDHAk&usqp=CAU" alt="imagen1">
    <h2>Gana recompensas.</h2>
    <p>Desbloquea logros y sube de nivel mientras aprendes.</p>
    </div>
    <div class="seccion">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWgHzWBdTy69SuOWbp1zd3yx5Vcf1JDNQtw&s" alt="imagen2">
        <h2>Aprendizaje persinalizado.</h2>
        <p>Accede a lecciones interactivas diseñadas por expertos.</p>
    </div>
    <div class="seccion">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuug2DO8H_Xba4cm0k-OE6IK5fsega1Z_UyB68dThBgw&s" alt="imagen3">
        <h2>Divertido, efectivo y gratis.</h2>
        <p>Refuerza tus habilidades de idioma con ejercicios interactivos.</p>
    </div>
    </div>
    `;
    seccion1.innerHTML = div1Content;
    document.body.appendChild(seccion1);
    
    
    const seccion2 = document.createElement('seccion2')
    seccion2innerHTML= div2Content=`
    <div class="imagenes4">
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/229d5f88cc9df2eb0b68f39466500911.svg" alt="imagen4" class="imagen">
    </div>
    <div class="imagenes2">
        <img src="https://imggraficos.gruporeforma.com/2023/05/Duo-okis.jpg" alt="imagen 2" class="imagen">
        <a href="https://es.duolingo.com/super"><button class="boton">PRUEBA 2 SEMANAS GRATIS.</button></a>
    </div>`;
    seccion2.innerHTML = div2Content;
    document.body.appendChild(seccion2);
    
    
    
    const seccion3 = document.createElement('seccion3')
    seccion3innerHTML= div3Content=`<div class="secciones">
    <div class="seccion">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL6ceXpBVh23OhJ3w_0gP5SZ9ykAPaXW5YIV9DseAo7O0ue1vWYoM9TkZ7zM-t9JDzCQ&usqp=CAU" alt="imagen4">
        <h2>Duolingo english test.</h2>
        <p>Nuestro examen de inglés es conveniente, rápido y económico.</p>
        <a href="https://englishtest.duolingo.com/applicants"><button id="start-btn" class="btn1">Certifica tu ingles.</button></a>
    </div>
    <div class="seccion">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZ34iOnizj30gejeZmAmGeX8jFI5wUvqQMwkQoyvcP-P0VGE0IaSAnCV1c9xeBBmrR9M&usqp=CAU" alt="imagen5">
        <h2>Duolingo math.</h2>
        <p>¡Prueba nuestras lecciones cortas y gratis para matemáticas!</p>
        <a href="https://blog.duolingo.com/duolingo-launches-math-app/"><button id="start-btn" class="btn1">Mejora en Matematica.</button></a>
    </div>
    <div class="seccion">
        <img src="https://abc.duolingo.com/static/media/teacher-hero.9b76633890506273c32cd76ce22d6d1f.svg" alt="imagen6">
        <h2>Duolingo ABC.</h2>
        <p>¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos.</p>
        <a href="https://abc.duolingo.com/"><button id="start-btn" class="btn1">Conoce Duolingo ABC.</button></a>
    </div>
    </div>`;
    seccion3.innerHTML = div3Content;
    document.body.appendChild(seccion3);
    
    
    const centro2 = document.createElement('centro2')
    centro2innerHTML= div4Content=` <div class="centro2">
    <h1>¡Aprende idiomas con Duolingo!</h1>
    <a href="https://es.duolingo.com/register"><button id="start-btn" class="btn">Empieza ahora.</button></a>
    </div>`;
    
    centro2.innerHTML = div4Content;
    document.body.appendChild(centro2);
    
    
    const seccion4 = document.createElement('seccion4')
    seccion4innerHTML= div5Content=`
    <div class="imagenes4">
        <img src="Imagenes/890eb76de9a395b182c1c28322721405.svg" alt="imagen7" class="imagen">
    </div>`;
    seccion4.innerHTML = div5Content;
    document.body.appendChild(seccion4);
    
    
    const footer1 = document.createElement('footer');
    const div6Content = `
    <div class="footer">
    <footer>
      <div class="columnas">
        <div class="columna">
          <h3>Sobre nosotros.</h3>
          <ul>
            <li><a href="https://es.duolingo.com/courses">Cursos</a></li>
            <li><a href="https://es.duolingo.com/info">Mision.</a></li>
            <li><a href="https://es.duolingo.com/approach">Metodo de enseñansa.</a></li>
            <li><a href="https://es.duolingo.com/efficacy">Eficacia.</a></li>
            <li><a href="https://careers.duolingo.com/about">Equipo.</a></li>
            <li><a href="https://research.duolingo.com/">Investigacion.</a></li>
            <li><a href="https://careers.duolingo.com/">Empleo.</a></li>
            <li><a href="https://design.duolingo.com/">Guia para uso de marca.</a></li>
            <li><a href="https://store.duolingo.com/">Tienda.</a></li>
            <li><a href="https://press.duolingo.com/#about">Prensa.</a></li>
            <li><a href="https://investors.duolingo.com/">Inversionistas.</a></li>
            <li><a href="https://es.duolingo.com/contact">Contactanos.</a></li>
          </ul>
        </div>
        <div class="columna">
          <h3>Productos.</h3>
          <ul>
            <li><a href="https://es.duolingo.com/">Duolingo.</a></li>
            <li><a href="https://schools.duolingo.com/">Duolingo for schools.</a></li>
            <li><a href="https://englishtest.duolingo.com/applicants">Duolingo English test.</a></li>
            <li><a href="https://podcast.duolingo.com/">Podcast.</a></li>
            <li><a href="https://es.duolingo.com/business">Duolingo for Busniess.</a></li>
            <li><a href="https://es.duolingo.com/super">Super Duolingo.</a></li>
            <li><a href="https://es.duolingo.com/gift">Regala Super Duolingo.</a></li>
          </ul>
        </div>
        <div class="columna">
          <h3>Aplicaciones.</h3>
          <ul>
            <li><a href="https://play.google.com/store/apps/details?hl=es&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsite_map">Duolingo para Android.</a></li>
            <li><a href="https://apps.apple.com/es/app/duolingo-aprende-idiomas/id570060128">Duolingo para IOS.</a></li>
          </ul>
        </div>
        <div class="columna">
          <h3>Ayuda y soporte.</h3>
          <ul>
            <li><a href="https://support.duolingo.com/hc/es">App de Duolingo.</a></li>
            <li><a href="https://duolingoschools.zendesk.com/hc/en-us">Schools.</a></li>
            <li><a href="https://testcenter.zendesk.com/hc/es">Duolingo English test.</a></li>
            <li><a href="https://status.duolingo.com/">Estado.</a></li>
          </ul>
        </div>
        <div class="columna">
          <h3>Términos y privacidad.</h3>
          <ul>
            <li><a href="https://es.duolingo.com/guidelines">Normas de la comunidad.</a></li>
            <li><a href="https://es.duolingo.com/terms">Terminos.</a></li>
            <li><a href="https://es.duolingo.com/privacy">Privacidad.</a></li>
          </ul>
        </div>
        <div class="columna">
          <h3>Social.</h3>
          <ul>
            <li><a href="https://blog.duolingo.com/es/">Blog.</a></li>
            <li><a href="https://www.instagram.com/duolingoespanol/">Instagram.</a></li>
            <li><a href="https://www.facebook.com/duolingoespanol">Facebook.</a></li>
            <li><a href="https://twitter.com/duolingoespanol">Twiter.</a></li>
            <li><a href="https://www.youtube.com/user/duolingo">Youtube.</a></li>
          </ul>
        </div>
      </div>
    </footer>
    
    <footer>
      <div class="columnas">
        <div class="columna1">
          <h3>Idioma de la pagina:</h3>
          <ul>
            <li><a href="https://ar.duolingo.com/">العربية</a></li>
            <li><a href="https://nl-nl.duolingo.com/">Nederlands</a></li>
            <li><a href="https://es.duolingo.com/">Español</a></li>
            <li><a href="https://it.duolingo.com/">Italiano</a></li>
    
         
          </ul>
        </div>
        <div class="columna">
          <h3>-----------------</h3>
          <ul>
            <li><a href="https://bn.duolingo.com/">বাংলা</a></li>
            <li><a href="https://pl.duolingo.com/">Polski</a></li>
            <li><a href="https://th.duolingo.com/">ภาษาไทย</a></li>
            <li><a href="https://ja.duolingo.com/">日本語</a></li>
    
    
       
          </ul>
        </div>
        <div class="columna">
          <h3>-----------------</h3>
          <ul>
            <li><a href="https://cs.duolingo.com/">Čeština</a></li>
            <li><a href="https://pt.duolingo.com/">Português</a></li>
            <li><a href="https://fr.duolingo.com/">Français</a></li>
            <li><a href="https://id.duolingo.com/">Bahasa Indonesia</a></li>
    
    
          </ul>
        </div>
        <div class="columna">
          <h3>-----------------</h3>
          <ul>
            <li><a href="https://de.duolingo.com/">Deutsch</a></li>
            <li><a href="https://ro.duolingo.com/">Română</a></li>
            <li><a href="https://tl.duolingo.com/">Tagalog</a></li>
            <li><a href="https://uk.duolingo.com/">Українською</a></li>
    
    
           
          </ul>
        </div>
        <div class="columna">
          <h3>-----------------</h3>
          <ul>
            <li><a href="https://el.duolingo.com/">Ελληνικά</a></li>
            <li><a href="https://ru.duolingo.com/">Русский</a></li>
            <li><a href="https://hi.duolingo.com/">हिंदी</a></li>
            <li><a href="https://ko.duolingo.com/">한국어</a></li>
    
    
        
          </ul>
        </div>
        <div class="columna">
          <h3>-----------------</h3>
          <ul>
            <li><a href="https://en.duolingo.com/">English</a></li>
            <li><a href="https://te.duolingo.com/">తెలుగు</a></li>
            <li><a href="https://tr.duolingo.com/">Türkçe</a></li>
            <li><a href="https://zh-cn.duolingo.com/">中文</a></li>
    
    
          
          </ul>
        </div>
      </div>
    </footer>
    
    <footer>
        <p>&copy;Duolingo-copia.</p>
        <p>&copy; Stefan Oebels Sanchez. </p>
    </footer>
    </div>`;
    footer1.innerHTML = div6Content;
    document.body.appendChild(footer1);
    
      
    
      
        const estilo = document.createElement('style');
        const estilosContent = `
        header 
        { /*  */
            background-color: white;
            padding: 20px 0;
            
        }
        
        header 
        {/* Barra de menu */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: white; 
            padding: 20px; 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
            z-index: 1000; 
        }
        
        nav 
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0px;
            color: white;
            
        }
        
        .logo img 
        {/* Tamaño del logo de la barra de menu */
            height: 40px;
        }
        
        nav ul 
        {
            list-style-type: none;
            display: flex;
        }
        
        nav ul li 
        { /* Cambia la posision del apartado de idioma */
            margin-right: 40px;
            font-size:20px;
        }
        
        nav ul li a 
        { /* cambia el color y la decoracion del apartado de idioma */
            color: #777;
            text-decoration:  none;
        }
        
        .menu {
            display: none; /* El menú estará oculto por defecto */
            position: absolute;
            background-color: grey;
            border: 3px solid black;
            padding: 10px;
            left: 800px;
            text-color: white;
        }
        
        #texto:hover + .menu {
            display: block; /* Mostrar el menú cuando el cursor esté sobre el texto */
        }
        
        p{
            margin-right: 40px;
            font-size:15px;}
        
        
        
        .centro 
        { /* Configuracion de la seccion del centro*/
            text-align: center;
            padding: 200px 0;
            background-color: none;
            border-radius: 30px;
            position: relative;
            top: 20px; 
            left: 6px; 
        }
        
        .centro img
        {
            border-radius: 30px;
            width: 300px; 
            height: auto; 
            filter: drop-shadow(20px 5px 5px gray);
        }
        
        .centro h1 
        { /* Configuracion de ¡Aprende un nuevo idioma con Duolingo! */
            font-size: 50px;
            margin-bottom: 30px;
        }
        
        .centro p 
        { /* configuracion gratis para siempre*/
            font-size: 30px;
            color: #777;
            margin-bottom: 30px;
        }
        
        .banderas {
            background-color:whitesmoke;
            color: white;
            padding: 10px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            border-color: grey;
        }
        
        .banderas-text {
            font-weight: bold;
        }
        
        .banderas-link {
            color: white;
            text-decoration: none;
            padding: 5px 10px;
            border: 1px solid white;
            border-radius: 10px;
            width: 10px;
        }
        
        .banderas-link:hover {
            background-color: white;
            color: #333;
        }
        
        .banderas img{
            width: 30%;
            height: auto;
            border: 3px solid whitesmoke;
        }
        
        
        .secciones 
        { /* espacio de la seccion del centro  */
            display: flex;
            justify-content: space-around;
            padding: 100px 0;
            
        }
        
        .seccion 
        { /*  */
            text-align: center;
            max-width: 250px;
            position: relative;
        
        }
        
        .seccion img 
        { /* configuracion de las imagenes */
            width: 100%;
            border-radius: 30px;
            border: 3px solid whitesmoke;
           
            
        }
        
        
        
        .seccion h2 
        { /* titulo de las imagenes*/
            margin-top: 10px;
            font-size: 30px;
        }
        
        .seccion p 
        { /* texto de las imagenes */
            color: #58cc02;
            font-size: 30px;
            left: 0px;
          
        
        }
        
        .secciones img 
        {
            float: left; 
            margin-right: 10px; 
            color: #58cc02;
        }
        
        
        .btn { /* configuracion de los botones */
            display: inline-block;
            padding: 10px 30px;
            background-color: #58cc02;
            color: white;
            text-decoration: none;
            border-radius: 15px;
            transition: background-color 0.3s;
            cursor: pointer;
            font-size: 20px;
            filter: drop-shadow(10px 5px 5px gray);
            font-weight:  Bold;
            font-family: cursive;
        
        }
  
        .btn2 { /* configuracion de los botones */
            display: inline-block;
            padding: 10px 30px;
            background-color: #58cc02;
            color: white;
            text-decoration: none;
            border-radius: 15px;
            transition: background-color 0.3s;
            cursor: pointer;
            font-size: 20px;
            filter: drop-shadow(10px 5px 5px gray);
            font-weight:  Bold;
            font-family: cursive;
        
        }
        
        .btn1 { /* configuracion de los botones */
            display: inline-block;
            padding: 10px 30px;
            background-color: white;
            color: rgb( 28, 176, 246);
            text-decoration: none;
            border-radius: 15px;
            transition: background-color -10s;
            cursor: pointer;
            font-size: 20px;
            filter: drop-shadow(10px 5px 5px gray);
            font-weight:  Bold;
            font-family: cursive;
        
        }
        
        .centro2
        {
            text-align: center;
            padding: 200px 0;
            border-radius: 30px;
            position: relative;
            top: 500px; 
            left: 0px; 
            color: #58cc02;
        }    
        
        
        .imagenes2 /* imagen super duolingo */
        {
            position: relative; 
          }
          
          .imagen /* imagen */
          {
            width: 100%;
            height: auto; 
          }
          
          .boton /* Boton de la imagen */
          {
            position: absolute; 
            top: 65%; 
            left: 29%;
            transform: translate(-50%, -50%); 
            padding: 10px 30px; 
            background-color: white;
            color: darkblue; 
            border: 10px black;
            border-radius: 15px; 
            cursor: pointer; 
            font-weight: bold;
            font-weight:  Bold;
            font-family: cursive;
          }
          
        
        .btn:hover 
        {
            background-color: #47a401;
        }
        
        .imagenes4 img{
            height: 500%;
            width: 100%;
        }
        
        footer {
            background-color: #58cc02;
            color: white;
            padding: 20px 0;
            align-items: center;
            text-align: center;
          }
          
          .columnas {
            display: flex;
            justify-content: space-around;
          }
          
          .columna {
            flex: 1;
            margin: 0 20px;
          }
          
          .columna h3 {
            font-size: 20px;
            margin-bottom: 10px;
          }
          
          .columna ul {
            list-style: none;
            padding: 0;
          }
          
          .columna ul li {
            margin-bottom: 5px;
          }
          
          .columna ul li a {
            color: rgba(255, 255, 255, 0.722);
            text-decoration: none;
          }
          
          .columna ul li a:hover {
            text-decoration: underline;
          }
        
          .columna1 {
            flex: 1;
            margin: 0 20px;
          }
          
          .columna1 h3 {
            font-size: 20px;
            margin-bottom: 10px;
          }
          
          .columna1 ul {
            list-style: none;
            padding: 0;
          }
          
          .columna1 ul li {
            margin-bottom: 5px;
          }
          
          .columna1 ul li a {
            color: rgba(255, 255, 255, 0.722);
            text-decoration: none;
          }
          
          .columna1 ul li a:hover {
            text-decoration: underline;
          }
          
          
    
      `;
      estilo.innerHTML = estilosContent;
      document.head.appendChild(estilo);
     
      const startBtn = document.getElementById('start-btn');
      startBtn.addEventListener('click', function() {
          alert('Comienza tu viaje de aprendizaje con Duolingo.');
      });
          
    });
    