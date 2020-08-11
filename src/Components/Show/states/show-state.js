import sql from '../../../Assets/icons/sql.svg'
import mongoDB from '../../../Assets/icons/mongoDB.svg'
import express from '../../../Assets/icons/express.svg'
import copy from '../../../Assets/icons/copy.svg'
import ga from '../../../Assets/icons/ga.svg'
import gtm from '../../../Assets/icons/gtm.svg'
import seo from '../../../Assets/icons/seo.svg'
import model from '../../../Assets/icons/model.svg'
import graphQL from '../../../Assets/icons/graphQL.svg'
import adobe from '../../../Assets/icons/column/adobe.svg'
import css from '../../../Assets/icons/column/css.svg'
import angular from '../../../Assets/icons/column/angular.svg'
import node from '../../../Assets/icons/column/node.svg'
import redux from '../../../Assets/icons/column/redux.svg'
import wordpress from '../../../Assets/icons/column/wordpress.svg'
import react from '../../../Assets/icons/column/react.svg'

export const CreateShowState = () => ({
    fields: {
        showInformation: {
            title1: 'Featured',
            title2: 'Kompetens',
            features: [
                {
                    key: 'react',
                    title: 'React',
                    style: 'show__featured__content1',
                    bg: 'show__featured__background-react'
                },
                {
                    key: 'angular',
                    title: 'Angular',
                    style: 'show__featured__content2',
                    bg: 'show__featured__background-angular'
                },
                {
                    key: 'node',
                    title: 'Node',
                    style: 'show__featured__content3',
                    bg: 'show__featured__background-node'
                },
                {
                    key: 'mongodb',
                    title: 'MongoDB',
                    style: 'show__featured__content4',
                    bg: 'show__featured__background-mongo'
                },
            ],
            columnValues: [
                {
                    title: 'SQL',
                    icon: sql,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'MongoDB',
                    icon: mongoDB,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'Express',
                    icon: express,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'Google Tag Manager',
                    icon: gtm,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'Google Analytics',
                    icon: ga,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'SEO',
                    icon: seo,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'Modellering',
                    icon: model,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'GraphQL',
                    icon: graphQL,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'Copywriting',
                    icon: copy,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'Adobe',
                    icon: adobe,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'CSS',
                    icon: css,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'Angular',
                    icon: angular,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'node',
                    icon: node,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'redux',
                    icon: redux,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'wordpress',
                    icon: wordpress,
                    colorCode: 'rgb(149, 110, 0)'
                },
                {
                    title: 'react',
                    icon: react,
                    colorCode: 'rgb(149, 110, 0)'
                },
            ],
            sliderValues: [
                {
                    skill: 'React / Redux / Javascript',
                    key: 'skill-range-green',
                    value: 9
                },
                {
                    skill: 'Sitecore / JSS',
                    key: 'skill-range-darkblue',
                    value: 8
                },
                {
                    skill: 'Angular / Typescript',
                    key: 'skill-range-blue',
                    value: 8
                },
                {
                    skill: 'CSS / SASS / BOOTSTRAP',
                    key: 'skill-range-orange',
                    value: 9
                },
                {
                    skill: 'wordpress / php',
                    key: 'skill-range-darkgreen',
                    value: 6
                },
                {
                    skill: 'Adobe PS / IA / AE / ID',
                    key: 'skill-range-red',
                    value: 8   
                },
            ],
        }
    }
})

export default CreateShowState