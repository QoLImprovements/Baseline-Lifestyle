/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tbsp",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170189",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Seeds, sesame butter, tahini, from roasted and toasted kernels (most common type)",
  "nutritionPerBasis": {
    "calcium_mg": 426.0,
    "carbs_g": 21.2,
    "energy_kcal": 2490.0,
    "fat_g": 53.8,
    "fibre_g": 9.3,
    "folate_ug": 98.0,
    "iron_mg": 8.95,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 732.0,
    "potassium_mg": 414.0,
    "protein_g": 17.0,
    "salt_g": 0.2875,
    "sat_fat_g": 7.53,
    "sodium_mg": 115.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170189",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
