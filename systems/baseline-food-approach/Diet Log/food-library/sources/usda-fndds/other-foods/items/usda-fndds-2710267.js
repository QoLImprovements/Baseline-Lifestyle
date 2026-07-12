/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "guideline-amount-per-fl-oz-of-beverage",
  "description": "Sugar substitutes",
  "id": "usda-fndds-2710267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.13,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 0.1,
      "key": "1-tablet",
      "kind": "unit",
      "label": "1 tablet"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-teaspoon",
      "kind": "unit",
      "label": "1 teaspoon"
    },
    {
      "gramsPerUnit": 0.8,
      "key": "1-individual-packet",
      "kind": "unit",
      "label": "1 individual packet"
    },
    {
      "gramsPerUnit": 0.8,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sugar substitute, powder, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 90.1,
    "energy_kcal": 349.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 4.0,
    "protein_g": 0.66,
    "salt_g": 0.375,
    "sat_fat_g": 0.0,
    "sodium_mg": 150.0,
    "sugar_g": 82.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710267",
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
