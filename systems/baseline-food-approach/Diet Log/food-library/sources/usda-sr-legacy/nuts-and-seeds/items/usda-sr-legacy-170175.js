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
  "id": "usda-sr-legacy-170175",
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
  "name": "Nuts, ginkgo nuts, dried",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 72.4,
    "energy_kcal": 1460.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 106.0,
    "iron_mg": 1.6,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 269.0,
    "potassium_mg": 998.0,
    "protein_g": 10.4,
    "salt_g": 0.0325,
    "sat_fat_g": 0.381,
    "sodium_mg": 13.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 29.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170175",
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
