export default (dependency) => {

    let scriptArr = [
        {
            name: 'splidejs',
            script: `new Splide('#splide', {
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
        }).mount();`
        }
    ]

    const dep = scriptArr.filter(e=>e.name === dependency);
    return dep?dep[0].script:'';

}