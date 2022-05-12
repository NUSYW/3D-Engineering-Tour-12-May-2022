var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.23316428741780726,
        "pitch": 3.552713678800501e-15,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.9793283723028239,
          "pitch": -0.11894827481425096,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22062482878598288,
          "pitch": -0.18342792341843506,
          "title": "Welcome!",
          "text": "Faculty of Engineering"
        },
        {
          "yaw": -1.5195733515763727,
          "pitch": 0.035868158047254184,
          "title": "Engineering Drive",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-engineering-outside",
      "name": "Engineering outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.613655971249834,
        "pitch": -0.3691944398651046,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.0034928770683038124,
          "pitch": 0.02934193892355985,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": 1.1207202541905197,
          "pitch": 0.06931939642632479,
          "rotation": 1.5707963267948966,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0012098792037953388,
          "pitch": -0.22401026570203086,
          "title": "Engineering Auditorium",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.9372451573669451,
        "pitch": 0.32359974719183526,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.3075802289770593,
          "pitch": 0.02886395596056346,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.187621422626032,
          "pitch": 0.22991261579856825,
          "title": "Auditorium Atrium",
          "text": "Text"
        },
        {
          "yaw": -1.4398313920240895,
          "pitch": 0.01195775569707358,
          "title": "cafe",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "3D Engineering Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
