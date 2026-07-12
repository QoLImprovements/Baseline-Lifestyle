/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-tablet-1-2-grain",
  "description": "Sugar substitutes",
  "id": "usda-fndds-2710269",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.02,
      "key": "1-tablet-1-2-grain",
      "kind": "unit",
      "label": "1 tablet (1/2 grain)"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-individual-packet",
      "kind": "unit",
      "label": "1 individual packet"
    },
    {
      "gramsPerUnit": 3.3,
      "key": "1-teaspoon",
      "kind": "unit",
      "label": "1 teaspoon"
    },
    {
      "gramsPerUnit": 0.17,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sugar substitute, saccharin, powder",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 89.1,
    "energy_kcal": 360.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 4.0,
    "protein_g": 0.94,
    "salt_g": 1.07,
    "sat_fat_g": 0.0,
    "sodium_mg": 428.0,
    "sugar_g": 85.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710269",
  "state": "Unspecified",
  "subcategory": "Sugar substitutes",
  "tags": [
    "other-foods",
    "sugar-substitutes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
