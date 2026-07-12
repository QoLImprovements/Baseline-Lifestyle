/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "10-seeds",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170025",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "10-seeds",
      "kind": "unit",
      "label": "10 seeds"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pigeonpeas, immature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 23.9,
    "energy_kcal": 569.0,
    "fat_g": 1.64,
    "fibre_g": 5.1,
    "folate_ug": 173.0,
    "iron_mg": 1.6,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 552.0,
    "protein_g": 7.2,
    "salt_g": 0.0125,
    "sat_fat_g": 0.354,
    "sodium_mg": 5.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 39.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 24.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170025",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
