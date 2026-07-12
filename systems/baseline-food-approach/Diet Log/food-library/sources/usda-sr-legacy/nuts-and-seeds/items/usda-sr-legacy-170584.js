/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170584",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, ginkgo nuts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 37.6,
    "energy_kcal": 761.0,
    "fat_g": 1.68,
    "fibre_g": 0.0,
    "folate_ug": 54.0,
    "iron_mg": 1.0,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 510.0,
    "protein_g": 4.32,
    "salt_g": 0.0175,
    "sat_fat_g": 0.319,
    "sodium_mg": 7.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170584",
  "state": "Raw",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
