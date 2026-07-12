/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-unsifted-dipped",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168913",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup-unsifted-dipped",
      "kind": "unit",
      "label": "cup unsifted, dipped"
    }
  ],
  "name": "Wheat flours, bread, unenriched",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 72.5,
    "energy_kcal": 1510.0,
    "fat_g": 1.66,
    "fibre_g": 2.4,
    "folate_ug": 33.0,
    "iron_mg": 0.9,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 100.0,
    "protein_g": 12.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.244,
    "sodium_mg": 2.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168913",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
