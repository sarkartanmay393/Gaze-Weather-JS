import './WeatherCard.css';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';


const LocationIcon = require('../assets/location.svg');
const SunGif = require('../assets/sun.gif');
const Sunny = require('../assets/sunny-bg.svg');


let a = {
    "LocalObservationDateTime": "2023-01-16T20:28:00+05:30",
    "EpochTime": 1673881080,
    "WeatherText": "Mostly clear",
    "WeatherIcon": 34,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": false,
    "Temperature": {
        "Metric": {
            "Value": 17.7,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 64,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "RealFeelTemperature": {
        "Metric": {
            "Value": 16.5,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Pleasant"
        },
        "Imperial": {
            "Value": 62,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cool"
        }
    },
    "RealFeelTemperatureShade": {
        "Metric": {
            "Value": 16.5,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Pleasant"
        },
        "Imperial": {
            "Value": 62,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Cool"
        }
    },
    "RelativeHumidity": 54,
    "IndoorRelativeHumidity": 46,
    "DewPoint": {
        "Metric": {
            "Value": 8.2,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 47,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "Wind": {
        "Direction": {
            "Degrees": 225,
            "Localized": "SW",
            "English": "SW"
        },
        "Speed": {
            "Metric": {
                "Value": 12.6,
                "Unit": "km/h",
                "UnitType": 7
            },
            "Imperial": {
                "Value": 7.8,
                "Unit": "mi/h",
                "UnitType": 9
            }
        }
    },
    "WindGust": {
        "Speed": {
            "Metric": {
                "Value": 16.2,
                "Unit": "km/h",
                "UnitType": 7
            },
            "Imperial": {
                "Value": 10.1,
                "Unit": "mi/h",
                "UnitType": 9
            }
        }
    },
    "UVIndex": 0,
    "UVIndexText": "Low",
    "Visibility": {
        "Metric": {
            "Value": 8,
            "Unit": "km",
            "UnitType": 6
        },
        "Imperial": {
            "Value": 5,
            "Unit": "mi",
            "UnitType": 2
        }
    },
    "ObstructionsToVisibility": "",
    "CloudCover": 11,
    "Ceiling": {
        "Metric": {
            "Value": 9144,
            "Unit": "m",
            "UnitType": 5
        },
        "Imperial": {
            "Value": 30000,
            "Unit": "ft",
            "UnitType": 0
        }
    },
    "Pressure": {
        "Metric": {
            "Value": 1013.9,
            "Unit": "mb",
            "UnitType": 14
        },
        "Imperial": {
            "Value": 29.94,
            "Unit": "inHg",
            "UnitType": 12
        }
    },
    "PressureTendency": {
        "LocalizedText": "Falling",
        "Code": "F"
    },
    "Past24HourTemperatureDeparture": {
        "Metric": {
            "Value": 1,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 2,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "ApparentTemperature": {
        "Metric": {
            "Value": 17.8,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 64,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "WindChillTemperature": {
        "Metric": {
            "Value": 17.8,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 64,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "WetBulbTemperature": {
        "Metric": {
            "Value": 12.3,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 54,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "Precip1hr": {
        "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
        },
        "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
        }
    },
    "PrecipitationSummary": {
        "Precipitation": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "PastHour": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past3Hours": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past6Hours": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past9Hours": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past12Hours": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past18Hours": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past24Hours": {
            "Metric": {
                "Value": 0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
            }
        }
    },
    "TemperatureSummary": {
        "Past6HourRange": {
            "Minimum": {
                "Metric": {
                    "Value": 17.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 64,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Maximum": {
                "Metric": {
                    "Value": 26.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 80,
                    "Unit": "F",
                    "UnitType": 18
                }
            }
        },
        "Past12HourRange": {
            "Minimum": {
                "Metric": {
                    "Value": 14.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 58,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Maximum": {
                "Metric": {
                    "Value": 26.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 80,
                    "Unit": "F",
                    "UnitType": 18
                }
            }
        },
        "Past24HourRange": {
            "Minimum": {
                "Metric": {
                    "Value": 9.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 49,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Maximum": {
                "Metric": {
                    "Value": 26.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 80,
                    "Unit": "F",
                    "UnitType": 18
                }
            }
        }
    },
    "MobileLink": "http://www.accuweather.com/en/in/dhupguri/191607/current-weather/191607?lang=en-us",
    "Link": "http://www.accuweather.com/en/in/dhupguri/191607/current-weather/191607?lang=en-us"
};
let b = {
    "Version": 1,
    "Key": "191607",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Dhupguri",
    "EnglishName": "Dhupguri",
    "PrimaryPostalCode": "",
    "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
    },
    "Country": {
        "ID": "IN",
        "LocalizedName": "India",
        "EnglishName": "India"
    },
    "AdministrativeArea": {
        "ID": "WB",
        "LocalizedName": "West Bengal",
        "EnglishName": "West Bengal",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "IN"
    },
    "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Kolkata",
        "GmtOffset": 5.5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
    },
    "GeoPosition": {
        "Latitude": 26.58,
        "Longitude": 89.017,
        "Elevation": {
            "Metric": {
                "Value": 78,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 255,
                "Unit": "ft",
                "UnitType": 0
            }
        }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
        {
            "Level": 2,
            "LocalizedName": "Jalpaiguri",
            "EnglishName": "Jalpaiguri"
        }
    ],
    "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "PremiumAirQuality"
    ],
    "Details": {
        "Key": "191607",
        "StationCode": "IN0647",
        "StationGmtOffset": 5.5,
        "BandMap": "IN",
        "Climo": "ZY84",
        "LocalRadar": "",
        "MediaRegion": null,
        "Metar": "VGSD",
        "NXMetro": "",
        "NXState": "",
        "Population": 44719,
        "PrimaryWarningCountyCode": "",
        "PrimaryWarningZoneCode": "",
        "Satellite": "INDIA",
        "Synoptic": "42398",
        "MarineStation": "",
        "MarineStationGMTOffset": null,
        "VideoCode": "",
        "LocationStem": "in/dhupguri/191607",
        "PartnerID": null,
        "Sources": [
            {
                "DataType": "AirQualityCurrentConditions",
                "Source": "Plume Labs",
                "SourceId": 63
            },
            {
                "DataType": "AirQualityForecasts",
                "Source": "Plume Labs",
                "SourceId": 63
            },
            {
                "DataType": "Alerts",
                "Source": "India Meteorological Department",
                "SourceId": 77
            },
            {
                "DataType": "CurrentConditions",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "DailyForecast",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "ForecastConfidence",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "FutureRadar",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "Historical",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "HourlyForecast",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "MinuteCast",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "PremiumAirQuality",
                "Source": "Plume Labs",
                "SourceId": 63
            }
        ],
        "CanonicalPostalCode": "",
        "CanonicalLocationKey": "191607"
    }
};
let c = {
    "Headline": {
        "EffectiveDate": "2023-01-16T19:00:00+05:30",
        "EffectiveEpochDate": 1673875800,
        "Severity": 3,
        "Text": "Air quality will be very unhealthy Monday evening through late Saturday night",
        "Category": "air quality",
        "EndDate": "2023-01-22T07:00:00+05:30",
        "EndEpochDate": 1674351000,
        "MobileLink": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2023-01-16T07:00:00+05:30",
            "EpochDate": 1673832600,
            "Sun": {
                "Rise": "2023-01-16T06:24:00+05:30",
                "EpochRise": 1673830440,
                "Set": "2023-01-16T17:04:00+05:30",
                "EpochSet": 1673868840
            },
            "Moon": {
                "Rise": "2023-01-16T00:26:00+05:30",
                "EpochRise": 1673808960,
                "Set": "2023-01-16T11:51:00+05:30",
                "EpochSet": 1673850060,
                "Phase": "WaningCrescent",
                "Age": 24
            },
            "Temperature": {
                "Minimum": {
                    "Value": 7.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 26.4,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 7.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 27.5,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 7.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 25,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "HoursOfSun": 9.7,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 4,
                    "Category": "Moderate",
                    "CategoryValue": 2
                }
            ],
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false,
                "ShortPhrase": "Mostly sunny",
                "LongPhrase": "Mostly sunny; air quality will be very unhealthy",
                "PrecipitationProbability": 2,
                "ThunderstormProbability": 0,
                "RainProbability": 2,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 208,
                        "Localized": "SSW",
                        "English": "SSW"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 18.5,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 168,
                        "Localized": "SSE",
                        "English": "SSE"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 10,
                "Evapotranspiration": {
                    "Value": 3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 5405.1,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false,
                "ShortPhrase": "Clear and cool",
                "LongPhrase": "Clear and cool; air quality will be very unhealthy",
                "PrecipitationProbability": 1,
                "ThunderstormProbability": 0,
                "RainProbability": 1,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 279,
                        "Localized": "W",
                        "English": "W"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 14.8,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 214,
                        "Localized": "SW",
                        "English": "SW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 9,
                "Evapotranspiration": {
                    "Value": 0.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 0,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2023-01-17T07:00:00+05:30",
            "EpochDate": 1673919000,
            "Sun": {
                "Rise": "2023-01-17T06:24:00+05:30",
                "EpochRise": 1673916840,
                "Set": "2023-01-17T17:04:00+05:30",
                "EpochSet": 1673955240
            },
            "Moon": {
                "Rise": "2023-01-17T01:27:00+05:30",
                "EpochRise": 1673899020,
                "Set": "2023-01-17T12:30:00+05:30",
                "EpochSet": 1673938800,
                "Phase": "WaningCrescent",
                "Age": 25
            },
            "Temperature": {
                "Minimum": {
                    "Value": 7.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 23.1,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 7.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 24.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 7.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 21.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "HoursOfSun": 9.8,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 4,
                    "Category": "Moderate",
                    "CategoryValue": 2
                }
            ],
            "Day": {
                "Icon": 5,
                "IconPhrase": "Hazy sunshine",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy sunshine",
                "LongPhrase": "Hazy sunshine; air quality will be very unhealthy",
                "PrecipitationProbability": 1,
                "ThunderstormProbability": 0,
                "RainProbability": 1,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 9.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 124,
                        "Localized": "SE",
                        "English": "SE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 16.7,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 156,
                        "Localized": "SSE",
                        "English": "SSE"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 12,
                "Evapotranspiration": {
                    "Value": 2.8,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 5477.8,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 37,
                "IconPhrase": "Hazy moonlight",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy and cool",
                "LongPhrase": "Hazy and cool; air quality will be very unhealthy",
                "PrecipitationProbability": 1,
                "ThunderstormProbability": 0,
                "RainProbability": 1,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 292,
                        "Localized": "WNW",
                        "English": "WNW"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 13,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 221,
                        "Localized": "SW",
                        "English": "SW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 4,
                "Evapotranspiration": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 0,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2023-01-18T07:00:00+05:30",
            "EpochDate": 1674005400,
            "Sun": {
                "Rise": "2023-01-18T06:24:00+05:30",
                "EpochRise": 1674003240,
                "Set": "2023-01-18T17:05:00+05:30",
                "EpochSet": 1674041700
            },
            "Moon": {
                "Rise": "2023-01-18T02:32:00+05:30",
                "EpochRise": 1673989320,
                "Set": "2023-01-18T13:17:00+05:30",
                "EpochSet": 1674028020,
                "Phase": "WaningCrescent",
                "Age": 26
            },
            "Temperature": {
                "Minimum": {
                    "Value": 7.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 23.4,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 8.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 24.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 8.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 22,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "HoursOfSun": 10.6,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 4,
                    "Category": "Moderate",
                    "CategoryValue": 2
                }
            ],
            "Day": {
                "Icon": 5,
                "IconPhrase": "Hazy sunshine",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy sunshine",
                "LongPhrase": "Hazy sunshine; air quality will be very unhealthy",
                "PrecipitationProbability": 1,
                "ThunderstormProbability": 0,
                "RainProbability": 1,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 9.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 141,
                        "Localized": "SE",
                        "English": "SE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 13,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 164,
                        "Localized": "SSE",
                        "English": "SSE"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 1,
                "Evapotranspiration": {
                    "Value": 3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 5807.6,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 37,
                "IconPhrase": "Hazy moonlight",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy",
                "LongPhrase": "Hazy; air quality will be very unhealthy",
                "PrecipitationProbability": 2,
                "ThunderstormProbability": 0,
                "RainProbability": 2,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 318,
                        "Localized": "NW",
                        "English": "NW"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 11.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 193,
                        "Localized": "SSW",
                        "English": "SSW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 0,
                "Evapotranspiration": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 0,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2023-01-19T07:00:00+05:30",
            "EpochDate": 1674091800,
            "Sun": {
                "Rise": "2023-01-19T06:23:00+05:30",
                "EpochRise": 1674089580,
                "Set": "2023-01-19T17:06:00+05:30",
                "EpochSet": 1674128160
            },
            "Moon": {
                "Rise": "2023-01-19T03:41:00+05:30",
                "EpochRise": 1674079860,
                "Set": "2023-01-19T14:12:00+05:30",
                "EpochSet": 1674117720,
                "Phase": "WaningCrescent",
                "Age": 27
            },
            "Temperature": {
                "Minimum": {
                    "Value": 8.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 24.2,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 8.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 25.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 8.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 22.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "HoursOfSun": 10.7,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 4,
                    "Category": "Moderate",
                    "CategoryValue": 2
                }
            ],
            "Day": {
                "Icon": 5,
                "IconPhrase": "Hazy sunshine",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy sunshine",
                "LongPhrase": "Hazy sunshine; air quality will be very unhealthy",
                "PrecipitationProbability": 2,
                "ThunderstormProbability": 0,
                "RainProbability": 2,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 138,
                        "Localized": "SE",
                        "English": "SE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 14.8,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 66,
                        "Localized": "ENE",
                        "English": "ENE"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 0,
                "Evapotranspiration": {
                    "Value": 3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 5905.3,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 37,
                "IconPhrase": "Hazy moonlight",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy",
                "LongPhrase": "Hazy; air quality will be very unhealthy",
                "PrecipitationProbability": 1,
                "ThunderstormProbability": 0,
                "RainProbability": 1,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 321,
                        "Localized": "NW",
                        "English": "NW"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 13,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 249,
                        "Localized": "WSW",
                        "English": "WSW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 0,
                "Evapotranspiration": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 0,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2023-01-20T07:00:00+05:30",
            "EpochDate": 1674178200,
            "Sun": {
                "Rise": "2023-01-20T06:23:00+05:30",
                "EpochRise": 1674175980,
                "Set": "2023-01-20T17:07:00+05:30",
                "EpochSet": 1674214620
            },
            "Moon": {
                "Rise": "2023-01-20T04:50:00+05:30",
                "EpochRise": 1674170400,
                "Set": "2023-01-20T15:16:00+05:30",
                "EpochSet": 1674207960,
                "Phase": "WaningCrescent",
                "Age": 29
            },
            "Temperature": {
                "Minimum": {
                    "Value": 8.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 24.8,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 8.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 26.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 8.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Chilly"
                },
                "Maximum": {
                    "Value": 23.5,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                }
            },
            "HoursOfSun": 10.5,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 4,
                    "Category": "Moderate",
                    "CategoryValue": 2
                }
            ],
            "Day": {
                "Icon": 5,
                "IconPhrase": "Hazy sunshine",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy sunshine",
                "LongPhrase": "Hazy sunshine; air quality will be very unhealthy",
                "PrecipitationProbability": 1,
                "ThunderstormProbability": 0,
                "RainProbability": 1,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 9.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 131,
                        "Localized": "SE",
                        "English": "SE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 14.8,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 85,
                        "Localized": "E",
                        "English": "E"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 3,
                "Evapotranspiration": {
                    "Value": 3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 5829.8,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 37,
                "IconPhrase": "Hazy moonlight",
                "HasPrecipitation": false,
                "ShortPhrase": "Hazy",
                "LongPhrase": "Hazy; air quality will be very unhealthy",
                "PrecipitationProbability": 1,
                "ThunderstormProbability": 0,
                "RainProbability": 1,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 96,
                        "Localized": "E",
                        "English": "E"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 11.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 78,
                        "Localized": "ENE",
                        "English": "ENE"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 2,
                "Evapotranspiration": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 0,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/dhupguri/191607/daily-weather-forecast/191607?day=5&unit=c&lang=en-us"
        }
    ]
};

let DATE;
let TIME;
let header = false ? {} : {
    // "Sec-Fetch-Site": "cross-site",
    // "Sec-Fetch-Mode": "cors",
    // "Access-Control-Allow-Origin": '*',
};

function WeatherCard() {
    const [openSearchBox, setOpenSearchBox] = useState(true);
    const [textValue, setTextValue] = useState('');
    const [pageInfo, setPageInfo] = useState({
        "Key": "191607",
        "Name": "Dhupguri",
        "WeatherText": "Sunny",
        "Humidity": 29,
        "Time": "2023-01-30T16:18:00+05:30",
        "Temparature": 32.9,
        "WindSpeed": 11.5,
        "Visibility": 9.7,
        "Precipitation": 0,
        "Sun": {
            "Rise": "06:20",
            "Set": "05:15"
        },
        "Day1": {},
        "Day2": {},
        "Day3": {},
        "Day4": {}
    });



    window.onload = () => {
        // setTextValue('Goa');
        // searchButton();
    };


    const changeLocationButton = () => setOpenSearchBox(true);
    const searchButton = async () => {
        let locationRes = await axios.get('http://dataservice.accuweather.com/locations/v1/search', {
            params: {
                apikey: "kUgGVIDkvSGQumIzwhl3X4WNx1Gq5pGX",
                q: textValue,
                language: "en-us",
                details: true,
                offset: "",
                alias: ""
            },
            headers: header
        });
        let locationBody = locationRes.data ? locationRes.data[0] : {};
        if (!locationBody) {
            // text-area styling on error
            document.getElementById('text-area').className += "error";

            // more additions
            setTextValue('');
            document.getElementById('text-area').placeholder = "Location not found!";

            window.setTimeout(() => {
                document.getElementById('text-area').placeholder = "Type another location..."
                document.getElementById('text-area').className = "";
            }, 2000);

            return;
        }

        let conditionRes = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationBody.Key, {
            params: {
                apikey: "kUgGVIDkvSGQumIzwhl3X4WNx1Gq5pGX",
                language: "en-us",
                details: true,
            },
            headers: header
        });
        let forecast = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationBody.Key, {
            params: {
                apikey: "kUgGVIDkvSGQumIzwhl3X4WNx1Gq5pGX",
                language: "en-us",
                details: true,
                metric: true,
            },
            headers: header
        });
        let dailyForecasts = forecast.data['DailyForecasts'];
        TIME = new Date();

        // Minify sun timing
        dailyForecasts[0]['Sun']['Rise'] = `${dailyForecasts[0]['Sun']['Rise'].slice(11, 13)}:${dailyForecasts[0]['Sun']['Rise'].slice(14, 16)}`;
        dailyForecasts[0]['Sun']['Set'] = `${"0" + (+dailyForecasts[0]['Sun']['Set'].slice(11, 13) - 12 + "")}:${dailyForecasts[0]['Sun']['Set'].slice(14, 16)}`;

        setPageInfo({
            Key: locationBody.Key,
            Name: locationBody.LocalizedName,
            WeatherText: conditionRes.data[0]['WeatherText'],
            Humidity: conditionRes.data[0]['RelativeHumidity'],
            Time: conditionRes.data[0]['LocalObservationDateTime'],
            Temparature: conditionRes.data[0]['Temperature']['Metric']['Value'],
            WindSpeed: conditionRes.data[0]['Wind']['Speed']['Metric']['Value'],
            Visibility: conditionRes.data[0]['Visibility']['Metric']['Value'],
            Precipitation: conditionRes.data[0]['PrecipitationSummary']['Precipitation']['Metric']['Value'],
            DayName: sw(TIME.getDate()),
            Sun: {
                Rise: dailyForecasts[0]['Sun']['Rise'],
                Set: dailyForecasts[0]['Sun']['Set'],
            },
            Day1: {},
            Day2: {},
            Day3: {},
            Day4: {},
        });

        alert(pageInfo.Time);

        setOpenSearchBox(false);
        setTextValue('');
    }

    const sw = (DayNum) => {
        switch (DayNum) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    }

    useEffect(() => {
        //2023-01-19T13:58:00+05:30
        let timeMeter = +pageInfo['Time'].slice(11, 13) > 12 ? "PM" : "AM";
        DATE = `${pageInfo['Time'].slice(8, 10)}-${pageInfo['Time'].slice(5, 7)}-${pageInfo['Time'].slice(0, 4)}`;
        TIME = `${timeMeter === "PM" ?
            ((+pageInfo['Time'].slice(11, 13) - 12 + "").length === 1 ? "0" + (+pageInfo['Time'].slice(11, 13) - 12 + "") : +pageInfo['Time'].slice(11, 13) - 12)
            : pageInfo['Time'].slice(11, 13)}:${pageInfo['Time'].slice(14, 16)
            } ${timeMeter}`;
    }, [pageInfo]);

    return (
        <>
            <p id='update-time'>{TIME ? `Last Updated: ${TIME}` : ""}</p>
            <div className='weather'>
                <div className='weather-card'>
                    <div className='weather-bg'>
                    </div>
                    <div className='weather-inside'>
                        <h3>{pageInfo['Name'] ? pageInfo['Name'] : "-"}</h3>
                        <p>{DATE}</p>
                        <div className='row'>
                            <img src={LocationIcon} alt='location-icon' />
                            <p>{pageInfo['Name'] ? pageInfo['Name'] : "-"}</p>
                        </div>
                    </div>

                    <div className='bottom-white-space'>
                        <div className='white-space-inside'>
                            <div className='col'>
                                <img alt='sun-icon' src="https://img.icons8.com/emoji/96/null/sun-emoji.png" />
                                <h3>{pageInfo['WeatherText'] ? pageInfo['WeatherText'] : "-"}</h3>
                            </div>
                            <div className='right'>
                                <h3 id="degree-meter">{pageInfo['Temparature'] ? Math.trunc(pageInfo['Temparature']) : "-"} ℃</h3>
                                <img alt='sunny' src={Sunny} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='weather-info'>
                    <div className='row'>
                        <h4>VISIBILITY</h4>
                        <h5>{pageInfo['Visibility'] ? pageInfo['Visibility'] : "0"}km</h5>
                    </div>
                    <div className='row'>
                        <h4>HUMIDITY</h4>
                        <h5>{pageInfo['Humidity'] ? pageInfo['Humidity'] : "0"}%</h5>
                    </div>
                    <div className='row'>
                        <h4>WIND</h4>
                        <h5>{pageInfo['WindSpeed'] ? pageInfo['WindSpeed'] : "0"}km/h</h5>
                    </div>

                    <div className='sun-time-div'>
                        <img src={SunGif} alt='sunrise-to-sunset' />
                        <div className='col'>
                            <h4>Sunrise: {pageInfo['Sun']['Rise']} AM</h4>
                            <h4>Sunset: {pageInfo['Sun']['Set']} PM</h4>
                        </div>
                    </div>

                    <div className='weather-timeline row'>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Sat</p>
                            <p><strong>20 ℃</strong></p>
                        </div>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Sun</p>
                            <p><strong>12 ℃</strong></p>
                        </div>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Mon</p>
                            <p><strong>18 ℃</strong></p>
                        </div>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Tue</p>
                            <p><strong>15 ℃</strong></p>
                        </div>
                    </div>

                    <div className='btn-area'>
                        {openSearchBox ?
                            <div className='row'>
                                <input id='text-area' style={{}} name='search-for' type="text" placeholder='e.g. Delhi' value={textValue} onChange={e => setTextValue(e.target.value)} onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        searchButton();
                                    }
                                }} />
                                <button id='search-btn' onClick={searchButton}><span role='img' aria-label='search-icon'>🔍</span></button>
                            </div> :
                            <button id="location-btn" onClick={changeLocationButton}>Change Location</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );

}



export default WeatherCard;