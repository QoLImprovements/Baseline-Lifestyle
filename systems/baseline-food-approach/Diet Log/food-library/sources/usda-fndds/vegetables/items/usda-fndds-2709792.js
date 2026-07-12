/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "guideline-amount-in-salad",
      "kind": "unit",
      "label": "Guideline amount in salad"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Mixed salad greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.43,
    "energy_kcal": 21.0,
    "fat_g": 0.21,
    "fibre_g": 1.4,
    "folate_ug": 54.0,
    "iron_mg": 0.46,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 316.0,
    "protein_g": 1.31,
    "salt_g": 0.1025,
    "sat_fat_g": 0.034,
    "sodium_mg": 41.0,
    "sugar_g": 0.97,
    "vitamin_a_ug": 298.0,
    "vitamin_c_mg": 11.7,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 156.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709792",
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
