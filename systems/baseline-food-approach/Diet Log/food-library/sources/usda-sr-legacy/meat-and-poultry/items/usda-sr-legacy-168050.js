/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168050",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Caribou, hind quarter meat, raw (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 508.0,
    "fat_g": 3.37,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 4.1,
    "magnesium_mg": 26.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 230.0,
    "potassium_mg": 320.0,
    "protein_g": 22.6,
    "salt_g": 0.13,
    "sat_fat_g": 1.27,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168050",
  "state": "Raw",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
