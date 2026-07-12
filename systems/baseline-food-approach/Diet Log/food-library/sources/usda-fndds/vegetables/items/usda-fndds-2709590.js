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
  "id": "usda-fndds-2709590",
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
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "guideline-amount-in-salad",
      "kind": "unit",
      "label": "Guideline amount in salad"
    },
    {
      "gramsPerUnit": 376.0,
      "key": "1-head",
      "kind": "unit",
      "label": "1 head"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    }
  ],
  "name": "Romaine lettuce, raw",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 4.06,
    "energy_kcal": 21.0,
    "fat_g": 0.07,
    "fibre_g": 1.8,
    "folate_ug": 50.0,
    "iron_mg": 0.27,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 260.0,
    "protein_g": 0.98,
    "salt_g": 0.0575,
    "sat_fat_g": 0.039,
    "sodium_mg": 23.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 436.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 83.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709590",
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
