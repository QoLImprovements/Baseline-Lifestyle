/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "4-5-oz",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-169729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "4-5-oz",
      "kind": "unit",
      "label": "4.5 oz"
    }
  ],
  "name": "Pasta, fresh-refrigerated, spinach, as purchased",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 55.7,
    "energy_kcal": 1210.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 177.0,
    "iron_mg": 3.3,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 272.0,
    "protein_g": 11.3,
    "salt_g": 0.0675,
    "sat_fat_g": 0.483,
    "sodium_mg": 27.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169729",
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
