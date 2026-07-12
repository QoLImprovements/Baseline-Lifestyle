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
  "id": "usda-sr-legacy-169697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cornmeal, whole-grain, yellow",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 76.9,
    "energy_kcal": 1520.0,
    "fat_g": 3.59,
    "fibre_g": 7.3,
    "folate_ug": 25.0,
    "iron_mg": 3.45,
    "magnesium_mg": 127.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 241.0,
    "potassium_mg": 287.0,
    "protein_g": 8.12,
    "salt_g": 0.0875,
    "sat_fat_g": 0.505,
    "sodium_mg": 35.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169697",
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
