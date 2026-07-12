/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bulb-peeled",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.6,
      "key": "bulb-peeled",
      "kind": "unit",
      "label": "bulb peeled"
    }
  ],
  "name": "Prairie Turnips, raw (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 35.7,
    "energy_kcal": 654.0,
    "fat_g": 0.36,
    "fibre_g": 8.0,
    "folate_ug": 10.0,
    "iron_mg": 1.27,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 156.0,
    "protein_g": 2.62,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 0.82,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169818",
  "state": "Raw",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
