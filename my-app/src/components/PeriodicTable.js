import React, { useRef, useState } from "react";
import { RoundedBox, Text, useCursor } from '@react-three/drei';
import '../Styles/main.css';

const ElementText = (abbr, num, mass, hover, active) => {
    const numPos = [-0.25, -0.25, 0];
    const numPosHovered = [-0.25*1.5, -0.25*1.5, 0];

    const massPos = [0, 0.25, 0];
    const massPosHovered = [0, 0.25*1.5, 0];

    const abbrPos = [0.125, -0.0625, 0];
    const abbrPosHovered = [0.125*1.5, 0, 0];

    return(
    <mesh
        position={[0,0,0]}
    >
        <Text 
            color={'black'} 
            scale={hover || active ? 6 : 4}
            position={hover || active ? abbrPosHovered : abbrPos}
        >
            {abbr}
        </Text>
        <Text 
            color={'black'} 
            scale={hover || active ? 2.5 : 1.5}
            position={hover || active ? massPosHovered : massPos}
        >
            {mass}
        </Text>
        <Text 
            color={'black'} 
            scale={hover || active ? 2.5 : 1.5}
            position={hover || active ? numPosHovered : numPos}
        >
            {num}
        </Text>
    </mesh>
    )
}

const Tile = (element, isIsotope, color) => {
    const Tile = useRef();
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);
    useCursor(hover);

    const textdepth = -0.135;

    const colorSelected = '#90EE90';

    const abbr = isIsotope ? undefined : element.id;
    const num = isIsotope ? undefined : element.num;
    const mass = isIsotope ? undefined : element.mass;

    return(
    <mesh 
    ref={Tile}
    // position={hover || active ? [0,0,0.125] : [0,0,0]}
    onPointerOver={() => {setHover(true)}}
    onPointerOut={() => {setHover(false)}}
    onClick={() => {setActive(!active)}}
    >
        <RoundedBox smoothness={8} position={[0, 0, textdepth]} args={[1, 1, 0.25]} radius={0.09375} scale={hover || active ? [1.5,1.5,1] : 1}>
            <meshStandardMaterial color={hover || active ? colorSelected : color} />
        </RoundedBox>

        {ElementText(abbr, num, mass, hover, active)}
        
    </mesh>
    )
}

const IsotopeStack = (element) => {

    return(
        element.isotopes.map((isotope, index) =>
            <mesh position={[0,0,index]}>
                {Tile(element, true, '#90EE90')}
            </mesh>
        )
    )
}

export default function PeriodicTable() {
    const R = '#ff0000';
    const G = '#00ff00';
    const B = '#0000ff'
    const elements = [
        {num: 1, id:'H', name: 'Hydrogen', mass:'1.00794', x:1, y:10, isotopes: [G,G,R,B,B,B,B]},
        {num: 2, id:'He', name:'Helium', mass:'4.002602', x:18, y:10, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 3, id:'Li', name:'Lithium', mass:'6.941', x:1, y:9, isotopes: [G,G,R,B,B,B,B]},
        {num: 4, id:'Be', name:'Beryllium', mass:'9.012182',x:2, y:9, isotopes: [G,G,R,B,B,B,B]},
        {num: 5, id:'B', name:'Boron', mass:'10.811', x:13, y:9, isotopes: [G,G,R,B,B,B,B]},
        {num: 6, id:'C', name:'Carbon', mass:'12.0107', x:14, y:9, isotopes: [G,G,R,B,B,B,B]},
        {num: 7, id:'N', name:'Nitrogen', mass:'14.0067', x:15, y:9, isotopes: [G,G,R,B,B,B,B]},
        {num: 8, id:'O', name:'Oxygen', mass:'15.9994', x:16, y:9, isotopes: [G,G,R,B,B,B,B]},
        {num: 9, id:'F', name:'Fluorine', mass:'18.9984032',x: 17, y:9, isotopes: [G,G,R,B,B,B,B]},
        {num: 10, id:'Ne', name:'Neon', mass:'20.1797', x:18, y:9, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 11, id:'Na', name:'Sodium', mass:'22.98976...', x:1, y:8, isotopes: [G,G,R,B,B,B,B]},
        {num: 12, id:'Mg', name:'Magnesium', mass:'24.305', x:2, y:8, isotopes: [G,G,R,B,B,B,B]},
        {num: 13, id:'Al', name:'Aluminium', mass:'26.9815386', x:13, y:8, isotopes: [G,G,R,B,B,B,B]},
        {num: 14, id:'Si', name:'Silicon', mass:'28.0855', x:14, y:8, isotopes: [G,G,R,B,B,B,B]},
        {num: 15, id:'P', name:'Phosphorus', mass:'30.973762', x:15, y:8, isotopes: [G,G,R,B,B,B,B]},
        {num: 16, id:'S', name:'Sulfur', mass:'32.065', x:16, y:8, isotopes: [G,G,R,B,B,B,B]},
        {num: 17, id:'Cl', name:'Chlorine', mass:'35.453', x:17, y:8, isotopes: [G,G,R,B,B,B,B]},
        {num: 18, id:'Ar', name:'Argon', mass:'39.948', x:18, y:8, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 19, id:'K', name:'Potassium', mass:'39.948', x:1, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 20, id:'Ca', name:'Calcium', mass:'40.078', x:2, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 21, id:'Sc', name:'Scandium', mass:'44.955912', x:3, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 22, id:'Ti', name:'Titanium', mass:'47.867', x:4, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 23, id:'V', name:'Vanadium', mass:'50.9415', x:5, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 24, id:'Cr', name:'Chromium', mass:'51.9961', x:6, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 25, id:'Mn', name:'Manganese', mass:'54.938045', x:7, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 26, id:'Fe', name:'Iron', mass:'55.845', x:8, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 27, id:'Co', name:'Cobalt', mass:'58.933195', x:9, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 28, id:'Ni', name:'Nickel', mass:'58.6934', x:10, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 29, id:'Cu', name:'Copper', mass:'63.546', x:11, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 30, id:'Zn', name:'Zinc', mass:'65.38', x:12, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 31, id:'Ga', name:'Gallium', mass:'69.723',  x:13, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 32, id:'Ge', name:'Germanium', mass:'72.63', x:14, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 33, id:'As', name:'Arsenic', mass:'74.9216',  x:15, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 34, id:'Se', name:'Selenium', mass:'78.96', x:16, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 35, id:'Br', name:'Bromine', mass:'79.904',  x:17, y:7, isotopes: [G,G,R,B,B,B,B]},
        {num: 36, id:'Kr', name:'Krypton', mass:'83.798', x:18 , y:7, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 37, id:'Rb', name:'Rubidium', mass:'85.4678', x:1, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 38, id:'Sr', name:'Strontium', mass:'87.62', x:2, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 39, id:'Y', name:'Yttrium', mass:'88.90585', x:3, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 40, id:'Zr', name:'Zirconium', mass:'91.224', x:4, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 41, id:'Nb', name:'Niobium', mass:'92.90628', x:5, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 42, id:'Mo', name:'Molybdenum', mass:'95.96', x:6, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 43, id:'Tc', name:'Technetium', mass:'(98)', x:7, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 44, id:'Ru', name:'Ruthenium', mass:'101.07', x:8, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 45, id:'Rh', name:'Rhodium', mass:'102.9055',  x:9, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 46, id:'Pd', name:'Palladium', mass:'106.42', x:10, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 47, id:'Ag', name:'Silver', mass:'107.8682', x:11, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 48, id:'Cd', name:'Cadmium', mass:'112.411', x:12, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 49, id:'In', name:'Indium', mass:'114.818', x:13, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 50, id:'Sn', name:'Tin', mass:'118.71', x:14, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 51, id:'Sb', name:'Antimony', mass:'121.76', x:15, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 52, id:'Te', name:'Tellurium', mass:'127.6', x:16, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 53, id:'I', name:'Iodine', mass:'126.90447', x:17, y:6, isotopes: [G,G,R,B,B,B,B]},
        {num: 54, id:'Xe', name:'Xenon', mass:'131.293', x:18, y:6, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 55, id:'Cs', name:'Caesium', mass:'132.9054', x:1, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 56, id:'Ba', name:'Barium', mass:'132.9054', x:2, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 57, id:'La', name:'Lanthanum', mass:'138.90547', x:3, y:5, isotopes: [G,G,R,B,B,B,B]},
    
        // {'Ce', 'Cerium', '140.116', 5, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Pr', 'Praseodymium', '140.90765', 6, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Nd', 'Neodymium', '144.242', 7, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Pm', 'Promethium', '(145)', 8, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Sm', 'Samarium', '150.36', 9, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Eu', 'Europium', '151.964', 10, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Gd', 'Gadolinium', '157.25', 11, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Tb', 'Terbium', '158.92535', 12, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Dy', 'Dysprosium', '162.5', 13, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Ho', 'Holmium', '164.93032', 14, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Er', 'Erbium', '167.259', 15, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Tm', 'Thulium', '168.93421', 16, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Yb', 'Ytterbium', '173.054', 17, y:9, isotopes: [G,G,R,B,B,B,B]},
        // {'Lu', 'Lutetium', '174.9668', 18, y:9, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 72, id:'Hf', name:'Hafnium', mass:'178.49', x:4, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 73, id:'Ta', name:'Tantalum', mass:'180.94788', x:5,y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 74, id:'W', name:'Tungsten', mass:'183.84', x:6, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 75, id:'Re', name:'Rhenium', mass:'186.207', x:7, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 76, id:'Os', name:'Osmium', mass:'190.23', x:8, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 77, id:'Ir', name:'Iridium', mass:'192.217', x:9, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 78, id:'Pt', name:'Platinum', mass:'195.084', x:10, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 79, id:'Au', name:'Gold', mass:'196.966569', x:11, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 80, id:'Hg', name:'Mercury', mass:'200.59', x:12, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 81, id:'Tl', name:'Thallium', mass:'204.3833', x:13, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 82, id:'Pb', name:'Lead', mass:'207.2', x:14, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 83, id:'Bi', name:'Bismuth', mass:'208.9804', x:15, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 84, id:'Po', name:'Polonium', mass:'(209)', x:16, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 85, id:'At', name:'Astatine', mass:'(210)', x:17, y:5, isotopes: [G,G,R,B,B,B,B]},
        {num: 86, id:'Rn', name:'Radon', mass:'(222)', x:18, y:5, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 87, id:'Fr', name:'Francium', mass:'(223)', x:1, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 88, id:'Ra', name:'Radium', mass:'(226)', x:2, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 89, id:'Ac', name:'Actinium', mass:'(227)', x:3, y:4, isotopes: [G,G,R,B,B,B,B]},
    
        // {'Th', 'Thorium', '232.03806', 5, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Pa', 'Protactinium', '231.0588', 6, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'U', 'Uranium', '238.02891', 7, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Np', 'Neptunium', '(237)', 8, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Pu', 'Plutonium', '(244)', 9, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Am', 'Americium', '(243)', 10, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Cm', 'Curium', '(247)', 11, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Bk', 'Berkelium', '(247)', 12, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Cf', 'Californium', '(251)', 13, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Es', 'Einstenium', '(252)', 14, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Fm', 'Fermium', '(257)', 15, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Md', 'Mendelevium', '(258)', 16, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'No', 'Nobelium', '(259)', 17, 10, isotopes: [G,G,R,B,B,B,B]},
        // {'Lr', 'Lawrencium', '(262)', 18, 10, isotopes: [G,G,R,B,B,B,B]},
    
        {num: 104, id:'Rf', name:'Rutherfordium', mass:'(267)', x:4, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 105, id:'Db', name:'Dubnium', mass:'(268)', x:5, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 106, id:'Sg', name:'Seaborgium', mass:'(271)', x:6, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 107, id:'Bh', name:'Bohrium', mass:'(272)', x:7, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 108, id:'Hs', name:'Hassium', mass:'(270)',  x:8, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 109, id:'Mt', name:'Meitnerium', mass:'(276)',  x:9, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 110, id:'Ds', name:'Darmstadium', mass:'(281)', x:10, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 111, id:'Rg', name:'Roentgenium', mass:'(280)',  x:11, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 112, id:'Cn', name:'Copernicium', mass:'(285)',  x:12, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 113, id:'Nh', name:'Nihonium', mass:'(286)',  x:13, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 114, id:'Fl', name:'Flerovium', mass:'(289)',  x:14, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 115, id:'Mc', name:'Moscovium', mass:'(290)',  x:15, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 116, id:'Lv', name:'Livermorium', mass:'(293)',  x:16, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 117, id:'Ts', name:'Tennessine', mass:'(294)', x:17, y:4, isotopes: [G,G,R,B,B,B,B]},
        {num: 118, id:'Og', name:'Oganesson', mass:'(294)', x:18, y:4, color:'#FFFFFF'}
    ];
    const Table = useRef();
    return (
        elements.map((element) =>
        <group ref={Table} position={[element.x * 1.5, element.y * 1.5, 0]} key={element.id}>
            {Tile(element, false, '#ffffff')}

            {/* {IsotopeStack(element)} */}
        </group>
        )
    )
}