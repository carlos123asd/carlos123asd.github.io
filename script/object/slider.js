class Slider{
    constructor(sliderimgcontent,sliderbtnback,sliderbtnnext,imagenes,index = 0){
        this.sliderimgcontent = sliderimgcontent;
        this.sliderbtnback = sliderbtnback;
        this.sliderbtnnext = sliderbtnnext;
        this.imagenes = imagenes;
        this.index = index;
    }

    get getsliderimgcontent () {
        return this.getsliderimgcontent;
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
const arrayimgs = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];

const slider = new Slider(document.getElementById('sliderimgcontent'),
document.getElementById('sliderbtnback'),
document.getElementById('sliderbtnnext'),arrayimgs);

slider.setsliderimgcontent();

//NEXT
document.getElementById('sliderbtnnext').addEventListener('click',event => {
    slider.setImgNext();
});
//BACK
document.getElementById('sliderbtnback').addEventListener('click',event => {
    slider.setImgBack();
});
