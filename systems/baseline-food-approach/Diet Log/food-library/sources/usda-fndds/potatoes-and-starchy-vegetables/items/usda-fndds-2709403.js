/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-baby-potato",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709403",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-baby-potato",
      "kind": "unit",
      "label": "1 baby potato"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
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
    }
  ],
  "name": "Potato, roasted, from fresh, peel eaten, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 20.1,
    "energy_kcal": 126.0,
    "fat_g": 4.28,
    "fibre_g": 2.1,
    "folate_ug": 27.0,
    "iron_mg": 1.03,
    "magnesium_mg": 27.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 67.0,
    "potassium_mg": 508.0,
    "protein_g": 2.39,
    "salt_g": 0.425,
    "sat_fat_g": 1.12,
    "sodium_mg": 170.0,
    "sugar_g": 1.13,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709403",
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
