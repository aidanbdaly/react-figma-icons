"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AMENITY_TO_ICON = void 0;
const custom = __importStar(require("../custom"));
const AMENITY_TO_ICON = [
  { amenityId: "HAC0005", icon: custom.AirConditioningIcon },
  { amenityId: "HAC0008", icon: custom.BabysittingServiceIcon },
  { amenityId: "HAC0022", icon: custom.ConciergeIcon },
  { amenityId: "HAC0035", icon: custom.FitnessCenterIcon },
  { amenityId: "HAC0044", icon: custom.GamesRoomIcon },
  { amenityId: "HAC0049", icon: custom.PoolHeatingIcon },
  { amenityId: "HAC0050", icon: custom.HouseKeepingIcon },
  { amenityId: "HAC0053", icon: custom.IndoorParkingIcon },
  { amenityId: "HAC0054", icon: custom.IndoorPoolIcon },
  { amenityId: "HAC0055", icon: custom.HotTubIcon },
  { amenityId: "HAC0066", icon: custom.PoolIcon },
  { amenityId: "HAC0078", icon: custom.SafeIcon },
  { amenityId: "HAC0079", icon: custom.SaunaIcon },
  { amenityId: "HAC0083", icon: custom.PoolCageIcon },
  { amenityId: "HAC0116", icon: custom.PropertyAccessibleIcon },
  { amenityId: "HAC0149", icon: custom.GroceryShoppingServiceIcon },
  { amenityId: "HAC0165", icon: custom.BarIcon },
  { amenityId: "HAC0193", icon: custom.PlaygroundIcon },
  { amenityId: "HAC0202", icon: custom.BikeRentalsIcon },
  { amenityId: "HAC0230", icon: custom.ParkingIcon },
  { amenityId: "HAC0233", icon: custom.TennisIcon },
  { amenityId: "HAC0234", icon: custom.WaterSportsFacilitiesIcon },
  { amenityId: "HAC0236", icon: custom.GolfIcon },
  { amenityId: "HAC0237", icon: custom.HorsebackRidingIcon },
  { amenityId: "HAC0272", icon: custom.SkiIcon },
  { amenityId: "HAC0316", icon: custom.ElectricVehicleChargingStationIcon },
  { amenityId: "HAC0327", icon: custom.TicketServiceIcon },
  { amenityId: "HAC5003", icon: custom.OutdoorFurnitureIcon },
  { amenityId: "HAC5004", icon: custom.OutdoorFireplaceIcon },
  { amenityId: "HAC5005", icon: custom.GardenIcon },
  { amenityId: "HAC5006", icon: custom.TerraceIcon },
  { amenityId: "HAC5010", icon: custom.IroningServiceIcon },
  { amenityId: "HAC5011", icon: custom.TrouserPressIcon },
  { amenityId: "HAC5015", icon: custom.BeachIcon },
  { amenityId: "HAC5016", icon: custom.BowlingIcon },
  { amenityId: "HAC5017", icon: custom.DartsIcon },
  { amenityId: "HAC5018", icon: custom.FishingIcon },
  { amenityId: "HAC5020", icon: custom.HikingIcon },
  { amenityId: "HAC5021", icon: custom.MiniGolfIcon },
  { amenityId: "HAC5022", icon: custom.MiniGolfIcon },
  { amenityId: "HAC5023", icon: custom.SquashIcon },
  { amenityId: "HAC5024", icon: custom.WindSurfingIcon },
  { amenityId: "HAC5025", icon: custom.CueSportsIcon },
  { amenityId: "HAC5026", icon: custom.TableTennisIcon },
  { amenityId: "HAC5027", icon: custom.CanoeingIcon },
  { amenityId: "HAC5028", icon: custom.SkiToDoorAccessIcon },
  { amenityId: "HAC5029", icon: custom.ScubaDivingIcon },
  { amenityId: "HAC5037", icon: custom.PrivateBeachIcon },
  { amenityId: "HAC5045", icon: custom.KaraokeIcon },
  { amenityId: "HAC5053", icon: custom.HotSpringBathIcon },
  { amenityId: "HAC5054", icon: custom.KidsClubIcon },
  { amenityId: "HAC5056", icon: custom.WaterParkIcon },
  { amenityId: "HAC5057", icon: custom.AdultsOnlyIcon },
  { amenityId: "HAC5063", icon: custom.IndoorPlayAreaIcon },
  { amenityId: "HAC5076", icon: custom.SunloungerIcon },
  { amenityId: "HAC5078", icon: custom.PicnicIcon },
  { amenityId: "HAC5079", icon: custom.BeautyServicesIcon },
  { amenityId: "HAC5080", icon: custom.SpaFacilitiesIcon },
  { amenityId: "HAC5081", icon: custom.SteamRoomIcon },
  { amenityId: "HAC5087", icon: custom.YogaClassesIcon },
  { amenityId: "HAC5088", icon: custom.FitnessClassesIcon },
  { amenityId: "HAC5089", icon: custom.PersonalTrainerIcon },
  { amenityId: "HAC5091", icon: custom.KidsPoolIcon },
  { amenityId: "HAC5092", icon: custom.ShuttleIcon },
  { amenityId: "HAC5097", icon: custom.WalkingToursIcon },
  { amenityId: "HAC5098", icon: custom.BikeToursIcon },
  { amenityId: "HAC5105", icon: custom.ArcheryIcon },
  { amenityId: "HAC5107", icon: custom.BingoIcon },
  { amenityId: "HAC5114", icon: custom.RooftopPoolIcon },
  { amenityId: "HAC5115", icon: custom.InfinityPoolIcon },
  { amenityId: "HAC5117", icon: custom.SaltWaterPoolIcon },
  { amenityId: "HAC5118", icon: custom.PlungePoolIcon },
  { amenityId: "HAC5119", icon: custom.PoolBarIcon },
  { amenityId: "HAC5122", icon: custom.PoolFenceIcon },
  { amenityId: "HAC5124", icon: custom.EntirePropertyAccessibleIcon },
  { amenityId: "HAC5158", icon: custom.TwentyFourHourSecurityIcon },
  { amenityId: "RMA0032", icon: custom.DishwasherIcon },
  { amenityId: "RMA0047", icon: custom.FullyEquippedKitchenIcon },
  { amenityId: "RMA0055", icon: custom.IroningFacilitiesIcon },
  { amenityId: "RMA5017", icon: custom.BalconyIcon },
  { amenityId: "RMA5020", icon: custom.SpaBathIcon },
  { amenityId: "RMA5034", icon: custom.LaundryFacilitiesIcon },
  { amenityId: "RMA5099", icon: custom.BbqIcon },
  { amenityId: "RMA5108", icon: custom.SeaViewIcon },
  { amenityId: "RMA5109", icon: custom.LakeViewIcon },
  { amenityId: "RMA5110", icon: custom.GardenViewIcon },
  { amenityId: "RMA5112", icon: custom.MountainViewIcon },
  { amenityId: "RMA5113", icon: custom.LandmarkViewIcon },
  { amenityId: "RMA5121", icon: custom.CityViewIcon },
  { amenityId: "RMA5122", icon: custom.RiverViewIcon },
  { amenityId: "RMA5130", icon: custom.OutdoorDiningIcon }, //outdoor dining
  { amenityId: "RMA5134", icon: custom.EntirePropertyAccessibleIcon },
  { amenityId: "RMA5189", icon: custom.AccessibleByLiftIcon },
  { amenityId: "TTV8001", icon: custom.IndoorBasketballCourtIcon },
  { amenityId: "TTV8002", icon: custom.OutdoorBasketballCourtIcon },
  { amenityId: "TTV8003", icon: custom.HomeTheaterIcon },
  { amenityId: "TTV8004", icon: custom.ThemedBedroomsIcon },
  { amenityId: "TTV8005", icon: custom.PrivateChefIcon },
  { amenityId: "TTV8006", icon: custom.HomeGymIcon },
  { amenityId: "TTV8007", icon: custom.MembershipIcon },
  { amenityId: "TTV8008", icon: custom.SharedPoolIcon },
  { amenityId: "TTV8009", icon: custom.FullyStaffedIcon },
  { amenityId: "TTV8010", icon: custom.BeachVolleyballCourtIcon },
  { amenityId: "TTV8011", icon: custom.PetsAllowedIcon },
  { amenityId: "TTV8012", icon: custom.PetsConsideredIcon },
  { amenityId: "TTV8013", icon: custom.OverTwelveOnlyIcon },
  { amenityId: "TTV8014", icon: custom.DriverIcon },
  { amenityId: "TTV8015", icon: custom.OutdoorKitchenIcon },
  { amenityId: "TTV8016", icon: custom.ResortIcon },
  { amenityId: "PCT0003", icon: custom.ApartmentIcon },
  { amenityId: "PCT0007", icon: custom.ChaletIcon },
  { amenityId: "PCT0012", icon: custom.BoatIcon },
  { amenityId: "PCT0015", icon: custom.RanchIcon },
  { amenityId: "PCT0033", icon: custom.TentIcon },
  { amenityId: "PCT0035", icon: custom.VillaIcon },
  { amenityId: "PCT0101", icon: custom.TownhouseIcon },
  { amenityId: "PCT5006", icon: custom.HolidayHomeIcon },
  { amenityId: "PCT5007", icon: custom.CountryHouseIcon },
  { amenityId: "RMA33", icon: custom.DoubleBedIcon },
  { amenityId: "RMA58", icon: custom.KingsizeBedIcon },
  { amenityId: "RMA86", icon: custom.QueensizeBedIcon },
  { amenityId: "RMA102", icon: custom.SofaBedIcon },
  { amenityId: "RMA200", icon: custom.FutonBedIcon },
  { amenityId: "RMA203", icon: custom.SingleBedIcon },
  { amenityId: "RMA5175", icon: custom.BabysittingServiceIcon },
  { amenityId: "RMA6032", icon: custom.BunkBedIcon },
];
exports.AMENITY_TO_ICON = AMENITY_TO_ICON;
//# sourceMappingURL=config.js.map
