/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "eggplant-unpeeled-approx-1-1-4-lb",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169228",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 548.0,
      "key": "eggplant-unpeeled-approx-1-1-4-lb",
      "kind": "unit",
      "label": "eggplant, unpeeled (approx 1-1/4 lb)"
    },
    {
      "gramsPerUnit": 458.0,
      "key": "eggplant-peeled-yield-from-1-1-4-lb",
      "kind": "unit",
      "label": "eggplant, peeled (yield from 1-1/4 lb)"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Eggplant, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.88,
    "energy_kcal": 25.0,
    "fat_g": 0.18,
    "fibre_g": 3.0,
    "folate_ug": 22.0,
    "iron_mg": 0.23,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 229.0,
    "protein_g": 0.98,
    "salt_g": 0.005,
    "sat_fat_g": 0.034,
    "sodium_mg": 2.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169228",
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
