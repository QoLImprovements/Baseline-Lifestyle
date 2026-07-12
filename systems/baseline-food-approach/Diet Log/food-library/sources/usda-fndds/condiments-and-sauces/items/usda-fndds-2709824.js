/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709824",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lettuce, salad with avocado, tomato, and/or carrots, with or without other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 5.5,
    "energy_kcal": 54.0,
    "fat_g": 3.39,
    "fibre_g": 2.7,
    "folate_ug": 49.0,
    "iron_mg": 0.37,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 322.0,
    "protein_g": 1.29,
    "salt_g": 0.0825,
    "sat_fat_g": 0.496,
    "sodium_mg": 33.0,
    "sugar_g": 1.64,
    "vitamin_a_ug": 195.0,
    "vitamin_c_mg": 9.9,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 75.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709824",
  "state": "Unspecified",
  "subcategory": "Lettuce and lettuce salads",
  "tags": [
    "condiments-and-sauces",
    "lettuce-and-lettuce-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
