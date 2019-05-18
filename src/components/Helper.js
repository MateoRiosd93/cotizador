// archivo js donde realizaremos funciones para minimizar el codigo en los componentes 
export function resultado (marca,año,plan){
    let total = 0 ;

    if(marca === 'Americano'){
        total = 50000000;
    }else if (marca === 'Europeo'){
        total = 35000000;
    }else{
        total = 18000000;
    }
    
    if(año === '2019'){
        total += 55000;
    }else if(año === '2018'){
        total += 45000;
    }else if(año === '2017'){
        total += 35000;
    }else if(año === '2016'){
        total += 25000;
    }else if(año === '2015'){
        total += 15000;
    }else{
        total += 5000;
    }

    if(plan === 'basico'){
      total += 11500;
    }else{
      total += 113500;
    }
    
    return total;
}