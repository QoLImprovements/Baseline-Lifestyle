/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-169743",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Wheat, khorasan, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 70.6,
    "energy_kcal": 337.0,
    "fat_g": 2.13,
    "fibre_g": 11.1,
    "folate_ug": 0.0,
    "iron_mg": 3.77,
    "magnesium_mg": 130.0,
    "omega3_g": 0.048,
    "phosphorus_mg": 364.0,
    "potassium_mg": 403.0,
    "protein_g": 14.5,
    "salt_g": 0.0125,
    "sat_fat_g": 0.196,
    "sodium_mg": 5.0,
    "sugar_g": 7.84,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169743",
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
