class System{
    constructor(){
		
		this.star_desc;
        this.features        = this.featureGen(this.dX(10));
        this.star            = this.starGen(this.dX(10));
        this.innerElements   = this.innerElemPop(this.systemElem(this.star), this.features);
        this.primaryElements = this.primaryElemPop(this.systemElem(this.star), this.features);
        this.outerElements   = this.outerElemPop(this.systemElem(this.star), this.features);
        
    }
    // Universal rolling function
    dX(number){
        const roll = Math.floor(Math.random()*number)+1
        return roll;
    }
    // Determines the system feature
    featureGen(roll){
        if(roll == 1){
            return 'Богатая';
        }
        if(roll == 2){
            return 'Гравитационные приливы';
        }
        if(roll == 3){
            return 'Теплица';
        }
        if(roll == 4){
            return 'Проклятая';
        }
        if(roll == 5){
            return 'Пиратская берлога';
        }
        if(roll == 6){
            return 'Разрушенная империя';
        }
        if(roll == 7){
            return 'Потерянное прошлое';
        }
        if(roll == 8){
            return 'Звездная аномалия';
        }
        if(roll == 9){
            return 'Варп Стазис';
        }
        if(roll == 10){
            return 'Варп Турбуленция';
        }
    }
    // Determines the star type
    starGen(roll){
        if(roll==1){
			this.star_desc = 'Яростный свет этой звезды полностью доминирует в системе. Ее цвет, скорее всего, будет синим или сине-белым. Внутреннея зона доминирует, а Основная зона слаба.';
            return 'Могучая'
        };
        if(roll<=4){
			this.star_desc = 'Из сердца этой звезды исходит ровное сияние. Ее цвет, скорее всего, будет чисто белым.';
            return 'Энергичная'
        }
        if(roll<= 7){
			this.star_desc = 'Хотя прошло много веков с тех пор, как эта звезда сияла наиболее ярко, тем не менее, она всё ещё может обеспечивать постоянное свечение для системы. Скорее всего, она будет желтого или желто-оранжевого цвета. Внутреннея зона слаба.';
            return 'Светящаяся'
        }
        if(roll==8){
			this.star_desc = 'Конец жизни звезды неумолимо приближается, хотя она может гореть еще тысячелетия. Многие звезды этого типа имеют огромные размеры, казалось бы, несочетаемые с их слабым светом. Ее цвет, скорее всего, угрюмо-красный. Внешнея зона доминирует.';
            return 'Тусклая'
        }
        if(roll==9){
			this.star_desc = 'Эта звезда - неестественный выброс, излучающий странный свет, который ведет себя так, как не должена. Ее свет может быть любого цвета, даже такого, который не характерен для звезды, от желчно-зеленого до едва заметного фиолетового. Мастер игры может сделать одну Солнечную зону доминирующей или слабой по своему усмотрению.';
            return 'Аномальная'
        }
        if(roll==10){
            let starbinary=[];
            let number = this.dX(10);
            if (number < 7){
                starbinary[0] = this.starGen(this.dX(9))
                starbinary[1] = starbinary[0];
                return starbinary;
            }
            else {
            starbinary[0]=this.starGen(this.dX(9));
            starbinary[1]=this.starGen(this.dX(9));
            return starbinary;
            }
        }
    }
    // Determines the size of each solar zone
    systemElem(star){
        let innerCount = 0;
        let primCount = 0;
        let outCount = 0;
        if(star === 'Могучая' || star[0] === 'Могучая' || star[1] === 'Могучая'){
            innerCount = this.dX(7);
            primCount = this.dX(3);
            outCount = this.dX(5);
        } else if(star === 'Энергичная' || star[0] === 'Энергичная' || star[1] === 'Энергичная'){
            innerCount = this.dX(5);
            primCount = this.dX(5);
            outCount = this.dX(5);
        } else if(star === 'Светящаяся' || star[0] === 'Светящаяся' || star[1] === 'Светящаяся'){
            innerCount = this.dX(3);
            primCount = this.dX(5);
            outCount = this.dX(5);
        } else if(star === 'Тусклая' || star[0] === 'Тусклая' || star[1] === 'Тусклая'){
            innerCount = this.dX(5);
            primCount = this.dX(5);
            outCount = this.dX(7);
        } else {
            innerCount = this.dX(5);
            primCount = this.dX(5);
            outCount = this.dX(5);
        }
        return [innerCount, primCount, outCount]
    } 
    // The following 3 functions populate the solar zones
    innerElemPop(count){
        let innerElems = [];
        for(let i=0;i<count[0];i++){
			let randGen = this.innerGen(this.dX(100))
			if(randGen){
				innerElems.push(randGen);
			}
        } return innerElems;
    }
    primaryElemPop(count){
        let primaryElems = [];
        for(let i=0;i<count[1];i++){
			let randGen = this.primaryGen(this.dX(100))
			if(randGen){
				primaryElems.push(randGen);
			}
        } return primaryElems;
    }
    outerElemPop(count){
        let outerElems = [];
        for(let i=0;i<count[2];i++){
			let randGen = this.outerGen(this.dX(100))
			if(randGen){
				outerElems.push(randGen);
			}
        } return outerElems;
    }
    //the following 3 functions determine what populates the zones
    innerGen(initial){
        if(initial >= 89){
            return 'Солнечные вспышки';
        } else if(initial >= 77){
            return 'Радиационные всплески';
        } else if(initial >= 57){
            return new Planet('Внутренний', this.features);
        } else if(initial >= 46){
            return 'Гравитационный прилив'
        } else if(initial >= 42){
            return new GasGiant('Внутренний', this.features);
        } else if(initial >= 30){
            return 'Пылевое облако';
        } else if(initial >= 21){
            return 'Скопление астероидов';
        } else {
            return;
        }
    }
    
    primaryGen(initial){
        if(initial >= 94){
            return 'Кладбище звездных кораблей';
        } else if(initial >= 65){
            return new Planet('Основной', this.features);
        } else if(initial >= 59){
            return 'Гравитационный прилив';
        } else if(initial >= 48){
            return 'Пылевое облако'
        } else if(initial >= 42){
            return 'Заброшенная станция';
        } else if(initial >= 31){
            return 'Скопление астероидов';
        } else if(initial >= 21){
            return 'Пояс астероидов';
        } else {
            return;
        }
    }
    
    outerGen(initial){
        if(initial >= 94){
            return 'Кладбище звездных кораблей';
        } else if(initial >= 81){
            return new Planet('Внешний', this.features);
        } else if(initial >= 74){
            return 'Гравитационный прилив';
        } else if(initial >= 56){
            return new GasGiant('Внешний', this.features);
        } else if(initial >= 47){
            return 'Пылевое облако';
        } else if(initial >= 41){
            return 'Заброшенная станция'
        }else if(initial >= 30){
            return 'Скопление астероидов';
        } else if(initial >= 21){
            return 'Пояс астероидов';
        } else {
            return;
        }
    }
};
// Above generates a system, below modifies the system
function featureProperties(feature){

    //Богатая
    if(feature === 'Богатая'){
        let zonePlace = Math.floor(Math.random()*3)+1;
        if(zonePlace == 1){
            system.innerElements.push('Новый Пояс астероидов');
            console.log(`Пояс астероидов обнаружен во внутреней системной зоне`);
        } else if(zonePlace == 2){
            system.primaryElements.push('Новый Пояс астероидов');
            console.log(`Пояс астероидов обнаружен в основной системной зоне`);
        } else if(zonePlace == 3){
            system.outerElements.push('Новый Пояс астероидов');
            console.log(`Пояс астероидов обнаружен во внешней системной зоне`);
        }
        return;
        //Add 1 Пояс астероидов/cluster to any 1 zone
    }

    //Гравитационные приливы
    if(feature === 'Гравитационные приливы'){
        let gravTides = Math.floor(Math.random()*5)+1;
        for(let i=0; i < gravTides; i++){
            const randZone = Math.floor(Math.random()*10)+1;
            if(randZone >= 7){
                console.log('Гравитационный прилив обнаружен во внешней системной зоне');
                system.outerElements.push('Гравитационный прилив');
            } else if(randZone >= 4){
                console.log('Гравитационный прилив обнаружен в основной системной зоне');
                system.primaryElements.push('Гравитационный прилив');
            } else {
                console.log('Гравитационный прилив обнаружен во внутреней системной зоне');
                system.innerElements.push('Гравитационный прилив');
            }
        }
        return "Гравитационные приливы";
        //Add 1d5 Гравитационный приливs distributed to any zones
    }

    //Теплица
    if(feature === 'Теплица'){
        system.innerElements.push(new Planet('Внутренний', this.features));
        system.primaryElements.push(new Planet('Основной', this.features));
        system.outerElements.push(new Planet('Внешний', this.features));
        console.log('В этой системе обнаруженны планеты с пригодностью для жизни');
        return;
    }
    

    //Проклятая
    if(feature === 'Проклятая'){
        console.log('Обнаруженно повышение уровня гормонов кортизола и адреналина в экипаже на 20%')
        return;
    }

    //Пиратская берлога
    if(feature === 'Пиратская берлога'){
        console.log('Внимание!: Обнаруженно враждебные суда');
        return;
    }

    //Разрушенная империя
    if(feature === 'Разрушенная империя'){
        console.log('Замеченны неопазнаные структуры');
        return;
    }

    //Потерянное прошлое
    if(feature === 'Потерянное прошлое'){
        const allElements = system.innerElements.concat(system.outerElements, system.primaryElements);
        let planetCount = 0;
        for(let i=0; i<allElements.length; i++){
            if(typeof allElements[i] === 'object'){
                planetCount++;
            }  
        }
        if(planetCount < 4){
            for(let i=0; i< 4-planetCount; i++){
                let rand = Math.floor(Math.random()*3)+1;
                if(rand > 2){
                    system.outerElements.push(new Planet('Внешний', this.features))
                } else if (rand > 1){
                    system.primaryElements.push(new Planet('Основной', this.features))
                } else {
                    system.innerElements.push(new Planet('Внутренний', this.features));
                }
            } 
        }  
        console.log('Внимание!: Обнаруженно сигнал');
        return;
        //minimum 4 planets
    }

    //Звездная аномалия
    if(feature === 'Звездная аномалия'){
        const primary = system.primaryElements;
        const outer = system.outerElements;
        const inner = system.innerElements;
        const allElements = system.innerElements.concat(system.outerElements, system.primaryElements);
        let planetCount = 0;
        for(let i=0; i<allElements.length; i++){
            if(typeof allElements[i] === 'object'){
                planetCount++;
            }  
        }
        if(planetCount > 0){
            let tally = 2;
            while(tally > 0){
                if(outer.indexOf('Planet')>=0){
                        outer[outer.indexOf('Planet')] = 'Без особенностей';
                        tally--;
                } else if(inner.indexOf('Planet')>=0){
                        inner[inner.indexOf('Planet')] = 'Без особенностей';
                        tally--;
                } else if(primary.indexOf('Planet')>=0){
                    if(primary.indexOf('Planet') >= 0){
                        primary[primary.indexOf('Planet')] = 'Без особенностей';
                        tally--;
                    }
                } else {
                    tally--;
                }
            }
        }
        console.log('Внимание!: Звездный поток и светимость колеблются вне обычных ограничений');
        //Minus 2 Planets (Min = 0)
    }

    //Варп Стазис
    if(feature === 'Варп Стазис'){
        console.log('Внимание: Стабильность Варпа превышает ограничения');
        return "Варп Стазис";
        //N/A
    }

    //Варп Турбуленция
    if(feature === 'Варп Турбуленция'){
        console.log('Внимание: Нестабильность Варпа превышает ограничения');
        return "Варп Турбуленция";
        //N/A
    }
}

class Planet{
    constructor(zone, feature){
        this.zone       = zone;
        this.feature    = feature;
		this.ptype		= 'Планета';
        this.body       = this.bodyGen(this.dX(10));
        this.gravity    = this.gravGen(this.dX(10), this.body); 
        this.orbFeat    = this.orbFeatPop(this.orbFeatGen(this.dX(5), this.gravity), this.zone, this.feature); 
        this.atmoPres   = this.atmoPresGen(this.dX(10), this.zone, this.feature, this.gravity);
        this.atmoComp   = this.atmoCompGen(this.dX(10), this.zone, this.feature, this.atmoPres);
        this.climate    = this.climateGen(this.dX(10), this.zone, this.atmoPres);
        this.hab        = this.habGen(this.dX(10), this.feature, this.climate, this.atmoComp);
    }
    dX(number) {
        let roll = Math.floor(Math.random()*number)+1;
        return roll;
    }
    bodyGen(roll) {
        let body;
        if (roll >= 9){
            body = 'Огромная';
        } else if (roll == 8){
            body = 'Большая и плотная'
        } else if (roll >= 5){
            body = 'Большая'
        }else if (roll == 4){
            body = 'Маленькая и плотная'
        }else if (roll >= 2){
            body = 'Маленькая'
        } else {
            body = 'Низкая масса'
        } return body;
    }
    gravGen(roll, body) {
        let mod = 0;
        if (body === 'Огромная'){
            mod = 4;
        } else if(body === 'Большая и плотная'){
            mod = 5;
        } else if(body === 'Большая' || body === 'Маленькая и плотная'){
            mod = 0;
        } else if(body === 'Маленькая'){
            mod = -5;
        } else if(body === 'Низкая масса'){
            mod = -7;
        }
        const gravRoll = roll + mod;
        let grav = '';
        if(gravRoll >= 9){
            grav = 'Высокая гравитация';
        } else if (gravRoll >= 3){
            grav = 'Нормальная гравитация';
        } else if (gravRoll <= 2){
            grav = 'Низкая гравитация'
        } return grav;
    }
    orbFeatGen(roll, grav){
        let orbFeats = 0;
        if (grav === 'Высокая гравитация'){
            orbFeats = roll -1;
        } else if(grav === 'Нормальная гравитация'){
            orbFeats = roll -2;
        } else if(grav === 'Низкая гравитация'){
            orbFeats = roll -3;
        } return orbFeats;
    }

    orbFeatPop(count, grav, zone, feature){
        if(count < 1){
            count++;
        }
        let orbFeats = [];
        let mod = 0;
        if(grav === 'Высокая гравитация'){
             mod = 11;
        } else if(grav === 'Низкая гравитация'){
            mod = -9;
        } else {
            mod = 1;
        }
        for(let i = 0; i<count; i++){
            let roll = Math.floor(Math.random()*100)+ mod;
            if(roll > 90){
                orbFeats.push(new Moon(zone, feature));
            } else if (roll > 60){
                orbFeats.push('Малая Луна');
            } else if (roll > 45){
                orbFeats.push('Крупный астероид');
            } else {
                continue;
            }
        } return orbFeats;
    }
    // this begins where Zone and Features will be used to determine composition
    atmoPresGen(roll, zone, feature, grav){
        let atmo = '';
        let mod = 0;
        if(feature === 'Теплица' && zone === 'Основной'){
            mod++;
        }
        if(grav === 'Высокая гравитация'){
            mod++;
        }
        if(grav === 'Низкая гравитация'){
            mod==2;
        }
        const atmoRoll = roll + mod;
        if(atmoRoll >9){
            atmo = 'Тяжелая';
        } else if (atmoRoll >4){
            atmo = 'Умеренная';
        } else if (atmoRoll >1){
            atmo = 'Тонкая';
        } else {
            atmo = 'Нету'
        } return atmo;
    }
    atmoCompGen(roll, zone, feature, atmo){
        let atmoComp = '';
        if(zone === 'Основной' && feature === 'Теплица'){
            roll +=2;
        }
        if(atmo === 'Нету'){
            roll = 0;
        }
        if(roll > 7){
            atmoComp = 'Чистая';
        } else if(roll > 4){
            atmoComp = 'Испорченная';
        } else if(roll > 2) {
            atmoComp = 'Токсичная';
        } else if(roll > 1){
            atmoComp = 'Коррозионная';
        } else if(roll == 1) {
            atmoComp = 'Смертельная';
        } else {
            atmoComp = 'Отсутствует атмосфера'
        } return atmoComp;
    }
    climateGen(roll, zone, atmo){
        let climate = '';
        //Determining climate on planets with no atmo by solar zone
        if(atmo === 'Нету' && zone === 'Внутренний'){
            climate = 'Пылающий мир'
        } else if(atmo === 'Нету' && zone === 'Внешний'){
            climate = 'Ледяной мир';
        } else if(atmo === 'Нету' && zone === 'Основной'){
            let rand = Math.floor(Math.random()*2)+1;
            if(rand ==2){
                climate = "Ледяной мир";
            } else {
                climate = 'Пылающий мир'
            }
        }
        //Determining climate with atmo by solar zone
        if(zone === 'Внутренний'){
            roll -= 6;
        }
        if(zone === 'Внешний'){
            roll += 6;
        }
        //Generally determining climate
        if(roll > 10) {
            climate = 'Ледяной мир';
        } else if(roll > 7) {
            climate = 'Холодный мир';
        } else if(roll > 3){
            climate = 'Мир с умеренным климатом';
        } else if(roll > 0) {
            climate = 'Горячий мир'
        } else {
            climate = 'Пылающий мир'
        }
        return climate;
    }
    habGen(roll, feature, climate, atmo){
        let hab = '';
        let mod = 0;
        if(feature === "Теплица"){
            mod +2;
        }
        if(atmo === 'Отсутствует атмосфера'){
            hab = 'Не пригодна для жизни';
        } else if (atmo !== 'Чистая'){
            hab = 'Не пригодна для жизни';
        } else {
            if(climate === 'Пылающий мир' || 'Ледяной мир'){
                mod -= 7;
            } else if(climate === 'Горячий мир' || 'Холодный мир'){
                mod -= 2;
            } else if(climate === 'Мир с умеренным климатом'){
                mod += 0;
            } 

            let num = roll + mod;
            if(num > 7){
                hab = 'Зеленая';
            } else if (num > 5){
                hab = 'Ограниченная экосистема';
            } else if (num > 3){
                hab = 'Только Вода';
            } else if(num > 1){
                hab = 'Запертая вода';
            } else {
                hab = 'Негостеприимная';
            }
        }
        return hab;
    }
}

class Moon{
    constructor(zone, feature){
        this.zone       = zone;
        this.feature    = feature;
        this.body       = this.bodyGen(this.dX(10));
        this.gravity    = this.gravGen(this.dX(10), this.body);  
        this.atmoPres   = this.atmoPresGen(this.dX(10), this.zone, this.feature, this.gravity);
        this.atmoComp   = this.atmoCompGen(this.dX(10), this.zone, this.feature, this.atmoPres);
        this.climate    = this.climateGen(this.dX(10), this.zone, this.atmoPres);
        this.hab        = this.habGen(this.dX(10), this.feature, this.climate, this.atmoComp);
    }
    dX(number) {
        let roll = Math.floor(Math.random()*number)+1;
        return roll;
    }
    bodyGen(roll) {
        let body;
        if (roll >= 9){
            body = 'Огромная';
        } else if (roll == 8){
            body = 'Большая и плотная'
        } else if (roll >= 5){
            body = 'Большая'
        }else if (roll == 4){
            body = 'Маленькая и плотная'
        }else if (roll >= 2){
            body = 'Маленькая'
        } else {
            body = 'Низкая масса'
        } return body;
    }
    gravGen(roll, body) {
        let mod = 0;
        if (body === 'Огромная'){
            mod = 4;
        } else if(body === 'Большая и плотная'){
            mod = 5;
        } else if(body === 'Большая' || body === 'Маленькая и плотная'){
            mod = 0;
        } else if(body === 'Маленькая'){
            mod = -5;
        } else if(body === 'Низкая масса'){
            mod = -7;
        }
        const gravRoll = roll + mod;
        let grav = '';
        if(gravRoll >= 9){
            grav = 'Высокая гравитация';
        } else if (gravRoll >= 3){
            grav = 'Нормальная гравитация';
        } else if (gravRoll <= 2){
            grav = 'Низкая гравитация'
        } return grav;
    }

    // this begins where Zone and Features will be used to determine composition
    atmoPresGen(roll, zone, feature, grav){
        let atmo = '';
        let mod = 0;
        if(feature === 'Теплица' && zone === 'Основной'){
            mod++;
        }
        if(grav === 'Высокая гравитация'){
            mod++;
        }
        if(grav === 'Низкая гравитация'){
            mod==2;
        }
        const atmoRoll = roll + mod;
        if(atmoRoll >9){
            atmo = 'Тяжелая';
        } else if (atmoRoll >4){
            atmo = 'Умеренная';
        } else if (atmoRoll >1){
            atmo = 'Тонкая';
        } else {
            atmo = 'Нету'
        } return atmo;
    }
    atmoCompGen(roll, zone, feature, atmo){
        let atmoComp = '';
        if(zone === 'Основной' && feature === 'Теплица'){
            roll +=2;
        }
        if(atmo === 'Нету'){
            roll = 0;
        }
        if(roll > 7){
            atmoComp = 'Чистая';
        } else if(roll > 4){
            atmoComp = 'Испорченная';
        } else if(roll > 2) {
            atmoComp = 'Токсичная';
        } else if(roll > 1){
            atmoComp = 'Коррозионная';
        } else if(roll == 1) {
            atmoComp = 'Смертельная';
        } else {
            atmoComp = 'Отсутствует атмосфера'
        } return atmoComp;
    }
    climateGen(roll, zone, atmo){
        let climate = '';
        //Determining climate on planets with no atmo by solar zone
        if(atmo === 'Нету' && zone === 'Внутренний'){
            climate = 'Пылающий мир'
        } else if(atmo === 'Нету' && zone === 'Внешний'){
            climate = 'Ледяной мир';
        } else if(atmo === 'Нету' && zone === 'Основной'){
            let rand = Math.floor(Math.random()*2)+1;
            if(rand ==2){
                climate = "Ледяной мир";
            } else {
                climate = 'Пылающий мир'
            }
        }
        //Determining climate with atmo by solar zone
        if(zone === 'Внутренний'){
            roll -= 6;
        }
        if(zone === 'Внешний'){
            roll += 6;
        }
        //Generally determining climate
        if(roll > 10) {
            climate = 'Ледяной мир';
        } else if(roll > 7) {
            climate = 'Холодный мир';
        } else if(roll > 3){
            climate = 'Мир с умеренным климатом';
        } else if(roll > 0) {
            climate = 'Горячий мир'
        } else {
            climate = 'Пылающий мир'
        }
        return climate;
    }
    habGen(roll, feature, climate, atmo){
        let hab = '';
        let mod = 0;
        if(feature === "Теплица"){
            mod +2;
        }
        if(atmo === 'Отсутствует атмосфера'){
            hab = 'Не пригодна для жизни';
        } else if (atmo !== 'Чистая'){
            hab = 'Не пригодна для жизни';
        } else {
            if(climate === 'Пылающий мир' || 'Ледяной мир'){
                mod -7;
            } else if(climate === 'Горячий мир' || 'Холодный мир'){
                mod -2;
            } else if(climate === 'Мир с умеренным климатом'){
                mod +0;
            } 

            let num = roll + mod;
            if(num > 7){
                hab = 'Зеленая';
            } else if (num > 5){
                hab = 'Ограниченная экосистема';
            } else if (num > 3){
                hab = 'Только Вода';
            } else if(num > 1){
                hab = 'Запертая вода';
            } else {
                hab = 'Негостеприимная';
            }
        }
        return hab;
    }
}

class GasGiant{
    constructor(zone, feature){
        this.zone    = zone;
        this.feature = feature;
		this.ptype	 = 'Газовая';
        this.body    = this.bodyGen(this.dX(10));
        this.gravity = this.gravGen(this.dX(10), this.body);
        this.orbFeat = this.orbFeatPop(this.orbFeatGen(this.gravity), this.gravity, this.zone, this.feature); 

    }
    dX(number) {
        let roll = Math.floor(Math.random()*number)+1;
        return roll;
    }
    bodyGen(roll){
        let body;
        if(roll > 8){
            body = 'Газовый карлик';
        } else if(roll > 2){
            body = 'Газовый гигант';
        } else {
            body = 'Массивный газовый гигант';
        } return body;
    }
    gravGen(roll, body){
        let grav;
        let mod;
        if(body === 'Газовый карлик'){
            mod = -5;
        } else if(body === 'Массивный газовый гигант'){
            mod = 3;
        } else {
            mod = 0;
        }
        if(roll + mod > 9){
            grav = 'Титаничесая';
        } else if(roll + mod > 6){
            grav = 'Мощный';
        } else if(roll + mod > 2){
            grav = 'Сильная';
        } else {
            grav = 'Слабая';
        } return grav;
    }
    orbFeatGen(grav){
        let orbFeats;
        if(grav === 'Титаничесая'){
            orbFeats = ((Math.floor(Math.random()*5)+1)*3)+3;
        } else if(grav === 'Мощный'){
            orbFeats = Math.floor(Math.random()*10)+3;
        } else if(grav === 'Сильная'){
            orbFeats = Math.floor(Math.random()*7)+1;
        } else {
            orbFeats = Math.floor(Math.random()*4)+1;
        } return orbFeats;
    }
    orbFeatPop(numFeat, grav, zone, feature){
        let mod;
        let orbFeats = [];
        if(grav === 'Титаничесая'){
            mod = 30;
        } else if(grav === 'Мощный'){
            mod = 20;
        } else if(grav === 'Сильная'){
            mod = 15;
        } else {
            mod = 10;
        }
        for(let i = 0; i < numFeat; i++){
            let roll = Math.floor(Math.random()*100)+1;
            if((roll + mod) > 85){
                orbFeats.push(new Moon(zone, feature));
            } else if((roll + mod) > 50){
                orbFeats.push('Малая Луна');
            } else if((roll + mod) > 35) {
                orbFeats.push('Кольца (пыль)');
            } else if((roll + mod) > 20) {
                orbFeats.push('Кольца (обломки)');
            } else {
                continue;
            }
        } return orbFeats;
    }
}

// Initializes the system
const system = new System;
// Modifies the system
featureProperties(system.features);
// Displays the system
console.log(system);

function innerElemsDisplay() {
    let numElems = system.innerElements.length;
	if(numElems == 0){
		return '<li>Без особенностей';
	}
    let info = [];
    for(let i=0; i < numElems; i++){
        if(typeof system.innerElements[i] == 'string'){
            info[i] = '<li>' + system.innerElements[i];
        } else {
            let planet = system.innerElements[i];
            if(planet.ptype === 'Планета'){
				info[i] = '<h4>Планета</h4><ul> <li>Размер Планеты: ' + planet.body + '<li>Сила Гравитации: '+ planet.gravity + '<li>Климат: ' + planet.climate + '<li>Атмосфера: '+ planet.atmoPres + '<li>Состав атмосферы: ' + planet.atmoComp + '<li>Пригодность для жизни: '+ planet.hab + '</ul>';
			}else{
				info[i] = '<h4>Газовый Гигант</h4><ul> <li>Размер Планеты: ' + planet.body + '<li>Сила Гравитации: ' + planet.gravity + '</ul>';
			}
			let numFeat = planet.orbFeat.length;
			if(numFeat > 1){
				info[i] += '<h5>Орбита</h5><ul>'
				for(let p = 0; p < numFeat; p++){
					if(typeof planet.orbFeat[p] == 'string'){
						info[i] += '<li>' + planet.orbFeat[p];
					}else{
						let moona = planet.orbFeat[p];
						info[i] += '<h5>Луна</h5><ul> <li>Размер Луны: ' + moona.body + '<li>Сила Гравитации: '+ moona.gravity + '<li>Климат: ' + moona.climate + '<li>Атмосфера: '+ moona.atmoPres + '<li>Состав атмосферы: ' + moona.atmoComp + '<li>Пригодность для жизни: '+ moona.hab + '</ul><br>';
					}
				}
				info[i] += '</ul>'
			}
        }
        
    }
    return info.toString();
}
function primaryElemsDisplay() {
    let numElems = system.primaryElements.length;
	if(numElems == 0){
		return '<li>Без особенностей';
	}
    let info = [];
    for(let i=0; i < numElems; i++){
        if(typeof system.primaryElements[i] == 'string'){
            info[i] = '<li>' + system.primaryElements[i];
        } else {
            let planet = system.primaryElements[i];
			if(planet.ptype === 'Планета'){
				info[i] = '<h4>Планета</h4><ul> <li>Размер Планеты: ' + planet.body + '<li>Сила Гравитации: '+ planet.gravity + '<li>Климат: ' + planet.climate + '<li>Атмосфера: '+ planet.atmoPres + '<li>Состав атмосферы: ' + planet.atmoComp + '<li>Пригодность для жизни: '+ planet.hab + '</ul>';
			}else{
				info[i] = '<h4>Газовый Гигант</h4><ul> <li>Размер Планеты: ' + planet.body + '<li>Сила Гравитации: ' + planet.gravity + '</ul>';
			}
			let numFeat = planet.orbFeat.length;
			if(numFeat > 1){
				info[i] += '<h5>Орбита</h5><ul>'
				for(let p = 0; p < numFeat; p++){
					if(typeof planet.orbFeat[p] == 'string'){
						info[i] += '<li>' + planet.orbFeat[p];
					}else{
						let moona = planet.orbFeat[p];
						info[i] += '<h5>Луна</h5><ul> <li>Размер Луны: ' + moona.body + '<li>Сила Гравитации: '+ moona.gravity + '<li>Климат: ' + moona.climate + '<li>Атмосфера: '+ moona.atmoPres + '<li>Состав атмосферы: ' + moona.atmoComp + '<li>Пригодность для жизни: '+ moona.hab + '</ul><br>';
					}
				}
				info[i] += '</ul>'
			}
		}
        
    }
    return info.toString();
}
function outerElemsDisplay() {
    let numElems = system.outerElements.length;
	if(numElems == 0){
		return '<li>Без особенностей';
	}
    let info = [];
    for(let i=0; i < numElems; i++){
        if(typeof system.outerElements[i] == 'string'){
            info[i] = '<li>' + system.outerElements[i];
        } else {
            let planet = system.outerElements[i];
            if(planet.ptype === 'Планета'){
				info[i] = '<h4>Планета</h4><ul> <li>Размер Планеты: ' + planet.body + '<li>Сила Гравитации: '+ planet.gravity + '<li>Климат: ' + planet.climate + '<li>Атмосфера: '+ planet.atmoPres + '<li>Состав атмосферы: ' + planet.atmoComp + '<li>Пригодность для жизни: '+ planet.hab + '</ul>';
			}else{
				info[i] = '<h4>Газовый Гигант</h4><ul> <li>Размер Планеты: ' + planet.body + '<li>Сила Гравитации: ' + planet.gravity + '</ul>';
			}
			let numFeat = planet.orbFeat.length;
			if(numFeat > 1){
				info[i] += '<h5>Орбита</h5><ul>'
				for(let p = 0; p < numFeat; p++){
					if(typeof planet.orbFeat[p] == 'string'){
						info[i] += '<li>' + planet.orbFeat[p];
					}else{
						let moona = planet.orbFeat[p];
						info[i] += '<h5>Луна</h5><ul> <li>Размер Луны: ' + moona.body + '<li>Сила Гравитации: '+ moona.gravity + '<li>Климат: ' + moona.climate + '<li>Атмосфера: '+ moona.atmoPres + '<li>Состав атмосферы: ' + moona.atmoComp + '<li>Пригодность для жизни: '+ moona.hab + '</ul>';
					}
				}
				info[i] += '</ul>'
			}
		}
        
    }
    return info.toString();
}

document.getElementById('star').innerHTML = 'Звезда: <abbr title= "'+ system.star_desc +'">' + system.star + '</abbr>';
document.getElementById('feature').innerHTML = 'Особенности: ' + system.features;
document.getElementById('innerElems').innerHTML ='<h3>Елементы Внутренней Зоны</h3><ul>' + innerElemsDisplay() + '</ul>';
document.getElementById('primaryElems').innerHTML ='<h3>Елементы Основной Зоны</h3><ul>' + primaryElemsDisplay() + '</ul>';
document.getElementById('outerElems').innerHTML ='<h3>Елементы Внешнней Зоны</h3><ul>' + outerElemsDisplay() + '</ul>';
document.getElementById('JSON').innerHTML = JSON.stringify(system);