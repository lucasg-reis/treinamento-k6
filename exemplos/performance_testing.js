// Quantidade de tráfego
// Condições normais e de pico 
// Garantir funcionamento

//carga constante
export const options1 = {
    vus: 100,
    duration: '20m',
};

//carga variável
export const options2 = {
    stages: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '5m', target: 0 },
    ]
};