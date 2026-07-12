/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-piece-4-x-2-x-1-3-4",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707828",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-piece-4-x-2-x-1-3-4",
      "kind": "unit",
      "label": "1 piece (4\" x 2\" x 1-3/4\")"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Arepa Dominicana",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 30.5,
    "energy_kcal": 267.0,
    "fat_g": 14.0,
    "fibre_g": 2.4,
    "folate_ug": 60.0,
    "iron_mg": 2.31,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 132.0,
    "potassium_mg": 202.0,
    "protein_g": 5.66,
    "salt_g": 0.9975,
    "sat_fat_g": 9.08,
    "sodium_mg": 399.0,
    "sugar_g": 3.25,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707828",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
