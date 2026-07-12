/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
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
  "name": "Seeds, pumpkin and squash seed kernels, dried",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 10.7,
    "energy_kcal": 559.0,
    "fat_g": 49.0,
    "fibre_g": 6.0,
    "folate_ug": 58.0,
    "iron_mg": 8.82,
    "magnesium_mg": 592.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 1230.0,
    "potassium_mg": 809.0,
    "protein_g": 30.2,
    "salt_g": 0.0175,
    "sat_fat_g": 8.66,
    "sodium_mg": 7.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170556",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
