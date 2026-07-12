/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709413",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-new-potato",
      "kind": "unit",
      "label": "1 new potato"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-baby-potato",
      "kind": "unit",
      "label": "1 baby potato"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Potato, roasted, from fresh, peel not eaten, made with butter",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 20.4,
    "energy_kcal": 123.0,
    "fat_g": 3.99,
    "fibre_g": 1.4,
    "folate_ug": 9.0,
    "iron_mg": 0.34,
    "magnesium_mg": 24.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 48.0,
    "potassium_mg": 372.0,
    "protein_g": 1.9,
    "salt_g": 0.44,
    "sat_fat_g": 2.19,
    "sodium_mg": 176.0,
    "sugar_g": 1.64,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 12.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709413",
  "state": "Roasted",
  "subcategory": "White potatoes, baked or boiled",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "roasted",
    "white-potatoes-baked-or-boiled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
