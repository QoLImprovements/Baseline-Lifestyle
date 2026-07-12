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
  "id": "usda-fndds-2709790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "guideline-amount-in-salad",
      "kind": "unit",
      "label": "Guideline amount in salad"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "1-head",
      "kind": "unit",
      "label": "1 head"
    }
  ],
  "name": "Lettuce, Boston, raw",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 3.26,
    "energy_kcal": 18.0,
    "fat_g": 0.11,
    "fibre_g": 0.9,
    "folate_ug": 36.0,
    "iron_mg": 0.4,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 321.0,
    "protein_g": 0.88,
    "salt_g": 0.0625,
    "sat_fat_g": 0.028,
    "sodium_mg": 25.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 375.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 73.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709790",
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
