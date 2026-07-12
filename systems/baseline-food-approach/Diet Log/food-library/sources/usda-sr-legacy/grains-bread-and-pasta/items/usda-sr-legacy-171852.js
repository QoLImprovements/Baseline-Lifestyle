/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece-bagel",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171852",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "piece-bagel",
      "kind": "unit",
      "label": "piece bagel"
    }
  ],
  "name": "Bagels, multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 47.5,
    "energy_kcal": 1010.0,
    "fat_g": 1.24,
    "fibre_g": 6.2,
    "folate_ug": 81.0,
    "iron_mg": 2.23,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 204.0,
    "protein_g": 9.9,
    "salt_g": 0.8975,
    "sat_fat_g": 0.0,
    "sodium_mg": 359.0,
    "sugar_g": 8.66,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171852",
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
