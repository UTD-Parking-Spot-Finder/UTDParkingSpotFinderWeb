const ParkingPassType = Object.freeze({
  none : Object.freeze({
    value : 0,
    name : "None",
    compatiblePasses : Object.freeze(["none"]),
    color : [166, 166, 166]
  }),
  green : Object.freeze({
    value : 1,
    name : "Green",
    compatiblePasses : Object.freeze(["green"]),
    color : [0, 56, 10]
  }),
  gold : Object.freeze({
    value : 2,
    name : "Gold",
    compatiblePasses : Object.freeze(["gold", "green"]),
    color : [255, 221, 0]
  }),
  orange : Object.freeze({
    value : 3,
    name : "Orange",
    compatiblePasses : Object.freeze(["green", "gold", "orange"]),
    color : [255, 87, 31]
  }),
  purple : Object.freeze({
    value : 4,
    name : "Purple",
    compatiblePasses : Object.freeze(["green", "gold", "orange", "purple"]),
    color : [119, 61, 188]
  }),
  apartments : Object.freeze({
    value : 5,
    name : "Apartments",
    compatiblePasses : Object.freeze(["apartments"]),
    color : [204, 41, 43]
  }),
  commons : Object.freeze({
    value : 6,
    name : "Commons",
    compatiblePasses : Object.freeze(["commons"]),
    color : [204, 41, 43]
  }),
  handicap : Object.freeze({
    value : 7,
    name : "Handicap",
    compatiblePasses : Object.freeze(["handicap"]),
    color : [0, 161, 222]
  })
});

export default ParkingPassType;