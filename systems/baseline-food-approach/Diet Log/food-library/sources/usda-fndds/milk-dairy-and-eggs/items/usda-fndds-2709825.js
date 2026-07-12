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
  "id": "usda-fndds-2709825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lettuce, salad with cheese, tomato and/or carrots, with or without other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 4.2,
    "energy_kcal": 91.0,
    "fat_g": 6.08,
    "fibre_g": 1.2,
    "folate_ug": 36.0,
    "iron_mg": 0.28,
    "magnesium_mg": 21.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 102.0,
    "potassium_mg": 238.0,
    "protein_g": 4.94,
    "salt_g": 0.365,
    "sat_fat_g": 3.37,
    "sodium_mg": 146.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 253.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 73.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709825",
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
