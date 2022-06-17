/* Variables to hold input elements and etc */
const makeInput = document.getElementById('make');
const modelInput = document.getElementById('model');
const yearInput = document.getElementById('year');
const engineInput = document.getElementById('engine');
const crashInput = document.getElementById('crashed');
const searchButton = document.getElementById('search-button');
const inputForm = document.getElementById('search-form');
const yearNow = 2022;

/* Data for the models selection */
const audimodels = `
<option value="A4">A4</option>
<option value="A6">A6</option>
`;
const audiprices = {
    "A4": 7000,
    "A6": 7200
}

const cadillacmodels = `
<option value="Escalade">Escalade</option>
`;
const cadillacprices = {
    "Escalade": 19000
}


const chevroletmodels = `
<option value="Cruze">Cruze</option>
<option value="Lacetti">Lacetti</option>
<option value="Matiz">Matiz</option>
`;
const chevroletprices = {
    "Matiz": 4000,
    "Lacetti": 3500,
    "Cruze": 6800 
}

const chryslermodels = `
<option value="300C">300C</option>
<option value="Voyager">Voyager</option>
`;
const chryslerprices = {
    "300C": 5000,
    "Voyager": 3500
}

const citroenmodels = `
<option value="Berlingo">Berlingo</option>
`;
const citroenprices = {
    "Berlingo": 4500
}

const bmwmodels = `
<option value="3Series">3Series</option>
<option value="5Series">5Series</option>
<option value="7Series">7Series</option>
<option value="X5">X5</option>
`;
const bmwprices = {
    "3Series": 6000,
    "5Series": 9000,
    "7Series": 12000,
    "X5": 13500
}


const fordmodels = `
<option value="Focus">Focus</option>
<option value="Mondeo">Mondeo</option>
`;
const fordprices = {
    "Focus": 5000,
    "Mondeo": 4000
}

const hondamodels = `
<option value="Accord">Accord</option>
<option value="CR-V">CR-V</option>
<option value="Civic">Civic</option>
<option value="Fit">Fit</option>
<option value="HR-V">HR-V</option>
<option value="Inspire">Inspire</option>
<option value="Jazz">Jazz</option>
<option value="Torneo">Torneo</option>
<option value="Odyssey">Odyssey</option>
<option value="Stepwgn">Stepwgn</option>
<option value="Stream">Stream</option>
`;
const hondaprices = {
    "Stepwgn": 9000,
    "Accord": 4100,
    "CR-V": 8000,
    "Civic": 5600,
    "Fit": 5000,
    "Jazz": 5600,
    "Torneo": 5000,
    "Odyssey": 6500,
    "Stream": 5200 
}

const hyundaimodels = `
<option value="Getz">Getz</option>
<option value="Solaris">Solaris</option>
<option value="Sonata">Sonata</option>
<option value="Tucson">Tucson</option>
<option value="Elantra">Elantra</option>
`;
const hyundaiprices = {
    "Getz": 4500,
    "Sonata": 9300,
    "Tucson": 7000 
}

const jeepmodels = `
<option value="Wrangler">Wrangler</option>
<option value="Cherokee">Cherokee</option>
`;
const jeepprices = {
    "Matiz": 10000,
    "Cherokee": 6200
}

const kiamodels = `
<option value="Sportage">Sportage</option>
<option value="Rio">Rio</option>
<option value="Sorento">Sorento</option>
<option value="K5">K5</option>
<option value="Morning">Morning</option>
`;
const kiaprices = {
    "Morning": 4200,
    "K5": 11000,
    "Sportage": 12000,
    "Sorento": 6000,
    "Rio": 3500
}

const ladamodels = `
<option value="Niva">Niva</option>
<option value="2107">2107</option>
`;
const ladaprices = {
    "Niva": 5000,
    "2107": 2000 
}

const landrovermodels = `
<option value="Range Rover">Range Rover</option>
<option value="RR Sport">RR Sport</option>
`;
const landroverprices = {
    "Range Rover": 9900,
    "RR Sport": 13000
}

const lexusmodels = `
<option value="ES">ES</option>
<option value="GX">GX</option>
<option value="IS">IS</option>
<option value="LX">LX</option>
<option value="RX">RX</option>
`;
const lexusprices = {
    "ES": 13000,
    "GX": 22000,
    "IS": 12000,
    "LX": 25000,
    "RX": 20000 
}


const mazdamodels = `
<option value="3">3</option>
<option value="Demio">Demio</option>
`;
const mazdaprices = {
    "3": 6800,
    "Demio": 3800 
}

const mercedesbenzmodels = `
<option value="EClass">EClass</option>
<option value="SClass">SClass</option>
<option value="CClass">CClass</option>
<option value="GClass">GClass</option>
`;
const mercedesbenzprices = {
    "EClass": 9500,
    "SClass": 14000,
    "CCLass": 8500,
    "GClass": 27000 
}

const nissanmodels = `
<option value="Pathfinder">Pathfinder</option>
<option value="Teana">Teana</option>
<option value="Primera">Primera</option>
<option value="X-Trail">X-Trail</option>
`;
const nissanprices = {
    "Pathfinder": 12000,
    "Teana": 5200,
    "Primera": 4000,
    "X-Trail": 9000 
}

const porschemodels = `
<option value="Cayenne">Cayenne</option>
`;
const porscheprices = {
    "Cayenne": 13000
}

const subarumodels = `
<option value="Forester">Forester</option>
<option value="Impreza">Impreza</option>
<option value="Outback">Outback</option>
<option value="Legacy">Legacy</option>
`;
const subaruprices = {
    "Forester": 9500,
    "Impreza": 6200,
    "Outback": 11000,
    "Legacy": 8200 
}

const teslamodels = `
<option value="Model S">Model S</option>
<option value="Model 3">Model 3</option>
`;
const teslaprices = {
    "Model S": 25000,
    "Model 3": 28000
}

const toyotamodels = `
<option value="Camry">Camry</option>
<option value="Avensis">Avensis</option>
<option value="RAV4">RAV4</option>
<option value="Highlander">Highlander</option>
<option value="Land Cruiser">Land Cruiser</option>
<option value="Prius">Prius</option>
`;
const toyotaprices = {
    "Camry": 15000,
    "Avensis": 10000,
    "RAV4": 18000,
    "Highlander": 20000,
    "Land Cruiser": 30000,
    "Prius": 15000 
}

const volkswagenmodels = `
<option value="Golf">Golf</option>
<option value="Passat">Passat</option>
`;
const volkswagenprices = {
    "Golf": 5500,
    "Passat": 5700
}


/* Models being changed depending on the selected make of the vehicle */
makeInput.addEventListener('change', function(){
    const makechoosen = makeInput.value;
    switch(makechoosen){
        case 'Audi':
            modelInput.innerHTML = audimodels;
            break;
        case 'Cadillac':
            modelInput.innerHTML = cadillacmodels;
            break;
        case 'Chevrolet':
            modelInput.innerHTML = chevroletmodels;
            break;
        case 'BMW':
            modelInput.innerHTML = bmwmodels;
            break;
        case 'Toyota':
            modelInput.innerHTML = toyotamodels;
            break;
        case 'Honda':
            modelInput.innerHTML = hondamodels;
            break;
        case 'Subaru':
            modelInput.innerHTML = subarumodels;
            break;
        case 'Nissan':
            modelInput.innerHTML = nissanmodels;
            break;
        case 'Chrysler':
        modelInput.innerHTML = chryslermodels;
            break;
        case 'Citroen':
            modelInput.innerHTML = citroenmodels;
            break;
        case 'Ford':
            modelInput.innerHTML = fordmodels;
            break;
        case 'Hyundai':
            modelInput.innerHTML = hyundaimodels;
            break;
        case 'Jeep':
            modelInput.innerHTML = jeepmodels;
            break;
        case 'KIA':
            modelInput.innerHTML = kiamodels;
            break;
        case 'Lada':
            modelInput.innerHTML = ladamodels;
            break;
        case 'Land Rover':
            modelInput.innerHTML = landrovermodels;
            break;
        case 'Lexus':
            modelInput.innerHTML = lexusmodels;
            break;
        case 'Mazda':
            modelInput.innerHTML = mazdamodels;
            break;
        case 'Mercedes-Benz':
            modelInput.innerHTML = mercedesbenzmodels;
            break;
        case 'Tesla':
            modelInput.innerHTML = teslamodels;
            break;
        case 'Porsche':
            modelInput.innerHTML = porschemodels;
            break;
        case 'Subaru':
            modelInput.innerHTML = subarumodels;
            break;
        case 'Volkswagen':
            modelInput.innerHTML = volkswagenmodels;
            break;

    }
})

/* EventListener for when form is submitted */
inputForm.addEventListener('submit', function(e){
    const priceoutput = document.getElementById('results-price');
    const imageoutput = document.getElementById('suv-image');
    e.preventDefault();
    const datanow = collectInput();
    const priceofthemodel = getPriceForModel(datanow.make, datanow.model);
    const finalprice = calculateFinalPrice(datanow, priceofthemodel);
    priceoutput.innerHTML = `Price: ${finalprice} $`;
    imageoutput.src = `./Images/Carmodels/${datanow.make}.png`;

})

/* Function for collecting input data */
function collectInput(){
    const inputData = {
        make: makeInput.value,
        model: modelInput.value,
        year: yearInput.value,
        engine: engineInput.value,
        crashed: crashInput.value
    }

    return inputData;
}

/* Function for getting the price for the selected model */
function getPriceForModel(make, model){
    var price = 0;
    switch(make){
        case "BMW":
            price = bmwprices[model];
            break;
        case "Honda":
            price = hondaprices[model];
            break;
        case "Subaru":
            price = subaruprices[model];
            break;
        case "Nissan":
            price = nissanprices[model];
            break;
        case "Toyota":
            price = toyotaprices[model];
            break;
        case "Audi":
            price = audiprices[model];
            break;
        case "Cadillac":
            price = cadillacprices[model];
            break;
        case "Chevrolet":
            price = chevroletprices[model];
            break;
        case "Chrysler":
            price = chryslerprices[model];
            break;
        case "Citroen":
            price = citroenprices[model];
            break;
        case "Ford":
            price = fordprices[model];
            break;
        case "Hyundai":
            price = hyundaiprices[model];
            break;
        case "Jeep":
            price = jeepprices[model];
            break;
        case "KIA":
            price = kiaprices[model];
            break;
        case "Lada":
            price = ladaprices[model];
            break;
        case "Land Rover":
            price = landroverprices[model];
            break;
        case "Lexus":
            price = lexusprices[model];
            break;
        case "Mazda":
            price = mazdaprices[model];
            break;
        case "Mercedes-Benz":
            price = mercedesbenzprices[model];
            break;
        case "Porsche":
            price = porscheprices[model];
            break;
        case "Subaru":
            price = subaruprices[model];
            break;
        case "Tesla":
            price = teslaprices[model];
            break;
        case "Volkswagen":
            price = volkswagenprices[model];
            break;
    }

    return price;
}

/* Function for calculating final price for the selected model and characteristics */
function calculateFinalPrice(datanow, priceofthemodel){

    /* Age of the car times 150$ meaning that car loses 150$ of its price per year */
    let finalprice = priceofthemodel - ((2006 - parseInt(datanow.year)) * 100);

    /* Reduce the price depending on the engine capacity, higher the engine cheaper the vehicle gets */
    switch(datanow.engine){
        case "1.8":
            finalprice += 150;
            break;
        case "2.5":
            finalprice += 200;
            break;
        case "3.5":
            finalprice += 250;
            break;
        case "4.0":
            finalprice += 300;
            break;
        case "4.4":
            finalprice += 350;
            break;
        case "5.0":
            finalprice += 400;
            break;
        case "6.4":
            finalprice += 450;
            break;
    }

    /* Now again reduce the price depending if its crashed */
    switch(datanow.crashed){
        case "0":
            break;
        case "1":
            finalprice -= 500;
            break;
        case "2":
            finalprice -= 1000;
            break;
        case "3":
            finalprice -= 1500;
            break;
        case "4":
            finalprice -= 2000;
            break;
        case "5":
            finalprice -= 2500;
            break;
    }

    return finalprice;
}