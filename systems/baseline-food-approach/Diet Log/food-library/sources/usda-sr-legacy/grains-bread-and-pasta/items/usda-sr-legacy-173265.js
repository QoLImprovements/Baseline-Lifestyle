/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-spaghetti",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-173265",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "cup-spaghetti",
      "kind": "unit",
      "label": "cup spaghetti"
    }
  ],
  "name": "Pasta, gluten-free, corn and rice flour, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 38.0,
    "energy_kcal": 748.0,
    "fat_g": 1.0,
    "fibre_g": 1.4,
    "folate_ug": 4.0,
    "iron_mg": 0.22,
    "magnesium_mg": 11.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 33.0,
    "potassium_mg": 24.0,
    "protein_g": 3.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.15,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173265",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
