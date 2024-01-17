var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidGltcGhhbiIsImEiOiJjbHJpZmswaTMwNjdiMmxzM2Z1N2psaHhkIn0.nh4HveH-733lS_XjvQh_aQ',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Boba Shops of Little Saigon',
    subtitle: 'places where DJ Equalitea hangs out',
    byline: '',
    footer: 'Source: me <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'SunrightStudio',
            alignment: 'full',
            title: 'Sunright Studio',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4dvmES4Pb1oC-YpH_f4N5g/348s.jpg',
            description: 'White Peach Oolong Tea FTW',
            location: {
                center: [33.76136749155332, -117.95329800336799],
                zoom: 8,
                pitch: 0.00,
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