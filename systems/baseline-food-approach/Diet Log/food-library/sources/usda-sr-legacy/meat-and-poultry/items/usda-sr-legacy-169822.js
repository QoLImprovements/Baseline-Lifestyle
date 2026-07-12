/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Caribou, hind quarter, meat, cooked (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 664.0,
    "fat_g": 4.82,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 4.8,
    "magnesium_mg": 24.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 215.0,
    "potassium_mg": 245.0,
    "protein_g": 28.8,
    "salt_g": 0.1125,
    "sat_fat_g": 1.88,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169822",
  "state": "Cooked",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
