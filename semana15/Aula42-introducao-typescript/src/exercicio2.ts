// a)

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros:Array<number>):Estatisticas {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros:Array<number>) =>Estatisticas
}

const amostraDeIdades: amostra = {
	numeros: [21, 18, 65, 44, 15, 18],
	obterEstatisticas
}


