/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-15-kernels",
      "kind": "unit",
      "label": "oz (15 kernels)"
    }
  ],
  "name": "Nuts, pilinuts, dried",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 3.98,
    "energy_kcal": 3010.0,
    "fat_g": 79.6,
    "fibre_g": 0.0,
    "folate_ug": 60.0,
    "iron_mg": 3.53,
    "magnesium_mg": 302.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 575.0,
    "potassium_mg": 507.0,
    "protein_g": 10.8,
    "salt_g": 0.0075,
    "sat_fat_g": 31.2,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170590",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
