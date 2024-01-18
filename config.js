var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidGltcGhhbiIsImEiOiJjbHJpZmswaTMwNjdiMmxzM2Z1N2psaHhkIn0.nh4HveH-733lS_XjvQh_aQ',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Boba Shops of Little Saigon',
    subtitle: 'places where DJ Equalitea hangs out',
    byline: '',
    footer: 'Source: me',
    chapters: [
        {
            id: 'Summerfield',
            alignment: 'center',
            title: 'Summerfield Tea Bar (Garden Grove)',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/u38rV4PRzkGqkrRZWSkFeA/o.jpg',
            description: 'The Strawberry Tornado one is my favorite!',
            location: {
                center: [-117.94085, 33.78169],
                zoom: 18.17,
                pitch: 33.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'SunrightStudio',
            alignment: 'left',
            title: 'Sunright Studio (Garden Grove)',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4dvmES4Pb1oC-YpH_f4N5g/348s.jpg',
            description: 'White Peach Oolong Tea FTW',
            location: {
                center: [-117.95323, 33.76157],
                zoom: 18.75,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'UrbanLocation',
            alignment: 'right',
            title: 'Urban Location',
            image: 'https://static.wixstatic.com/media/9d106b_f1e6e2ef5e42440eb2d1c7b7d60fa424~mv2_d_4686_3124_s_4_2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9d106b_f1e6e2ef5e42440eb2d1c7b7d60fa424~mv2_d_4686_3124_s_4_2.jpg',
            description: 'Good chicken wings and fries',
            location: {
                center: [-117.93948, 33.75952],
                zoom: 17.76,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
}