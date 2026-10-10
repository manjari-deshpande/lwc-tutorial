import { LightningElement } from 'lwc';

export default class TemplateDirectives extends LightningElement {

    //languageSkills =['English','French','Italian'];
    languageSkillsList = [
        {skill:'English', isVisible:false, hiddenText:`I wake up at seven o'clock every morning.
            First, I wash my face and brush my teeth. 
            Then, I eat a healthy breakfast with eggs and toast. 
            I drink a hot cup of coffee. 
            After breakfast, I put on my clothes and walk to work. I like my morning routine because it is quiet and calm.`},
        {skill:'French', isVisible:false, hiddenText:`Bonjour ! Je m'appelle Thomas. J'habite à Paris en France. 
            J'ai vingt ans et je suis étudiant. 
            J'aime le chocolat, le café et la musique. 
            Le matin, je prends un croissant et un café au lait. L'après-midi, je vais à l'université avec mes amis.`},
        {skill:'Italian', isVisible:false, hiddenText:`Buongiorno! Mi chiamo Marco e abito a Roma. 
            Roma è una città molto grande e antica. 
            Ogni mattina, prendo un caffè al bar vicino a casa mia e leggo le notizie. 
            Nel pomeriggio, lavoro in ufficio e la sera mi piace cucinare la pasta con i miei amici.`},
    ]
    skillname;
   

    handleInputChange(event){
        this.skillname = event.target.label;
        console.log(this.skillname);
        const skillchecked = event.target.checked;
        const targetIndex = event.currentTarget.dataset.index; // index of the clicked row
        console.log(targetIndex);

        this.languageSkillsList[targetIndex].isVisible = skillchecked;

        this.languageSkillsList = [...this.languageSkillsList];
    }


    /*get languageSkillsName(){
        let isEnglish = false;
        let isFrench = false;
        let isItalian = false;

        if(this.skillname ==='English' && this.skillchecked){
           isEnglish = true;
        }else if(this.skillname ==='French' && this.skillchecked){
           isFrench = true;
        }else if(this.skillname ==='Italian' && this.skillchecked){
            isItalian = true;
        }
        return {isEnglish,isFrench,isItalian};
    }*/
}