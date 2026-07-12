/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "8-oz",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169006",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "8-oz",
      "kind": "unit",
      "label": "8 oz"
    }
  ],
  "name": "Stew, pinto bean and hominy, badufsuki (Hopi)",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 5.38,
    "energy_kcal": 134.0,
    "fat_g": 0.54,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 0.37,
    "magnesium_mg": 11.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 25.0,
    "potassium_mg": 86.0,
    "protein_g": 1.42,
    "salt_g": 0.1125,
    "sat_fat_g": 0.085,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169006",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
