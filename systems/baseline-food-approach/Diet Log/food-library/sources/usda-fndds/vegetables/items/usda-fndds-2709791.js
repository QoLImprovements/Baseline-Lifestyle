/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-leaf",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "guideline-amount-in-salad",
      "kind": "unit",
      "label": "Guideline amount in salad"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lettuce, arugula, raw",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 3.65,
    "energy_kcal": 25.0,
    "fat_g": 0.66,
    "fibre_g": 1.6,
    "folate_ug": 97.0,
    "iron_mg": 1.46,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 369.0,
    "protein_g": 2.58,
    "salt_g": 0.0675,
    "sat_fat_g": 0.086,
    "sodium_mg": 27.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 109.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709791",
  "state": "Raw",
  "subcategory": "Lettuce and lettuce salads",
  "tags": [
    "lettuce-and-lettuce-salads",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
