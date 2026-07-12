/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-garlic-knot",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-garlic-knot",
      "kind": "unit",
      "label": "1 garlic knot"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-small-stick",
      "kind": "unit",
      "label": "1 small stick"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-medium-stick",
      "kind": "unit",
      "label": "1 medium stick"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-large-stick",
      "kind": "unit",
      "label": "1 large stick"
    }
  ],
  "name": "Breadsticks, soft, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 44.4,
    "energy_kcal": 342.0,
    "fat_g": 12.8,
    "fibre_g": 2.4,
    "folate_ug": 147.0,
    "iron_mg": 4.64,
    "magnesium_mg": 22.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 129.0,
    "potassium_mg": 132.0,
    "protein_g": 12.2,
    "salt_g": 1.5375,
    "sat_fat_g": 2.96,
    "sodium_mg": 615.0,
    "sugar_g": 1.11,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 21.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707693",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "other-foods",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
