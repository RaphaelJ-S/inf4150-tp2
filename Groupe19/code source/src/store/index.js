import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: 0,
    allForms: [
      "Fiche de visite",
      "Global",
      "Extérieur",
      "Ext. : Terrain",
      "Intérieur",
      "Int. : Pièces",
      "Autres infos",
      "Bilan",
    ],
    formsData: {
      personalInfo: {
        address: {
          address: "",
          city: "",
          province: "",
          postalCode: "",
          country: "",
        },
        broker: "",
        phoneNumber: {
          cell: "",
          home: "",
        },
        email: "",
        askingPrice: "",
        municipalAssessment: "",
        schoolTax: "",
        municipalTax: "",
      },
      houseInfo: {
        construction: "",
        houseType: "",
        incomeHouse: {
          incomeHouse: false,
          income: "",
        },
        houseAge: "",
        neighborhood: "",
        ambientNoise: "",
        sewer: "",
        water: "",
        traffic: "",
      },
      exterior: {
        foundations: "",
        exteriorCladding: "",
        windows: {
          glazing: "",
          construction: "",
        },
        roof: "",
        roofCondition: "",
        exteriorSize: {
          size: "",
          dimension: "",
        },
        landscapingLand: "",
        pool: "",
        poolHeater: "",
        parkingSpace: "",
        parkingType: "",
        driveway: "",
        sunshineOrientation: {
          interior: {
            am: false,
            amRooms: [],
            pm: false,
            pmRooms: [],
          },
          exterior: {
            front: {
              am: false,
              pm: false,
            },
            back: {
              am: false,
              pm: false,
            },
          },
        },
      },
      interior: {
        livingArea: "",
        insulationRating: {
          basement: "",
          wall: "",
          roof: "",
        },
        waterHeater: {
          type: "",
          buyOrRent: "",
        },
        electricSystem: "",
        heatingSystemType: "",
        furnace: "",
        heatRecoveryVentilator: false,
        airConditioning: "",
        safetyDevices: [],
        numberRooms: "",
        bedrooms: {
          basement: "",
          firstFloor: "", // rez-de-chausse
          otherFloor: "",
        },
        masterBedroomWithBathroom: {
          exist: false,
          type: "",
        },
        powderRooms: {
          bathRoom: "",
          toiletRoom: "",
          laundry: "",
        },
        diningRoom: "",
        livingRoom: "",
        fireplace: "",
        stove: "",
        officeSpace: false,
        basement: {
          status: "",
          type: "",
        },
        sufficientStorageSpace: {
          basement: false, // sous-sol
          firstFloor: false, // rez-de-chausse
          secondFloor: false, // etage 1
          thirdFloor: false, // etage 2
          kitchen: false,
        },
      },
      other: {
        proximity: {
          work: "",
          husbandWork: "",
          school: "",
          publicTransport: "",
          grocery: "",
          shoppongMall: "",
          amusement: "",
          church: "",
          doctor: "",
          dentist: "",
          veterinary: "",
          hospital: "",
          police: "",
          firefighter: "",
        },
        occupationDate: "",
        included: [],
      },
    },
    FR: [],
  },
  getters: {
    page: (state) => {
      return state.page;
    },
    allForms: (state) => {
      return state.allForms;
    },
    formsData: (state) => {
      return state.formsData;
    },
  },
  mutations: {
    /**
     * plus or minus 1 to "page" variable.
     * @param {number} number Can be a positive or negative number
     */
    setPage(state, number) {
      const futurPage = state.page + Math.sign(number);
      if (futurPage < 0 || futurPage > state.allForms.length) return;
      state.page = futurPage;
    },
    putPage(state, number) {
      state.page = number;
    },
    setFormsData(state, [key, value]) {
      state.formsData[key] = value;
    },
  },
  actions: {},
  modules: {},
});
