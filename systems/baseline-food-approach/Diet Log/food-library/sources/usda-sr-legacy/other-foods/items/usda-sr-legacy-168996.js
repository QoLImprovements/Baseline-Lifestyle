/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bulb",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168996",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "bulb",
      "kind": "unit",
      "label": "bulb"
    }
  ],
  "name": "Prairie Turnips, boiled (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 30.0,
    "energy_kcal": 129.0,
    "fat_g": 0.32,
    "fibre_g": 7.2,
    "folate_ug": 0.0,
    "iron_mg": 0.95,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 108.0,
    "protein_g": 1.64,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 4.74,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168996",
  "state": "Boiled",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "boiled",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
