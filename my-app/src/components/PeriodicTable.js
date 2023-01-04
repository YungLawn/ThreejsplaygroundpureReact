import React, { useRef, useState } from "react";
import { RoundedBox, Text, useCursor } from '@react-three/drei';
import '../Styles/main.css';
 
function ElementTile(element){
    const Ref = useRef();
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);
    useCursor(hover);

    const numPos = [-0.25, -0.25, 0];
    const numPosHovered = [-0.25*1.5, -0.25*1.5, 0];

    const massPos = [0, 0.25, 0];
    const massPosHovered = [0, 0.25*1.5, 0];

    const abbrPos = [0.125, -0.0625, 0];
    const abbrPosHovered = [0.125*1.5, 0, 0]

    const textdepth = -0.135;

    return(
    <mesh 
    ref={Ref}
    position={hover || active ? [0,0,0.25] : [0,0,0]}
    onPointerOver={() => {setHover(true)}}
    onPointerOut={() => {setHover(false)}}
    onClick={() => {setActive(!active)}}
    >
        <RoundedBox smoothness={8} position={[0, 0, textdepth]} args={[1, 1, 0.25]} radius={0.09375} scale={hover || active ? [1.5,1.5,1] : 1}>
            <meshStandardMaterial color={element.color} />
        </RoundedBox>

        <Text 
            color={'black'} 
            scale={hover || active ? 6 : 4}
            position={hover || active ? abbrPosHovered : abbrPos}
            font={""}
        >
            {element.id}
        </Text>
        <Text 
            color={'black'} 
            scale={hover || active ? 2.5 : 1.5}
            position={hover || active ? massPosHovered : massPos}
        >
            {element.mass}
        </Text>
        <Text 
            color={'black'} 
            scale={hover || active ? 2.5 : 1.5}
            position={hover || active ? numPosHovered : numPos}
        >
            {element.num}
        </Text>
    </mesh>)
}

export default function PeriodicTable() {
    const elements = [
            {num: 1, id: 'H', name: 'Hydrogen', mass:'1.00794', x:1, y:10, color:'#FFFFFF', hovered: false },
            {num: 2, id:'He', name:'Helium', mass:'4.002602',  x:18, y:10, color:'#FFFFFF', hovered: false },
        
            {num: 3, id:'Li', name:'Lithium', mass:'6.941',  x:1, y:9, color:'#FFFFFF', hovered: false },
            {num: 4, id:'Be', name:'Beryllium', mass:'9.012182',x:2, y:9, color:'#FFFFFF', hovered: false },
            {num: 5, id:'B', name:'Boron', mass:'10.811',  x:13, y:9, color:'#FFFFFF', hovered: false },
            {num: 6, id:'C', name:'Carbon', mass:'12.0107',  x:14, y:9, color:'#FFFFFF', hovered: false },
            {num: 7, id:'N', name:'Nitrogen', mass:'14.0067',  x:15, y:9, color:'#FFFFFF', hovered: false },
            {num: 8, id:'O', name:'Oxygen', mass:'15.9994',  x:16, y:9, color:'#FFFFFF', hovered: false },
            {num: 9, id:'F', name:'Fluorine', mass:'18.9984032',x: 17, y:9, color:'#FFFFFF', hovered: false },
            {num: 10, id:'Ne', name:'Neon', mass:'20.1797', x:18, y:9, color:'#FFFFFF', hovered: false },
        
            {num: 11, id:'Na', name:'Sodium', mass:'22.98976...', x:1, y:8, color:'#FFFFFF', hovered: false },
            {num: 12, id:'Mg', name:'Magnesium', mass:'24.305', x:2, y:8, color:'#FFFFFF', hovered: false },
            {num: 13, id:'Al', name:'Aluminium', mass:'26.9815386', x:13, y:8, color:'#FFFFFF', hovered: false },
            {num: 14, id:'Si', name:'Silicon', mass:'28.0855', x:14, y:8, color:'#FFFFFF', hovered: false },
            {num: 15, id:'P', name:'Phosphorus', mass:'30.973762', x:15, y:8, color:'#FFFFFF', hovered: false },
            {num: 16, id:'S', name:'Sulfur', mass:'32.065', x:16, y:8, color:'#FFFFFF', hovered: false },
            {num: 17, id:'Cl', name:'Chlorine', mass:'35.453', x:17, y:8, color:'#FFFFFF', hovered: false },
            {num: 18, id:'Ar', name:'Argon', mass:'39.948', x:18, y:8, color:'#FFFFFF', hovered: false },
        
            {num: 19, id:'K', name:'Potassium', mass:'39.948', x:1, y:7, color:'#FFFFFF', hovered: false },
            {num: 20, id:'Ca', name:'Calcium', mass:'40.078', x:2, y:7, color:'#FFFFFF', hovered: false },
            {num: 21, id:'Sc', name:'Scandium', mass:'44.955912', x:3, y:7, color:'#FFFFFF', hovered: false },
            {num: 22, id:'Ti', name:'Titanium', mass:'47.867', x:4, y:7, color:'#FFFFFF', hovered: false },
            {num: 23, id:'V', name:'Vanadium', mass:'50.9415', x:5, y:7, color:'#FFFFFF', hovered: false },
            {num: 24, id:'Cr', name:'Chromium', mass:'51.9961', x:6, y:7, color:'#FFFFFF', hovered: false },
            {num: 25, id:'Mn', name:'Manganese', mass:'54.938045', x:7, y:7, color:'#FFFFFF', hovered: false },
            {num: 26, id:'Fe', name:'Iron', mass:'55.845', x:8, y:7, color:'#FFFFFF', hovered: false },
            {num: 27, id:'Co', name:'Cobalt', mass:'58.933195', x:9, y:7, color:'#FFFFFF', hovered: false },
            {num: 28, id:'Ni', name:'Nickel', mass:'58.6934', x:10, y:7, color:'#FFFFFF', hovered: false },
            {num: 29, id:'Cu', name:'Copper', mass:'63.546', x:11, y:7, color:'#FFFFFF', hovered: false },
            {num: 30, id:'Zn', name:'Zinc', mass:'65.38', x:12, y:7, color:'#FFFFFF', hovered: false },
            {num: 31, id:'Ga', name:'Gallium', mass:'69.723',  x:13, y:7, color:'#FFFFFF', hovered: false },
            {num: 32, id:'Ge', name:'Germanium', mass:'72.63', x:14, y:7, color:'#FFFFFF', hovered: false },
            {num: 33, id:'As', name:'Arsenic', mass:'74.9216',  x:15, y:7, color:'#FFFFFF', hovered: false },
            {num: 34, id:'Se', name:'Selenium', mass:'78.96', x:16, y:7, color:'#FFFFFF', hovered: false },
            {num: 35, id:'Br', name:'Bromine', mass:'79.904',  x:17, y:7, color:'#FFFFFF', hovered: false },
            {num: 36, id:'Kr', name:'Krypton', mass:'83.798', x:18 , y:7, color:'#FFFFFF', hovered: false },
        
            {num: 37, id:'Rb', name:'Rubidium', mass:'85.4678', x:1, y:6, color:'#FFFFFF', hovered: false },
            {num: 38, id:'Sr', name:'Strontium', mass:'87.62', x:2, y:6, color:'#FFFFFF', hovered: false },
            {num: 39, id:'Y', name:'Yttrium', mass:'88.90585', x:3, y:6, color:'#FFFFFF', hovered: false },
            {num: 40, id:'Zr', name:'Zirconium', mass:'91.224', x:4, y:6, color:'#FFFFFF', hovered: false },
            {num: 41, id:'Nb', name:'Niobium', mass:'92.90628', x:5, y:6, color:'#FFFFFF', hovered: false },
            {num: 42, id:'Mo', name:'Molybdenum', mass:'95.96', x:6, y:6, color:'#FFFFFF', hovered: false },
            {num: 43, id:'Tc', name:'Technetium', mass:'(98)', x:7, y:6, color:'#FFFFFF', hovered: false },
            {num: 44, id:'Ru', name:'Ruthenium', mass:'101.07', x:8, y:6, color:'#FFFFFF', hovered: false },
            {num: 45, id:'Rh', name:'Rhodium', mass:'102.9055',  x:9, y:6, color:'#FFFFFF', hovered: false },
            {num: 46, id:'Pd', name:'Palladium', mass:'106.42', x:10, y:6, color:'#FFFFFF', hovered: false },
            {num: 47, id:'Ag', name:'Silver', mass:'107.8682', x:11, y:6, color:'#FFFFFF', hovered: false },
            {num: 48, id:'Cd', name:'Cadmium', mass:'112.411', x:12, y:6, color:'#FFFFFF', hovered: false },
            {num: 49, id:'In', name:'Indium', mass:'114.818', x:13, y:6, color:'#FFFFFF', hovered: false },
            {num: 50, id:'Sn', name:'Tin', mass:'118.71', x:14, y:6, color:'#FFFFFF', hovered: false },
            {num: 51, id:'Sb', name:'Antimony', mass:'121.76', x:15, y:6, color:'#FFFFFF', hovered: false },
            {num: 52, id:'Te', name:'Tellurium', mass:'127.6', x:16, y:6, color:'#FFFFFF', hovered: false },
            {num: 53, id:'I', name:'Iodine', mass:'126.90447', x:17, y:6, color:'#FFFFFF', hovered: false },
            {num: 54, id:'Xe', name:'Xenon', mass:'131.293', x:18, y:6, color:'#FFFFFF', hovered: false },
        
            {num: 55, id:'Cs', name:'Caesium', mass:'132.9054', x:1, y:5, color:'#FFFFFF', hovered: false },
            {num: 56, id:'Ba', name:'Barium', mass:'132.9054', x:2, y:5, color:'#FFFFFF', hovered: false },
            {num: 57, id:'La', name:'Lanthanum', mass:'138.90547', x:3, y:5, color:'#FFFFFF', hovered: false },
        
            // {'Ce', 'Cerium', '140.116', 5, y:9, color:'#FFFFFF', hovered: false },
            // {'Pr', 'Praseodymium', '140.90765', 6, y:9, color:'#FFFFFF', hovered: false },
            // {'Nd', 'Neodymium', '144.242', 7, y:9, color:'#FFFFFF', hovered: false },
            // {'Pm', 'Promethium', '(145)', 8, y:9, color:'#FFFFFF', hovered: false },
            // {'Sm', 'Samarium', '150.36', 9, y:9, color:'#FFFFFF', hovered: false },
            // {'Eu', 'Europium', '151.964', 10, y:9, color:'#FFFFFF', hovered: false },
            // {'Gd', 'Gadolinium', '157.25', 11, y:9, color:'#FFFFFF', hovered: false },
            // {'Tb', 'Terbium', '158.92535', 12, y:9, color:'#FFFFFF', hovered: false },
            // {'Dy', 'Dysprosium', '162.5', 13, y:9, color:'#FFFFFF', hovered: false },
            // {'Ho', 'Holmium', '164.93032', 14, y:9, color:'#FFFFFF', hovered: false },
            // {'Er', 'Erbium', '167.259', 15, y:9, color:'#FFFFFF', hovered: false },
            // {'Tm', 'Thulium', '168.93421', 16, y:9, color:'#FFFFFF', hovered: false },
            // {'Yb', 'Ytterbium', '173.054', 17, y:9, color:'#FFFFFF', hovered: false },
            // {'Lu', 'Lutetium', '174.9668', 18, y:9, color:'#FFFFFF', hovered: false },
        
            {num: 72, id:'Hf', name:'Hafnium', mass:'178.49', x:4, y:5, color:'#FFFFFF', hovered: false },
            {num: 73, id:'Ta', name:'Tantalum', mass:'180.94788', x:5,y:5, color:'#FFFFFF', hovered: false },
            {num: 74, id:'W', name:'Tungsten', mass:'183.84', x:6, y:5, color:'#FFFFFF', hovered: false },
            {num: 75, id:'Re', name:'Rhenium', mass:'186.207', x:7, y:5, color:'#FFFFFF', hovered: false },
            {num: 76, id:'Os', name:'Osmium', mass:'190.23', x:8, y:5, color:'#FFFFFF', hovered: false },
            {num: 77, id:'Ir', name:'Iridium', mass:'192.217', x:9, y:5, color:'#FFFFFF', hovered: false },
            {num: 78, id:'Pt', name:'Platinum', mass:'195.084', x:10, y:5, color:'#FFFFFF', hovered: false },
            {num: 79, id:'Au', name:'Gold', mass:'196.966569', x:11, y:5, color:'#FFFFFF', hovered: false },
            {num: 80, id:'Hg', name:'Mercury', mass:'200.59', x:12, y:5, color:'#FFFFFF', hovered: false },
            {num: 81, id:'Tl', name:'Thallium', mass:'204.3833', x:13, y:5, color:'#FFFFFF', hovered: false },
            {num: 82, id:'Pb', name:'Lead', mass:'207.2', x:14, y:5, color:'#FFFFFF', hovered: false },
            {num: 83, id:'Bi', name:'Bismuth', mass:'208.9804', x:15, y:5, color:'#FFFFFF', hovered: false },
            {num: 84, id:'Po', name:'Polonium', mass:'(209)', x:16, y:5, color:'#FFFFFF', hovered: false },
            {num: 85, id:'At', name:'Astatine', mass:'(210)', x:17, y:5, color:'#FFFFFF', hovered: false },
            {num: 86, id:'Rn', name:'Radon', mass:'(222)', x:18, y:5, color:'#FFFFFF', hovered: false },
        
            {num: 87, id:'Fr', name:'Francium', mass:'(223)', x:1, y:4, color:'#FFFFFF', hovered: false },
            {num: 88, id:'Ra', name:'Radium', mass:'(226)', x:2, y:4, color:'#FFFFFF', hovered: false },
            {num: 89, id:'Ac', name:'Actinium', mass:'(227)', x:3, y:4, color:'#FFFFFF', hovered: false },
        
            // {'Th', 'Thorium', '232.03806', 5, 10, color:'#FFFFFF', hovered: false },
            // {'Pa', 'Protactinium', '231.0588', 6, 10, color:'#FFFFFF', hovered: false },
            // {'U', 'Uranium', '238.02891', 7, 10, color:'#FFFFFF', hovered: false },
            // {'Np', 'Neptunium', '(237)', 8, 10, color:'#FFFFFF', hovered: false },
            // {'Pu', 'Plutonium', '(244)', 9, 10, color:'#FFFFFF', hovered: false },
            // {'Am', 'Americium', '(243)', 10, 10, color:'#FFFFFF', hovered: false },
            // {'Cm', 'Curium', '(247)', 11, 10, color:'#FFFFFF', hovered: false },
            // {'Bk', 'Berkelium', '(247)', 12, 10, color:'#FFFFFF', hovered: false },
            // {'Cf', 'Californium', '(251)', 13, 10, color:'#FFFFFF', hovered: false },
            // {'Es', 'Einstenium', '(252)', 14, 10, color:'#FFFFFF', hovered: false },
            // {'Fm', 'Fermium', '(257)', 15, 10, color:'#FFFFFF', hovered: false },
            // {'Md', 'Mendelevium', '(258)', 16, 10, color:'#FFFFFF', hovered: false },
            // {'No', 'Nobelium', '(259)', 17, 10, color:'#FFFFFF', hovered: false },
            // {'Lr', 'Lawrencium', '(262)', 18, 10, color:'#FFFFFF', hovered: false },
        
            {num: 104, id:'Rf', name:'Rutherfordium', mass:'(267)', x:4, y:4, color:'#FFFFFF', hovered: false },
            {num: 105, id:'Db', name:'Dubnium', mass:'(268)', x:5, y:4, color:'#FFFFFF', hovered: false },
            {num: 106, id:'Sg', name:'Seaborgium', mass:'(271)', x:6, y:4, color:'#FFFFFF', hovered: false },
            {num: 107, id:'Bh', name:'Bohrium', mass:'(272)', x:7, y:4, color:'#FFFFFF', hovered: false },
            {num: 108, id:'Hs', name:'Hassium', mass:'(270)',  x:8, y:4, color:'#FFFFFF', hovered: false },
            {num: 109, id:'Mt', name:'Meitnerium', mass:'(276)',  x:9, y:4, color:'#FFFFFF', hovered: false },
            {num: 110, id:'Ds', name:'Darmstadium', mass:'(281)', x:10, y:4, color:'#FFFFFF', hovered: false },
            {num: 111, id:'Rg', name:'Roentgenium', mass:'(280)',  x:11, y:4, color:'#FFFFFF', hovered: false },
            {num: 112, id:'Cn', name:'Copernicium', mass:'(285)',  x:12, y:4, color:'#FFFFFF', hovered: false },
            {num: 113, id:'Nh', name:'Nihonium', mass:'(286)',  x:13, y:4, color:'#FFFFFF', hovered: false },
            {num: 114, id:'Fl', name:'Flerovium', mass:'(289)',  x:14, y:4, color:'#FFFFFF', hovered: false },
            {num: 115, id:'Mc', name:'Moscovium', mass:'(290)',  x:15, y:4, color:'#FFFFFF', hovered: false },
            {num: 116, id:'Lv', name:'Livermorium', mass:'(293)',  x:16, y:4, color:'#FFFFFF', hovered: false },
            {num: 117, id:'Ts', name:'Tennessine', mass:'(294)', x:17, y:4, color:'#FFFFFF', hovered: false },
            {num: 118, id:'Og', name:'Oganesson', mass:'(294)', x:18, y:4, color:'#FFFFFF'}
        ];
    return (
        elements.map((element) =>
        <group position={[element.x * 1.5, element.y * 1.5, 0]} key={element.id}>
            {ElementTile(element)}
        </group>
        )
    )
}