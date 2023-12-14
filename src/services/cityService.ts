import { ICity } from '../types';

const cities: ICity[] = [
    {
        "name": "Sydney",
        "name_native": "Sydney",
        "country": "Australia",
        "continent": "Australia",
        "latitude": "-33.865143",
        "longitude": "151.209900",
        "population": "5312000",
        "founded": "1788",
        "landmarks": [
            "Sydney Opera House",
            "Sydney Harbour Bridge",
            "Queen Victoria Building"
        ]
    },
    {
        "name": "New York City",
        "name_native": "New York City",
        "country": "USA",
        "continent": "North America",
        "latitude": "40.730610",
        "longitude": "-73.935242",
        "population": "8419000",
        "founded": "1624",
        "landmarks": [
            "Chrysler Building",
            "Brooklyn Bridge",
            "Madison Square Garden"
        ]
    },
    {
        "name": "Madrid",
        "name_native": "Madrid",
        "country": "Spain",
        "continent": "Europe",
        "latitude": "40.416775",
        "longitude": "-3.703790",
        "population": "3223000",
        "founded": "1083",
        "landmarks": [
            "Royal Palace",
            "Plaza Mayor",
            "Plaza de Cibeles"
        ]
    },
    {
        "name": "Moscow",
        "name_native": "Москва",
        "country": "Russia",
        "continent": "Europe",
        "latitude": "55.751244",
        "longitude": "37.618423",
        "population": "11920000",
        "founded": "1147",
        "landmarks": [
            "Saint Basil's Cathedral",
            "Kremlin",
            "Bolshoi Theatre"
        ]
    },
    {
        "name": "Tokyo",
        "name_native": "東京",
        "country": "Japan",
        "continent": "Asia",
        "latitude": "35.652832",
        "longitude": "139.839478",
        "population": "13960000",
        "founded": "1603",
        "landmarks": [
            "Meji Shrine",
            "Asakusa",
            "Tokyo Skytree"
        ]
    },
    {
        "name": "Lagos",
        "name_native": "Lagos",
        "country": "Nigeria",
        "continent": "Africa",
        "latitude": "6.465422",
        "longitude": "3.406448",
        "population": "14800000",
        "founded": "1914",
        "landmarks": [
            "Iga Idungaran",
            "Freedom Park",
            "The Cathedral Church of Christ"
        ]
    },
    {
        "name": "Sao Paulo",
        "name_native": "São Paulo",
        "country": "Brazil",
        "continent": "South America",
        "latitude": "-23.533773",
        "longitude": "-46.625290",
        "population": "12330000",
        "founded": "1554",
        "landmarks": [
            "Mosteiro De Sao Bento",
            "Italian Building",
            "Farol Santander"
        ]
    },
    {
        "name": "Munich",
        "name_native": "München",
        "country": "Germany",
        "continent": "Europe",
        "latitude": "48.137154",
        "longitude": "11.576124",
        "population": "1472000",
        "founded": "1158",
        "landmarks": [
            "Bavaria statue",
            "Marienplatz",
            "ottonova office"
        ]
    },
    {
        "name": "Paris",
        "name_native": "Paris",
        "country": "France",
        "continent": "Europe",
        "latitude": "48.856613",
        "longitude": "2.352222",
        "population": "2148000",
        "founded": "52 BC",
        "landmarks": [
            "Eiffel Tower",
            "Louvre Museum",
            "Notre-Dame Cathedral"
        ]
    },
    {
        "name": "Rome",
        "name_native": "Roma",
        "country": "Italy",
        "continent": "Europe",
        "latitude": "41.902783",
        "longitude": "12.496366",
        "population": "2873000",
        "founded": "753 BC",
        "landmarks": [
            "Colosseum",
            "Roman Forum",
            "Trevi Fountain"
        ]
    },
    {
        "name": "Cairo",
        "name_native": "Al-Qāhirah",
        "country": "Egypt",
        "continent": "Africa",
        "latitude": "30.044420",
        "longitude": "31.235712",
        "population": "10200000",
        "founded": "969 AD",
        "landmarks": [
            "Pyramids of Giza",
            "The Sphinx",
            "Khan El Khalili Bazaar"
        ]
    },
    {
        "name": "Beijing",
        "name_native": "北京",
        "country": "China",
        "continent": "Asia",
        "latitude": "39.904200",
        "longitude": "116.407396",
        "population": "21710000",
        "founded": "1045 BC",
        "landmarks": [
            "Great Wall of China",
            "Forbidden City",
            "Temple of Heaven"
        ]
    },
    {
        "name": "Toronto",
        "name_native": "Toronto",
        "country": "Canada",
        "continent": "North America",
        "latitude": "43.653225",
        "longitude": "-79.383186",
        "population": "2930000",
        "founded": "1793",
        "landmarks": [
            "CN Tower",
            "Royal Ontario Museum",
            "Art Gallery of Ontario"
        ]
    },
    {
        "name": "Cape Town",
        "name_native": "iKapa",
        "country": "South Africa",
        "continent": "Africa",
        "latitude": "-33.918861",
        "longitude": "18.423300",
        "population": "4337000",
        "founded": "1652",
        "landmarks": [
            "Table Mountain",
            "Robben Island",
            "Kirstenbosch National Botanical Garden"
        ]
    },
    {
        "name": "Dubai",
        "name_native": "دبي‎",
        "country": "United Arab Emirates",
        "continent": "Asia",
        "latitude": "25.276987",
        "longitude": "55.296249",
        "population": "3137000",
        "founded": "1833",
        "landmarks": [
            "Burj Khalifa",
            "Palm Jumeirah",
            "Dubai Mall"
        ]
    },
    {
        "name": "London",
        "name_native": "London",
        "country": "United Kingdom",
        "continent": "Europe",
        "latitude": "51.509865",
        "longitude": "-0.118092",
        "population": "8982000",
        "founded": "43 AD",
        "landmarks": [
            "Big Ben",
            "Tower of London",
            "Buckingham Palace"
        ]
    },
    {
        "name": "Mumbai",
        "name_native": "मुंबई",
        "country": "India",
        "continent": "Asia",
        "latitude": "19.076090",
        "longitude": "72.877426",
        "population": "12480000",
        "founded": "1507",
        "landmarks": [
            "Gateway of India",
            "Chhatrapati Shivaji Terminus",
            "Marine Drive"
        ]
    },
    {
        "name": "Mexico City",
        "name_native": "Ciudad de México",
        "country": "Mexico",
        "continent": "North America",
        "latitude": "19.432608",
        "longitude": "-99.133209",
        "population": "9209944",
        "founded": "1325",
        "landmarks": [
            "Palacio de Bellas Artes",
            "Zócalo",
            "Chapultepec Castle"
        ]
    },
    {
        "name": "Seoul",
        "name_native": "서울",
        "country": "South Korea",
        "continent": "Asia",
        "latitude": "37.566535",
        "longitude": "126.977969",
        "population": "9776000",
        "founded": "18 BC",
        "landmarks": [
            "Gyeongbokgung Palace",
            "N Seoul Tower",
            "Bukchon Hanok Village"
        ]
    },
    {
        "name": "Rio de Janeiro",
        "name_native": "Rio de Janeiro",
        "country": "Brazil",
        "continent": "South America",
        "latitude": "-22.906847",
        "longitude": "-43.172896",
        "population": "6717000",
        "founded": "1565",
        "landmarks": [
            "Christ the Redeemer",
            "Sugarloaf Mountain",
            "Copacabana Beach"
        ]
    },
    {
        "name": "Bangkok",
        "name_native": "กรุงเทพมหานคร",
        "country": "Thailand",
        "continent": "Asia",
        "latitude": "13.756331",
        "longitude": "100.501762",
        "population": "8281000",
        "founded": "1782",
        "landmarks": [
            "Wat Arun",
            "Grand Palace",
            "Chatuchak Weekend Market"
        ]
    },
    {
        "name": "Istanbul",
        "name_native": "İstanbul",
        "country": "Turkey",
        "continent": "Europe",
        "latitude": "41.008238",
        "longitude": "28.978359",
        "population": "15196000",
        "founded": "660 BC",
        "landmarks": [
            "Hagia Sophia",
            "Blue Mosque",
            "Topkapi Palace"
        ]
    },
    {
        "name": "Chicago",
        "name_native": "Chicago",
        "country": "USA",
        "continent": "North America",
        "latitude": "41.878113",
        "longitude": "-87.629799",
        "population": "2716000",
        "founded": "1833",
        "landmarks": [
            "Willis Tower",
            "Millennium Park",
            "Navy Pier"
        ]
    }

];

export const getCities = (): ICity[] => {
    return cities;
};
