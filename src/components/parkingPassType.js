const ParkingPassType = Object.freeze({
  none : Object.freeze({
    value : 0,
    name : "None",
    compatiblePasses : Object.freeze([])
  }),
  green : Object.freeze({
    value : 1,
    name : "Green",
    compatiblePasses : Object.freeze([])
  }),
  gold : Object.freeze({
    value : 2,
    name : "Gold",
    compatiblePasses : Object.freeze(["green"])
  }),
  orange : Object.freeze({
    value : 3,
    name : "Orange",
    compatiblePasses : Object.freeze(["green", "gold"])
  }),
  purple : Object.freeze({
    value : 4,
    name : "Purple",
    compatiblePasses : Object.freeze(["green", "gold", "orange"])
  }),
  apartments : Object.freeze({
    value : 5,
    name : "Apartments",
    compatiblePasses : Object.freeze([])
  }),
  commons : Object.freeze({
    value : 6,
    name : "Commons",
    compatiblePasses : Object.freeze([])
  }),
  handicap : Object.freeze({
    value : 7,
    name : "Handicap",
    compatiblePasses : Object.freeze([])
  })
});

export default ParkingPassType;