class Slider{
    constructor(sliderimgcontent = document.getElementById('sliderimgcontent'),sliderbtnback = document.getElementById('sliderbtnback'),sliderbtnnext = document.getElementById('sliderbtnnext'),imagenes = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'],index = 0){
        this.sliderimgcontent = sliderimgcontent;
        this.sliderbtnback = sliderbtnback;
        this.sliderbtnnext = sliderbtnnext;
        this.imagenes = imagenes; 
        this.index = index;

        this.sliderbtnnext.addEventListener('click',event => {
            this.sliderAuto(false);
            this.setImgNext();
        });

        this.sliderbtnback.addEventListener('click',event => {
            this.sliderAuto(false);
            this.setImgBack();
        });

        this.setsliderimgcontent();
        this.sliderAuto();
    }

    sliderAuto(next = true) {
            setInterval(() => {
                if(next){
                    this.setImgNext();
                    if(this.index === (this.imagenes.length -1)){
                        next = false;
                    }
                }else{
                    this.setImgBack();
                    if(this.index === 0){
                        next = true;
                    }
                }
            },2500);
    }

    setsliderimgcontent() {
        sliderimgcontent.style.background = `url(../../recursos/images/${this.imagenes[this.index]})`;
        const elements = [];
        for(let i = 0; i < this.imagenes.length; i++){
            elements.push(document.createElement("div"));
        }
        for(let i = 0; i < elements.length; i++){
           elements[i].id = i;
           if(elements[i].id != 0){
            elements[i].classList.add('slider__circle--disable');
           }
        }
        elements.forEach(item => {
            document.querySelector('.slider__circle').appendChild(item);
        })
        document.querySelector(`div[id="${this.index}"]`).classList.add('slider__circle--standar');
    }

    setImgNext(){
        if(this.index < this.imagenes.length - 1){
            document.querySelector(`div[id="${this.index}"]`).classList.remove('slider__circle--standar');
            document.querySelector(`div[id="${this.index}"]`).classList.add('slider__circle--disable');
            this.index += 1;
            sliderimgcontent.style.background = `url(../../recursos/images/${this.imagenes[this.index]})`
            document.querySelector(`div[id="${this.index}"]`).classList.remove('slider__circle--disable');
            document.querySelector(`div[id="${this.index}"]`).classList.add('slider__circle--standar');
        }
    }

    setImgBack(){
        if(this.index > 0){
            document.querySelector(`div[id="${this.index}"]`).classList.remove('slider__circle--standar');
            document.querySelector(`div[id="${this.index}"]`).classList.add('slider__circle--disable');
            this.index -= 1;
            sliderimgcontent.style.background = `url(../../recursos/images/${this.imagenes[this.index]})`
            document.querySelector(`div[id="${this.index}"]`).classList.remove('slider__circle--disable');
            document.querySelector(`div[id="${this.index}"]`).classList.add('slider__circle--standar');
        }
    }
}

const slider = new Slider();




