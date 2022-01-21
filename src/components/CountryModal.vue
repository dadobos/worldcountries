
<template>
  <transition name="pop">
    <div class="modal">
      <div class="modal-background" @click="close"></div>

      <div class="modal-card">
        <div class="card-image" v-show="countryData.flag">
          <figure class="image is-3by2 m-5">
            <img :src="countryData.flag" alt="flag" />
          </figure>
        </div>

        <div class="card-content has-text-justified">
          <div class="columns is-mobile" v-show="countryData.name">
            <h4 class="column is-4 is-half-mobile">Country:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.name }}
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.nativeName">
            <h4 class="column is-4 is-half-mobile">Native Name:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.nativeName }}
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.demonym">
            <h4 class="column is-4 is-half-mobile">Demonym:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.demonym }}
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.capital">
            <div class="column is-4">Capital:</div>
            <div class="column has-text-right-mobile">
              {{ countryData.capital }}
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.region">
            <div class="column is-4">Region:</div>
            <div class="column has-text-right-mobile">
              {{ countryData.region }}
            </div>
          </div>
          <div class="columns is-mobile" v-show="countryData.subregion">
            <div class="column is-4">Subregion:</div>
            <div class="column has-text-right-mobile">
              {{ countryData.subregion }}
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.translations"
          >
            <div class="column is-4">Translations:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(item, key, i) in countryData.translations"
                :key="`${item}-${key}-${i}`"
              >
                {{ key }} - {{ item }}
              </div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.currencies"
          >
            <div class="column is-4">Currencies:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(currency, i) in countryData.currencies"
                :key="`item-${currency}-${i}`"
              >
                <div
                  v-for="(item, key, j) in currency"
                  :key="`${item}-${key}-${j}`"
                >
                  {{ key }} - {{ item }}
                </div>
              </div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.languages"
          >
            <div class="column is-4">Languages:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(language, i) in countryData.languages"
                :key="`item-${language}-${i}`"
              >
                <div
                  v-for="(item, key, j) in language"
                  :key="`${item}-${key}-${j}`"
                >
                  {{ key }} - {{ item }}
                </div>
              </div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.regionalBlocs"
          >
            <div class="column is-4">Regional Blocs:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(regionalBloc, i) in countryData.regionalBlocs"
                :key="`item-${regionalBloc}-${i}`"
              >
                <div
                  class="columns is-mobile"
                  v-for="(item, key, j) in regionalBloc"
                  :key="`${item}-${key}-${j}`"
                >
                  <div class="column is-half">{{ key }}</div>
                  <div class="column">
                    <div v-if="typeof item === 'string'">
                      {{ item }}
                    </div>
                    <div v-else>
                      <div v-for="(text, k) in item" :key="`${text}-${k}`">
                        {{ text }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.altSpellings"
          >
            <div class="column is-4">Alt Spellings:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(item, i) in countryData.altSpellings"
                :key="`item-${i}`"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.topLevelDomain"
          >
            <div class="column is-4">Top level domain:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(item, i) in countryData.topLevelDomain"
                :key="`item-${i}`"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.alpha2Code">
            <h4 class="column is-4 is-half-mobile">Alpha 2 code:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.alpha2Code }}
            </div>
          </div>
          <div class="columns is-mobile" v-show="countryData.alpha3Code">
            <h4 class="column is-4 is-half-mobile">Alpha 3 code:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.alpha3Code }}
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.numericCode">
            <h4 class="column is-4 is-half-mobile">Numeric code:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.numericCode }}
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.area">
            <h4 class="column is-4 is-half-mobile">Area:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.area }}
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.callingCodes"
          >
            <div class="column is-4">Calling codes:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(item, i) in countryData.callingCodes"
                :key="`item-${i}`"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.latlng"
          >
            <div class="column is-4">Latitude longitude:</div>
            <div class="column is-8 has-text-right-mobile">
              <div v-for="(item, i) in countryData.latlng" :key="`item-${i}`">
                {{ item }}
              </div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.timezones"
          >
            <div class="column is-4">Timezones:</div>
            <div class="column is-8 has-text-right-mobile">
              <div
                v-for="(item, i) in countryData.timezones"
                :key="`item-${i}`"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.population">
            <div class="column is-4">Population:</div>
            <div class="column has-text-right-mobile">
              <div v-if="countryData.population > 1000">
                {{ Math.round(countryData.population / 1000) }}K
              </div>
              <div v-else>{{ countryData.population }}</div>
            </div>
          </div>

          <div
            class="columns is-multiline is-mobile"
            v-show="countryData.borders"
          >
            <div class="column is-4">Borders:</div>
            <div class="column is-8 has-text-right-mobile">
              <div v-for="(item, i) in countryData.borders" :key="`item-${i}`">
                {{ item }}
              </div>
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.cioc">
            <h4 class="column is-4 is-half-mobile">Cioc:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.cioc }}
            </div>
          </div>

          <div class="columns is-mobile" v-show="countryData.gini">
            <h4 class="column is-4 is-half-mobile">Gini:</h4>
            <div class="column has-text-right-mobile">
              {{ countryData.gini }}
            </div>
          </div>
        </div>
      </div>

      <button
        class="modal-close is-large"
        @click="close"
        aria-label="close"
      ></button>
    </div>
  </transition>
</template> 

<script>
export default {
  name: "CountryModal",
  props: ["countryData"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modal {
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 20px 1px;
  margin: auto;
  width: fit-content;
  max-width: 90vw;
  height: fit-content;
  max-height: 80vh;
  overflow: hidden;
}
.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

.modal-card {
  overflow-y: auto;
  overflow-x: hidden;
  background-color: bisque;
}

/* ---------------------------------- */

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>