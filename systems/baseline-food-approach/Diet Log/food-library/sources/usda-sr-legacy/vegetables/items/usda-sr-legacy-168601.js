/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "oz-85-seeds",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168601",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-85-seeds",
      "kind": "unit",
      "label": "oz (85 seeds)"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Seeds, pumpkin and squash seeds, whole, roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 53.8,
    "energy_kcal": 1870.0,
    "fat_g": 19.4,
    "fibre_g": 18.4,
    "folate_ug": 9.0,
    "iron_mg": 3.31,
    "magnesium_mg": 262.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 919.0,
    "protein_g": 18.6,
    "salt_g": 6.35,
    "sat_fat_g": 3.67,
    "sodium_mg": 2540.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168601",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "roasted",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
