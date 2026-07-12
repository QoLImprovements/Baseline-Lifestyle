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
  "id": "usda-sr-legacy-168943",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sorghum flour, whole-grain",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 76.6,
    "energy_kcal": 359.0,
    "fat_g": 3.34,
    "fibre_g": 6.6,
    "folate_ug": 25.0,
    "iron_mg": 3.14,
    "magnesium_mg": 123.0,
    "omega3_g": 0.062,
    "phosphorus_mg": 278.0,
    "potassium_mg": 324.0,
    "protein_g": 8.43,
    "salt_g": 0.0075,
    "sat_fat_g": 0.528,
    "sodium_mg": 3.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168943",
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
