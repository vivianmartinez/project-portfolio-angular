window.addEventListener('load',()=>{

  const rootStyles = document.documentElement.style;
  const theme_mode = document.getElementById('theme');

  /*
  if(theme_mode){
    theme_mode.addEventListener('click',(e)=>{

      rootStyles.setProperty('--body-bg-color',e.target.dataset.mode);
      rootStyles.setProperty('--text-color-mode',e.target.dataset.text);
      rootStyles.setProperty('--filter-creative',e.target.dataset.art);
      theme_mode.classList.toggle('dark--mode');
      const creative_art = document.getElementById('creative-art');


      if (theme_mode.classList.contains('dark--mode')){
        theme_mode.setAttribute('data-mode','#FFFFFF');
        theme_mode.setAttribute('data-text','#000000');
        theme_mode.setAttribute('data-art','invert(0%) sepia(0%) saturate(100%) hue-rotate(1deg) brightness(100%) contrast(100%)');
        theme_mode.style.opacity = '0';
        setTimeout(()=>{
          theme_mode.src = 'assets/icons/icon-mode-brigth.png';
          theme_mode.style.opacity = '1';
        },500)
        creative_art.src = "assets/art/creative-vivi-art-dark.png";
      }else{

        theme_mode.setAttribute('data-mode','#000000');
        theme_mode.setAttribute('data-text','#FFFFFF');
        theme_mode.setAttribute('data-art','invert(0%) sepia(20%) saturate(70%) hue-rotate(1deg) brightness(100%) contrast(100%)');
        theme_mode.style.opacity = '0';

        setTimeout(()=>{
          theme_mode.src = 'assets/icons/icon-mode-dark.png';
          theme_mode.style.opacity = '1';
        },500)
        creative_art.src = "assets/art/creative-vivi-art.png";
      }
    });
  }
  */
});

