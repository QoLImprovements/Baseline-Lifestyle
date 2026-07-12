/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-cup",
  "description": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "id": "usda-fndds-2708450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    }
  ],
  "name": "Cereal, cinnamon toast",
  "nutritionPerBasis": {
    "calcium_mg": 327.0,
    "carbs_g": 75.2,
    "energy_kcal": 414.0,
    "fat_g": 9.92,
    "fibre_g": 5.1,
    "folate_ug": 131.0,
    "iron_mg": 9.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 71.0,
    "protein_g": 5.88,
    "salt_g": 1.3475,
    "sat_fat_g": 0.739,
    "sodium_mg": 539.0,
    "sugar_g": 29.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 22.8,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708450",
  "state": "Unspecified",
  "subcategory": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "tags": [
    "herbs-spices-and-seasonings",
    "ready-to-eat-cereal-higher-sugar-21-2g-100g",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
