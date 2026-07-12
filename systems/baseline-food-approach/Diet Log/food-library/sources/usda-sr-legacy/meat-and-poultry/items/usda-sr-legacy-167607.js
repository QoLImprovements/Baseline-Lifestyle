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
  "id": "usda-sr-legacy-167607",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Moose, meat, raw (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 103.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.28,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 317.0,
    "protein_g": 22.3,
    "salt_g": 0.1625,
    "sat_fat_g": 0.22,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167607",
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
