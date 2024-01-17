var config = {
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    accessToken: 'pk.eyJ1IjoidGltcGhhbiIsImEiOiJja2RhcTdubjYwNnNlMnB0ODNyd3l2eGsxIn0.CMqEhL4yhZW4n2EPy7NUHg',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Boba Shops of Little Saigon',
    subtitle: 'places where DJ Equalitea hangs out',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'SunrightStudio',
            alignment: 'full',
            title: 'Sunright Studio',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
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