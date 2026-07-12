/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup-unsifted-dipped",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-169723",
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
  "name": "Wheat flour, white, cake, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 78.0,
    "energy_kcal": 362.0,
    "fat_g": 0.86,
    "fibre_g": 1.7,
    "folate_ug": 186.0,
    "iron_mg": 7.32,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 105.0,
    "protein_g": 8.2,
    "salt_g": 0.005,
    "sat_fat_g": 0.127,
    "sodium_mg": 2.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169723",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
