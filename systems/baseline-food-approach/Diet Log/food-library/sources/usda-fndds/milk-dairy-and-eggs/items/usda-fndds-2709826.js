/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709826",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lettuce, salad with egg, tomato, and/or carrots, with or without other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 3.88,
    "energy_kcal": 50.0,
    "fat_g": 2.31,
    "fibre_g": 1.2,
    "folate_ug": 40.0,
    "iron_mg": 0.48,
    "magnesium_mg": 17.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 56.0,
    "potassium_mg": 242.0,
    "protein_g": 3.4,
    "salt_g": 0.14,
    "sat_fat_g": 0.688,
    "sodium_mg": 56.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 221.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 70.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709826",
  "state": "Unspecified",
  "subcategory": "Lettuce and lettuce salads",
  "tags": [
    "lettuce-and-lettuce-salads",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
