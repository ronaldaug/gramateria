export default (dependency) => {

    let scriptArr = [
        {
            name: 'splidejs',
            script: `(()=>{
                new Splide('#splide', {
                    type   : 'loop',
                    perPage: 3,
                    focus  : 'center',
                    pagination: false,
                    breakpoints: {
                        768: {
                            perPage: 2,
                        },
                        576:{
                            perPage:1
                        }
                    }
                }).mount();
            })();`
        },
        {
            name: 'contactjs',
            script:`(()=>{
                const contactForm = document.querySelector("#contactForm");
                if(!contactForm) return;
                contactForm.addEventListener('submit', function (e) {
                  const isPassed = document.querySelector("#contactForm").checkValidity();
                  e.preventDefault();
                      if (!isPassed) {
                        e.preventDefault()
                        e.stopPropagation()
                      }
              
                      contactForm.classList.add('was-validated')
                }, false)
             })();
            `
        }
    ]

    const dep = scriptArr.filter(e=>e.name === dependency);
    return dep?dep[0].script:'';

}