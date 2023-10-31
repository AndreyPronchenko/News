        class News {
            constructor(date, news,) {
                this.date = date;
                this.news = news;
            }
            getNews() {
                return this.news;
        }
        }
            class Massiv extends News {
                constructor(date, news) {
                    super(date, news);
                }
            }
    
        let news1 = new Massiv ('29.10.2023 г.', ' &#9889; Украина намерена отказаться от транзита российского газа после 2024 года',);
        let news2 = new Massiv ('29.10.2023 г.', 'Путин уверен, что Россия и Турция будут развивать отношения по всем направлениям',);
        let news3 = new Massiv ('20.10.2023 г.', 'Армия Израиля заявила, что зафиксировала десять пусков из Ливана',);
        let news4 = new Massiv ('15.10.2023 г.', 'В северной части Израиля прозвучали сирены воздушной тревоги',);
        let news5 = new Massiv ('15.09.2023 г.', ' &#9889; "Яндекс" удалил более 190 тысяч ссылок по требованию Роскомнадзора',);
        let news6 = new Massiv ('10.09.2023 г.', 'В США заявили, что Украина просит деньги, несмотря на полную поддержку',);
        let news7 = new Massiv ('10.08.2023 г.', '&#9889; В Коми пожар перекинулся на резервуар с нефтью',);
    
     
            let Old = [];
            Old.push(news1);
            Old.push(news2);
            Old.push(news3);
            Old.push(news4);
            Old.push(news5);
            Old.push(news6);
            Old.push(news7);
    
        document.querySelector('.table').innerHTML = `<table class='tab'></table>` 
    
        for (let i = 0; i < Old.length; i++){
            let row = document.createElement('tr')
            row.innerHTML = `
                <td>${Old[i].date}</td>
                <td>${Old[i].news}</td>
                `
            document.querySelector('.tab').appendChild(row)
        }
    
        let search = prompt('Введите дату и я покажу новость');
    
        document.querySelector('.table_seek').innerHTML = `<table class='tab_seek'></table>` 
        for (let i = 0; i < Old.length; i++){
            if (search === Old[i].date){
                let row = document.createElement('tr')
                row.innerHTML =  `
                <td>${Old[i].date}</td>
                <td>${Old[i].news}</td>
                `
                document.querySelector('.tab_seek').appendChild(row)
            }
            }


