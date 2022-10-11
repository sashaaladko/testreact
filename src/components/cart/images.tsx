import React from "react";
import smart_and_card_azur from './img/azur_2_in_1_menu.png'
import fm_azur from './img/azur_menu.png'
import dusik_r from './img/dusik_menu.png'
import smart_and_card_feitian from './img/fetian_menu.jpg'
import smart_and_card_nexgo from './img/nexgo_menu.png'
import smart_and_card_nexgo_n86 from './img/nexgo_n86_menu.png'
import smart_and_card_a910 from './img/pax910_menu.png'
import smart_and_card_docless_a1 from './img/pax930_menu.png'
import smart_and_card_azur_prior from './img/priorsoftpos_menu.png'
import smart from './img/smart_menu.png'

interface image{
    name: string;
    img: string;
}

const imgArray = [{name: 'azur_fm_season', img: smart_and_card_azur}, {name: 'fm_azur', img: fm_azur}, {name: 'dusik_r', img: dusik_r}, {name: 'smart_and_card_feitian', img: smart_and_card_feitian}, 
{name: 'smart_and_card_nexgo', img: smart_and_card_nexgo}, {name: 'smart_and_card_nexgo_n86', img: smart_and_card_nexgo_n86}, {name: 'smart_and_card_a910', img: smart_and_card_a910}, 
{name: 'smart_and_card_docless_a1', img: smart_and_card_docless_a1}, {name: 'smart_and_card_azur_prior', img: smart_and_card_azur_prior}, {name: 'smart', img: smart}]


export default imgArray