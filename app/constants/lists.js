/**
 * various keyword lists used in the client
 */
angular.module('orsApp')
    .constant('lists', {
        locationsIcon: {
            className: "ors-icon-locations",
            iconSize: [25, 25],
        },
        locationsIconHighlight: {
            className: "ors-icon-locations-highlight",
            iconSize: [25, 25],
        },
        waypointIcons: {
            0: {
                className: "ors-marker-start",
                iconSize: [45, 45],
                iconAnchor: [22, 45]
            },
            1: {
                className: "ors-marker-via",
                iconSize: [45, 45],
                iconAnchor: [22, 45]
            },
            2: {
                className: "ors-marker-end",
                iconSize: [45, 45],
                iconAnchor: [22, 45]
            },
            3: {
                className: "ors-marker-location",
                iconSize: [45, 45],
                iconAnchor: [22, 45]
            },
            4: {
                className: "ors-marker-highlight",
                iconSize: [45, 45],
                iconAnchor: [22, 45]
            }
        },
        landmarkIcon: {
            className: "ors-marker-landmark",
            iconSize: [45, 45],
            iconAnchor: [22, 45]
        },
        landmarkIconEmph: {
            className: "ors-marker-landmark-highlight",
            iconSize: [45, 45],
            iconAnchor: [22, 45]
        },
        profiles: {
            Car: {
                name: 'Car',
                elevation: false,
                subgroup: 'Car',
                request: 'driving-car',
                shortValue: '0',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true
                }
            },
            Bicycle: {
                name: 'Bicycle',
                elevation: true,
                subgroup: 'Bicycle',
                request: 'cycling-regular',
                shortValue: '1a',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true
                }
            },
            BicycleMTB: {
                name: 'BicycleMTB',
                elevation: true,
                subgroup: 'Bicycle',
                request: 'cycling-mountain',
                shortValue: '1b',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true
                }
            },
            BicycleRacer: {
                name: 'BicycleRacer',
                elevation: true,
                subgroup: 'Bicycle',
                request: 'cycling-road',
                shortValue: '1c',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true
                }
            },
            BicycleTour: {
                name: 'BicycleTour',
                elevation: true,
                subgroup: 'Bicycle',
                request: 'cycling-tour',
                shortValue: '1d',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true
                }
            },
            BicycleSafety: {
                name: 'BicycleSafety',
                elevation: true,
                subgroup: 'Bicycle',
                request: 'cycling-safe',
                shortValue: '1e',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true
                }
            },
            BicycleElectro: {
                name: 'BicycleElectro',
                elevation: true,
                subgroup: 'Bicycle',
                request: 'cycling-electric',
                shortValue: '1f',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true
                }
            },
            Pedestrian: {
                name: 'Pedestrian',
                elevation: true,
                subgroup: 'Pedestrian',
                request: 'foot-walking',
                shortValue: '2',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true,
                    green: true,
                    noise: true
                }
            },
            PedestrianHiking: {
                name: 'PedestrianHiking',
                elevation: true,
                subgroup: 'Pedestrian',
                request: 'foot-hiking',
                shortValue: '2b',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true,
                    green: true,
                    noise: true
                }
            },
            Wheelchair: {
                name: 'Wheelchair',
                elevation: true,
                subgroup: 'Wheelchair',
                request: 'wheelchair',
                shortValue: '3',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true,
                    steepness: true
                }
            },
            hgv: {
                name: 'hgv',
                elevation: false,
                subgroup: 'HeavyVehicle',
                request: 'driving-hgv',
                shortValue: '4a',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true
                }
            },
            goods: {
                name: 'goods',
                elevation: false,
                subgroup: 'HeavyVehicle',
                request: 'driving-hgv',
                shortValue: '4b',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true
                }
            },
            bus: {
                name: 'bus',
                elevation: false,
                subgroup: 'HeavyVehicle',
                request: 'driving-hgv',
                shortValue: '4c',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true
                }
            },
            agricultural: {
                name: 'agricultural',
                elevation: false,
                subgroup: 'HeavyVehicle',
                request: 'driving-hgv',
                shortValue: '4d',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true
                }
            },
            forestry: {
                name: 'forestry',
                elevation: false,
                subgroup: 'HeavyVehicle',
                request: 'driving-hgv',
                shortValue: '4e',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true
                }
            },
            delivery: {
                name: 'delivery',
                elevation: false,
                subgroup: 'HeavyVehicle',
                request: 'driving-hgv',
                shortValue: '4f',
                extras: {
                    surface: true,
                    waytype: true,
                    suitability: true
                }
            }
        },
        optionList: {
            landmarks: {
                Include: {
                    name: 'include',
                    subgroups: ['Wheelchair', 'Pedestrian']
                }
            },
            weight: {
                Fastest: {
                    value: 'Fastest',
                    shortValue: '0'
                },
                Shortest: {
                    value: 'Shortest',
                    shortValue: '1'
                },
                Recommended: {
                    value: 'Recommended',
                    shortValue: '2'
                }
            },
            difficulty: {
                fitness: {
                    '-1': {
                        name: 'Unset',
                        value: -1
                    },
                    '0': {
                        name: 'Novice',
                        value: 0
                    },
                    '1': {
                        name: 'Moderate',
                        value: 1
                    },
                    '2': {
                        name: 'Amateur',
                        value: 2
                    },
                    '3': {
                        name: 'Pro',
                        value: 3
                    }
                },
                steepness: {
                    min: 0,
                    max: 15
                }
            },
            avoidables: {
                ferry: {
                    name: 'ferries',
                    subgroups: ['Car', 'Bicycle', 'HeavyVehicle', 'Wheelchair', 'Pedestrian']
                },
                unpaved: {
                    name: 'unpavedroads',
                    subgroups: ['Car', 'Bicycle', 'HeavyVehicle']
                },
                paved: {
                    name: 'pavedroads',
                    subgroups: ['Car', 'Bicycle', 'HeavyVehicle']
                },
                fords: {
                    name: 'fords',
                    subgroups: ['Car', 'Bicycle', 'HeavyVehicle', 'Wheelchair', 'Pedestrian']
                },
                steps: {
                    name: 'steps',
                    subgroups: ['Wheelchair', 'Pedestrian', 'Bicycle']
                },
                highways: {
                    name: 'highways',
                    subgroups: ['Car', 'HeavyVehicle']
                },
                tollroads: {
                    name: 'tollways',
                    subgroups: ['Car', 'HeavyVehicle']
                },
                tunnels: {
                    name: 'tunnels',
                    subgroups: ['Car', 'HeavyVehicle']
                },
                tracks: {
                    name: 'tracks',
                    subgroups: ['Car', 'HeavyVehicle']
                }
            },
            wheelchair: {
                Surface: {
                    'concrete': {
                        name: 'Concrete, asphalt',
                        value: 'concrete'
                    },
                    'cobblestone:flattened': {
                        name: 'Flattened Cobblestone and better',
                        value: 'cobblestone:flattened'
                    },
                    'cobblestone': {
                        name: 'Cobblestone and better',
                        value: 'cobblestone'
                    },
                    'compacted': {
                        name: 'Compacted',
                        value: 'compacted'
                    },
                    'any': {
                        name: 'All traversable surfaces',
                        value: 'any'
                    }
                },
                Incline: {
                    '3': {
                        name: 'Up to 3%',
                        value: 3
                    },
                    '6': {
                        name: 'Up to 6%',
                        value: 6
                    },
                    '10': {
                        name: 'Up to 10%',
                        value: 10
                    },
                    '15': {
                        name: 'Up to 15%',
                        value: 15
                    },
                    '31': {
                        name: 'Flexible',
                        value: 31
                    }
                },
                Curb: {
                    '0.03': {
                        name: 'Up to 3cm',
                        value: 0.03
                    },
                    '0.06': {
                        name: 'Up to 6cm',
                        value: 0.06
                    },
                    '0.1': {
                        name: 'Up to 10cm',
                        value: 0.1
                    },
                    '0.31': {
                        name: 'Flexible',
                        value: 0.31
                    }
                },
            },
            hgvParams: {
                length: {
                    min: 2,
                    max: 15,
                    value: 'length'
                },
                height: {
                    min: 2,
                    max: 5,
                    value: 'height'
                },
                width: {
                    min: 2,
                    max: 5,
                    value: 'width'
                },
                hgvWeight: {
                    min: 1,
                    max: 100,
                    value: 'weight'
                },
                axleload: {
                    min: 1,
                    max: 100,
                    value: 'axleload'
                }
            },
            maxspeeds: {
                Car: {
                    min: 30,
                    max: 300,
                    default: 100,
                    step: 5
                },
                Bicycle: {
                    min: 5,
                    max: 50,
                    default: 25,
                    step: 1
                },
                BicycleMTB: {
                    min: 5,
                    max: 50,
                    default: 20,
                    step: 1
                },
                BicycleRacer: {
                    min: 5,
                    max: 50,
                    default: 30,
                    step: 1
                },
                BicycleTour: {
                    min: 5,
                    max: 50,
                    default: 25,
                    step: 1
                },
                BicycleSafety: {
                    min: 5,
                    max: 50,
                    default: 20,
                    step: 1
                },
                BicycleElectro: {
                    min: 5,
                    max: 50,
                    default: 20,
                    step: 1
                },
                Pedestrian: {
                    min: 3,
                    max: 15,
                    default: 6,
                    step: 1
                },
                Wheelchair: {
                    min: 5,
                    max: 50,
                    default: 8,
                    step: 1
                },
                HeavyVehicle: {
                    min: 30,
                    max: 200,
                    default: 100,
                    step: 5
                },
                goods: {
                    min: 30,
                    max: 200,
                    default: 100,
                    step: 5
                },
                bus: {
                    min: 30,
                    max: 200,
                    default: 100,
                    step: 5
                },
                agricultural: {
                    min: 30,
                    max: 200,
                    default: 100,
                    step: 5
                },
                forestry: {
                    min: 30,
                    max: 200,
                    default: 100,
                    step: 5
                },
                delivery: {
                    min: 30,
                    max: 200,
                    default: 100,
                    step: 5
                },
            },
            green: {
                min: 0.1,
                max: 1
            },
            quiet: {
                min: 0.1,
                max: 1
            }
        },
        isochroneOptionList: {
            methodOptions: {
                TIME: {
                    id: 0,
                    name: 'Time'
                },
                DISTANCE: {
                    id: 1,
                    name: 'Distance'
                }
            },
            reverseFlow: {
                start: 'start',
                destination: 'destination'
            },
            valueOptions: {
                min: 1,
                max: 100,
                step: 1,
                default: 30
            },
            intervalOptions: {
                min: 1,
                step: 1,
                default: 15
            },
            velocities: {
                Pedestrian: 5,
                Car: 100,
                Bicycle: 20,
                Wheelchair: 5,
                HeavyVehicle: 80,
            }
        },
        userOptions: {
            languages: {
                default: 'en-US',
                all: ['de-DE', 'en-US', 'en-GB', 'zh-CN', 'pt-PT', 'es-ES', 'ru-RU', 'fr-FR', 'pl-PL']
            },
            routinglanguages: {
                default: 'en-US',
                all: ['de', 'en-US', 'pt', 'gr', 'ru', 'hu', 'fr', 'it', 'nl', 'zh-CN', 'es']
            },
            units: {
                default: 'km',
                km: 'km',
                mi: 'mi'
            }
        },
        permalinkFilters: {
            avoidables: ['ferry', 'unpaved', 'paved', 'fords', 'steps', 'highways', 'tollroads', 'tunnels', 'tracks'],
            analysis: ['method', 'isovalue', 'isointerval', 'reverseflow'],
            Car: ['type', 'weight', 'maxspeed'],
            hgv: ['type', 'weight', 'maxspeed', 'height', 'width', 'length', 'hgvWeight', 'axleload', 'hazmat'],
            goods: ['type', 'weight', 'maxspeed', 'height', 'width', 'length', 'hgvWeight', 'axleload', 'hazmat'],
            bus: ['type', 'weight', 'maxspeed', 'height', 'width', 'length', 'hgvWeight', 'axleload', 'hazmat'],
            agricultural: ['type', 'weight', 'maxspeed', 'height', 'width', 'length', 'hgvWeight', 'axleload', 'hazmat'],
            forestry: ['type', 'weight', 'maxspeed', 'height', 'width', 'length', 'hgvWeight', 'axleload', 'hazmat'],
            delivery: ['type', 'weight', 'maxspeed', 'height', 'width', 'length', 'hgvWeight', 'axleload', 'hazmat'],
            Bicycle: ['type', 'weight', 'maxspeed', 'fitness', 'incline', 'steepness'],
            BicycleSafety: ['type', 'weight', 'maxspeed', 'fitness', 'incline', 'steepness'],
            BicycleMTB: ['type', 'weight', 'maxspeed', 'fitness', 'incline', 'steepness'],
            BicycleRacer: ['type', 'weight', 'maxspeed', 'fitness', 'incline', 'steepness'],
            BicycleElectro: ['type', 'weight', 'maxspeed', 'fitness', 'incline', 'steepness'],
            BicycleTour: ['type', 'weight', 'maxspeed', 'fitness', 'incline', 'steepness'],
            Pedestrian: ['type', 'weight', 'maxspeed', 'fitness', 'steepness', 'green'],
            PedestrianHiking: ['type', 'weight', 'maxspeed', 'fitness', 'steepness', 'green'],
            Wheelchair: ['type', 'weight', 'maxspeed', 'incline', 'curb', 'surface']
        },
        //Whitelist for settings to be stored in permalink
        permalinkKeys: {
            wps: 'a',
            type: 'b',
            weight: 'c',
            maxspeed: 'd',
            hgvWeight: 'f1',
            width: 'f2',
            height: 'f3',
            axleload: 'f4',
            length: 'f5',
            hazmat: 'f6',
            fitness: 'g1',
            steepness: 'g2',
            surface: 'h1',
            incline: 'h2',
            curb: 'h3',
            method: 'i',
            isovalue: 'j1',
            isointerval: 'j2',
            reverseflow: 'j3',
            routinglang: 'k1',
            units: 'k2',
            ferry: 'l1',
            unpaved: 'l2',
            paved: 'l3',
            fords: 'l4',
            highways: 'l5',
            tollroads: 'l6',
            tunnels: 'l7',
            tracks: 'l8',
            green: 'm1',
            lat: 'n1',
            lng: 'n2',
            zoom: 'n3'
        },
        reversePermalinkKeys: function(obj) {
            var rev = {};
            for (var key in obj) {
                rev[obj[key]] = key;
            }
            return rev;
        },
        layers: {
            0: 'layerRoutePoints',
            1: 'layerRouteLines',
            2: 'layerEmph',
            3: 'layerAccessibilityAnalysis',
            4: 'layerTracks',
            5: 'layerAccessibilityAnalysisNumberedMarkers',
            6: 'layerRouteNumberedMarkers',
            7: 'layerRouteExtras',
            8: 'layerLocations',
            9: 'layerLandmarks',
            10: 'layerLandmarksEmph'
        },
        layerStyles: {
            route: function() {
                return {
                    color: '#b5152b',
                    weight: 5,
                    opacity: 1
                };
            },
            routePadding: function() {
                return {
                    color: '#fff',
                    weight: 9,
                    opacity: 1
                };
            },
            routeEmph: function() {
                return {
                    color: '#FFF',
                    weight: 3,
                    opacity: 1
                };
            },
            isochroneEmph: function() {
                return {
                    color: '#FFF',
                    weight: 3,
                    opacity: 1
                };
            },
            track: function() {
                return {
                    color: this.get_random_color(),
                    weight: 3,
                    opacity: 1
                };
            },
            trackPadding: function() {
                return {
                    color: '#FFF',
                    weight: 6,
                    opacity: 1
                };
            },
            rand: function(min, max) {
                return parseInt(Math.random() * (max - min + 1), 10) + min;
            },
            get_random_color: function() {
                var h = this.rand(150, 250);
                var s = this.rand(30, 100);
                var l = this.rand(20, 70);
                return 'hsl(' + h + ',' + s + '%,' + l + '%)';
            },
            getStyle: function(c, w, o) {
                return {
                    color: c,
                    weight: w,
                    opacity: o
                };
            },
            boundary: function() {
                return {
                    "color": "#cf5f5f",
                    "weight": 10,
                    "opacity": 1,
                    "fillOpacity": 0
                };
            }
        },
        errors: {
            CONNECTION: {
                translate: 'CONNECTION',
                color: -1
            },
            GEOCODE: {
                translate: 'GEOCODE',
                color: 0
            },
            ROUTE: {
                translate: 'ROUTE',
                color: 0
            },
            GENERALERROR: {
                translate: 'GENERALERROR',
                color: 1
            }
        },
        avoidFlags: {
            Highways: 1, // 1 << 0;
            Tollways: 2, // 1 << 1;
            Steps: 2, // 1 << 1;
            Ferries: 4, // 1 << 2;
            UnpavedRoads: 8, // 1 << 3;
            Tracks: 16, // 1 << 4;
            Tunnels: 32, // 1 << 5;
            PavedRoads: 64, // 1 << 6;
            Fords: 128, // 1 << 7;
        },
        locations_icons: {
            100: '<i class="fa fa-lg fa-hotel"></i>',
            120: '<i class="fa fa-lg fa-paw"></i>',
            130: '<i class="fa fa-lg fa-paint-brush"></i>',
            150: '<i class="fa fa-lg fa-university"></i>',
            160: '<i class="fa fa-lg fa-building"></i>',
            190: '<i class="fa fa-lg fa-dollar"></i>',
            200: '<i class="fa fa-lg fa-hospital-o"></i>',
            220: '<i class="fa fa-lg fa-fort-awesome"></i>',
            260: '<i class="fa fa-lg fa-film"></i>',
            330: '<i class="fa fa-lg fa-tree"></i>',
            360: '<i class="fa fa-lg fa-map-signs"></i>',
            390: '<i class="fa fa-lg fa-camera"></i>',
            420: '<i class="fa fa-lg fa-shopping-cart"></i>',
            560: '<i class="fa fa-lg fa-cutlery"></i>',
            580: '<i class="fa fa-lg fa-bus"></i>',
            620: '<i class="fa fa-lg fa-suitcase"></i>',
            phone: '<i class="fa fa-phone"></i>',
            address: '<i class="fa fa-address-card"></i>',
            website: '<i class="fa fa-globe"></i>',
            wheelchair: '<i class="fa fa-wheelchair-alt"></i>'
        },
        boundary: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "id": "DEU",
                "properties": {
                    "name": "Germany"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [9.921906, 54.983104],
                            [9.93958, 54.596642],
                            [10.950112, 54.363607],
                            [10.939467, 54.008693],
                            [11.956252, 54.196486],
                            [12.51844, 54.470371],
                            [13.647467, 54.075511],
                            [14.119686, 53.757029],
                            [14.353315, 53.248171],
                            [14.074521, 52.981263],
                            [14.4376, 52.62485],
                            [14.685026, 52.089947],
                            [14.607098, 51.745188],
                            [15.016996, 51.106674],
                            [14.570718, 51.002339],
                            [14.307013, 51.117268],
                            [14.056228, 50.926918],
                            [13.338132, 50.733234],
                            [12.966837, 50.484076],
                            [12.240111, 50.266338],
                            [12.415191, 49.969121],
                            [12.521024, 49.547415],
                            [13.031329, 49.307068],
                            [13.595946, 48.877172],
                            [13.243357, 48.416115],
                            [12.884103, 48.289146],
                            [13.025851, 47.637584],
                            [12.932627, 47.467646],
                            [12.62076, 47.672388],
                            [12.141357, 47.703083],
                            [11.426414, 47.523766],
                            [10.544504, 47.566399],
                            [10.402084, 47.302488],
                            [9.896068, 47.580197],
                            [9.594226, 47.525058],
                            [8.522612, 47.830828],
                            [8.317301, 47.61358],
                            [7.466759, 47.620582],
                            [7.593676, 48.333019],
                            [8.099279, 49.017784],
                            [6.65823, 49.201958],
                            [6.18632, 49.463803],
                            [6.242751, 49.902226],
                            [6.043073, 50.128052],
                            [6.156658, 50.803721],
                            [5.988658, 51.851616],
                            [6.589397, 51.852029],
                            [6.84287, 52.22844],
                            [7.092053, 53.144043],
                            [6.90514, 53.482162],
                            [7.100425, 53.693932],
                            [7.936239, 53.748296],
                            [8.121706, 53.527792],
                            [8.800734, 54.020786],
                            [8.572118, 54.395646],
                            [8.526229, 54.962744],
                            [9.282049, 54.830865],
                            [9.921906, 54.983104]
                        ]
                    ]
                }
            }]
        },
        measure_locale: {
            'de-DE': 'de',
            'en-US': 'en',
            'en-GB': 'en_UK',
            'zh-CN': 'cn',
            'pt-PT': 'pt_PT',
            'es-ES': 'es',
            'ru-RU': 'ru',
            'fr-FR': 'fr',
            'pl-PL': 'pl'
        }
    });