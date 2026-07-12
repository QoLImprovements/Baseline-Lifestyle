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
  "id": "usda-sr-legacy-173264",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "cup-spaghetti",
      "kind": "unit",
      "label": "cup spaghetti"
    }
  ],
  "name": "Pasta, gluten-free, rice flour and rice bran extract, cooked, DE BOLES",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 40.8,
    "energy_kcal": 200.0,
    "fat_g": 1.7,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.62,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 55.0,
    "protein_g": 4.21,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173264",
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
