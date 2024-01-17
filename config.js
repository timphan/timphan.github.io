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
            id: 'SunrightStudio',
            alignment: 'full',
            title: 'Sunright Studio',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4dvmES4Pb1oC-YpH_f4N5g/348s.jpg',
            description: 'White Peach Oolong Tea FTW',
            location: {
                center: [-117.95323, 33.76157],
                zoom: 18.75,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        
    ]
}