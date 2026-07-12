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
  "id": "usda-sr-legacy-168593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Seeds, sunflower seed kernels, oil roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 22.9,
    "energy_kcal": 2480.0,
    "fat_g": 51.3,
    "fibre_g": 10.6,
    "folate_ug": 234.0,
    "iron_mg": 4.28,
    "magnesium_mg": 127.0,
    "omega3_g": 0.076,
    "phosphorus_mg": 1140.0,
    "potassium_mg": 483.0,
    "protein_g": 20.1,
    "salt_g": 0.7575,
    "sat_fat_g": 7.07,
    "sodium_mg": 303.0,
    "sugar_g": 3.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 36.3,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168593",
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
