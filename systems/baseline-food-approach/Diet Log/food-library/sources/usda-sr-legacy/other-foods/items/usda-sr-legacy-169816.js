/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "pad-peeled",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "pad-peeled",
      "kind": "unit",
      "label": "pad peeled"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "pad",
      "kind": "unit",
      "label": "pad"
    }
  ],
  "name": "Prickly pears, raw (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 10.2,
    "energy_kcal": 176.0,
    "fat_g": 0.11,
    "fibre_g": 5.3,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 130.0,
    "protein_g": 0.12,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 1.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169816",
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
