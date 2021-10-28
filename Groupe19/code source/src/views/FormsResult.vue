<template>
  <v-container id="printPage">
    <fieldset class="pa-3">
      <legend>
        <v-subheader>Information personelle</v-subheader>
      </legend>

      <v-row>
        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Adresse"
            :value="formsData.personalInfo.address.address"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Ville"
            :value="formsData.personalInfo.address.city"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Province"
            :value="formsData.personalInfo.address.province"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Code postal"
            :value="formsData.personalInfo.address.postalCode"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Pays"
            :value="formsData.personalInfo.address.country"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Courtier ou vendeur"
            :value="formsData.personalInfo.broker"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Téléphone mobile"
            :value="formsData.personalInfo.phoneNumber.cell"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Téléphone maison"
            :value="formsData.personalInfo.phoneNumber.home"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Courriel"
            :value="formsData.personalInfo.email"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Prix demandé"
            :value="formsData.personalInfo.askingPrice"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Évaluation municipale"
            :value="formsData.personalInfo.municipalAssessment"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Montant de la taxe scolaire"
            :value="formsData.personalInfo.schoolTax"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Montant de la taxe municipale"
            :value="formsData.personalInfo.municipalTax"
            disabled
          />
        </v-col>
      </v-row>
    </fieldset>

    <fieldset class="pa-3">
      <legend>
        <v-subheader>Information sur la maison</v-subheader>
      </legend>

      <v-row>
        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Construction"
            :value="formsData.houseInfo.construction"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Type d’habitation"
            :value="formsData.houseInfo.houseType"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Revenu mensuel"
            :value="formsData.houseInfo.incomeHouse.income || '0'"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Âge de l’immeuble"
            :value="formsData.houseInfo.houseAge"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Quartier"
            :value="formsData.houseInfo.neighborhood"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Bruit ambiant"
            :value="formsData.houseInfo.ambientNoise"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Égout"
            :value="formsData.houseInfo.sewer"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Eau"
            :value="formsData.houseInfo.water"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Circulation"
            :value="formsData.houseInfo.traffic"
            disabled
          />
        </v-col>
      </v-row>
    </fieldset>

    <fieldset class="pa-3">
      <legend>
        <v-subheader>Information extérieur</v-subheader>
      </legend>

      <v-row>
        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Fondations"
            :value="formsData.exterior.foundations"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Revêtement extérieur"
            :value="formsData.exterior.exteriorCladding"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Fenêtres : vitrage"
            :value="formsData.exterior.windows.glazing"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Fenêtres : construction"
            :value="formsData.exterior.windows.construction"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Age de la Toiture"
            :value="formsData.exterior.roof"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="État de la toiture"
            :value="formsData.exterior.roofCondition"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Taille du terrain"
            :value="formsData.exterior.exteriorSize.size"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Dimensions"
            :value="formsData.exterior.exteriorSize.dimension"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Aménagement du terrain"
            :value="formsData.exterior.landscapingLand"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Piscine"
            :value="formsData.exterior.pool"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Chauffe-piscine"
            :value="formsData.exterior.poolHeater"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Nombre de stationnement"
            :value="formsData.exterior.parkingSpace"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Type de stationnement"
            :value="formsData.exterior.parkingType"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Entrée"
            :value="formsData.exterior.driveway"
            disabled
          />
        </v-col>
      </v-row>

      <fieldset class="pa-3">
        <legend>
          <v-subheader>Orientation / ensoleillement</v-subheader>
        </legend>

        <v-row>
          <v-col cols="12" md="6">
            <h4>Interieur</h4>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Les pièces ensoleillé le matin"
                  :value="
                    formsData.exterior.sunshineOrientation.interior.amRooms
                  "
                  disabled
                />
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  label="Les pièces ensoleillé l'apres-midi"
                  :value="
                    formsData.exterior.sunshineOrientation.interior.pmRooms
                  "
                  disabled
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <h4>Exterieur</h4>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Extérieur Devant"
                  :value="
                    amOrPm(
                      formsData.exterior.sunshineOrientation.exterior.front
                    )
                  "
                  disabled
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Extérieur Derrière"
                  :value="
                    amOrPm(formsData.exterior.sunshineOrientation.exterior.back)
                  "
                  disabled
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </fieldset>
    </fieldset>

    <fieldset class="pa-3">
      <legend>
        <v-subheader>Information intérieur</v-subheader>
      </legend>

      <v-row>
        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Superficie habitable"
            :value="formsData.interior.livingArea"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Type de chauffe-eau"
            :value="formsData.interior.waterHeater.type"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Possession du chauffe-eau"
            :value="formsData.interior.waterHeater.buyOrRent"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Système électrique"
            :value="formsData.interior.electricSystem"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Type de chauffage"
            :value="formsData.interior.heatingSystemType"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Fournaise"
            :value="formsData.interior.furnace"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Ventilateur-récupérateur de chaleur"
            :value="yesOrNo(formsData.interior.heatRecoveryVentilator)"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Climatisation"
            :value="formsData.interior.airConditioning"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Dispositifs de sécurité"
            :value="formsData.interior.safetyDevices"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Nombre total de pièces"
            :value="formsData.interior.numberRooms"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Chambre à coucher principale avec salle de bain"
            :value="formsData.interior.masterBedroomWithBathroom.type"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Salle à manger"
            :value="formsData.interior.diningRoom"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Salon / séjour"
            :value="formsData.interior.livingRoom"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Foyer"
            :value="formsData.interior.fireplace"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Poêle"
            :value="formsData.interior.stove"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Espace de bureau"
            :value="yesOrNo(formsData.interior.officeSpace)"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Etat du sous-sol"
            :value="formsData.interior.status"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Sous-sol"
            :value="formsData.interior.type"
            disabled
          />
        </v-col>
      </v-row>

      <fieldset class="pa-3">
        <legend>
          <v-subheader>Indice d’isolation</v-subheader>
        </legend>
        <v-row>
          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Sous-sol"
              :value="formsData.interior.insulationRating.basement"
              disabled
            />
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Murs"
              :value="formsData.interior.insulationRating.wall"
              disabled
            />
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Plafonds"
              :value="formsData.interior.insulationRating.roof"
              disabled
            />
          </v-col>
        </v-row>
      </fieldset>

      <fieldset class="pa-3">
        <legend>
          <v-subheader>Chambres à coucher</v-subheader>
        </legend>
        <v-row>
          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Sous-sol"
              :value="formsData.interior.bedrooms.basement"
              disabled
            />
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Rez-de-chaussée"
              :value="formsData.interior.bedrooms.firstFloor"
              disabled
            />
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Étages"
              :value="formsData.interior.bedrooms.otherFloor"
              disabled
            />
          </v-col>
        </v-row>
      </fieldset>

      <fieldset class="pa-3">
        <legend>
          <v-subheader>Salles d’eau</v-subheader>
        </legend>
        <v-row>
          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Salle de toilette"
              :value="formsData.interior.powderRooms.bathRoom"
              disabled
            />
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Salle de bains"
              :value="formsData.interior.powderRooms.toiletRoom"
              disabled
            />
          </v-col>

          <v-col cols="12" md="4" lg="3">
            <v-text-field
              label="Laverie"
              :value="formsData.interior.powderRooms.laundry"
              disabled
            />
          </v-col>
        </v-row>
      </fieldset>

      <fieldset class="pa-3">
        <legend>
          <v-subheader>Rangement suffisant</v-subheader>
        </legend>

        <v-row>
          <v-col>
            <v-text-field
              label="Sous-sol"
              :value="yesOrNo(formsData.interior.sufficientStorageSpace.basement)"
              disabled
            />
          </v-col>

          <v-col>
            <v-text-field
              label="Rez-de-chaussée"
              :value="yesOrNo(formsData.interior.sufficientStorageSpace.firstFloor)"
              disabled
            />
          </v-col>

          <v-col>
            <v-text-field
              label="Cuisine"
              :value="yesOrNo(formsData.interior.sufficientStorageSpace.kitchen)"
              disabled
            />
          </v-col>

          <v-col>
            <v-text-field
              label="1er étage"
              :value="yesOrNo(formsData.interior.sufficientStorageSpace.secondFloor)"
              disabled
            />
          </v-col>

          <v-col>
            <v-text-field
              label="2e étage"
              :value="yesOrNo(formsData.interior.sufficientStorageSpace.thirdFloor)"
              disabled
            />
          </v-col>
        </v-row>
      </fieldset>
    </fieldset>

    <fieldset class="pa-3">
      <legend>
        <v-subheader>Autre information</v-subheader>
      </legend>

      <v-row>
        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Date d’occupation"
            :value="formsData.other.occupationDate"
            disabled
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-text-field
            label="Inclus dans la vente"
            :value="formsData.other.included"
            disabled
          />
        </v-col>
      </v-row>

      <fieldset class="pa-3">
        <legend>
          <v-subheader>Proximité de (en km)</v-subheader>
        </legend>

        <v-row>
          <v-col cols="12" md="2">
            <v-text-field
              label="Travail"
              :value="formsData.other.proximity.work"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Travail du conjoint"
              :value="formsData.other.proximity.husbandWork"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Écoles"
              :value="formsData.other.proximity.school"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Transport en commun"
              :value="formsData.other.proximity.publicTransport"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Épiceries"
              :value="formsData.other.proximity.grocery"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Centres commerciaux"
              :value="formsData.other.proximity.shoppongMall"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Centres récréatifs"
              :value="formsData.other.proximity.amusement"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Lieux de culte"
              :value="formsData.other.proximity.church"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Médecin"
              :value="formsData.other.proximity.doctor"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Hôpital"
              :value="formsData.other.proximity.hospital"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Service de police"
              :value="formsData.other.proximity.police"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Service d’incendie"
              :value="formsData.other.proximity.firefighter"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Dentiste"
              :value="formsData.other.proximity.dentist"
              disabled
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Vétérinaire"
              :value="formsData.other.proximity.veterinary"
              disabled
            />
          </v-col>
        </v-row>
      </fieldset>
    </fieldset>
  </v-container>
</template>

<script>
export default {
  computed: {
    formsData: {
      get: function () {
        return this.$store.getters.formsData;
      },
    },
  },
  methods: {
    yesOrNo(bool) {
      return bool ? "Oui" : "Non";
    },
    amOrPm(obj) {
      if (obj.am) return "Matin";
      else if (obj.pm) return "Aprés-midi";
      else return "Aucun";
    },
  },
};
</script>

<style>
</style>