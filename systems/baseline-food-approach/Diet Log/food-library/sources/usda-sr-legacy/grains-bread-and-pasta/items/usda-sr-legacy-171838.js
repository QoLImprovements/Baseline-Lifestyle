/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "4-crackers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "4-crackers",
      "kind": "unit",
      "label": "4 crackers"
    }
  ],
  "name": "Crackers, multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 67.6,
    "energy_kcal": 2020.0,
    "fat_g": 20.4,
    "fibre_g": 3.5,
    "folate_ug": 103.0,
    "iron_mg": 2.59,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 292.0,
    "potassium_mg": 171.0,
    "protein_g": 7.1,
    "salt_g": 2.2075,
    "sat_fat_g": 3.3,
    "sodium_mg": 883.0,
    "sugar_g": 12.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 36.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171838",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
