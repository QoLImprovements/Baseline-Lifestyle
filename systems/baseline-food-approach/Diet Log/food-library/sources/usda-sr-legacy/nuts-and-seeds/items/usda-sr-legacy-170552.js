/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-8-14-seeds",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170552",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-8-14-seeds",
      "kind": "unit",
      "label": "oz (8-14 seeds)"
    }
  ],
  "name": "Seeds, breadnut tree seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 46.3,
    "energy_kcal": 908.0,
    "fat_g": 0.99,
    "fibre_g": 0.0,
    "folate_ug": 66.0,
    "iron_mg": 2.09,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 1180.0,
    "protein_g": 5.97,
    "salt_g": 0.0775,
    "sat_fat_g": 0.267,
    "sodium_mg": 31.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 27.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170552",
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
