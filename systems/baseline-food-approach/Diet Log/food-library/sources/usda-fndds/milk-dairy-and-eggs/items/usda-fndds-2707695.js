/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-medium-stick",
      "kind": "unit",
      "label": "1 medium stick"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-crazy-bread-stick",
      "kind": "unit",
      "label": "1 \"Crazy Bread\" stick"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-stick",
      "kind": "unit",
      "label": "1 small stick"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-focaccia-slice",
      "kind": "unit",
      "label": "1 focaccia slice"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-garlic-knot",
      "kind": "unit",
      "label": "1 garlic knot"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "1-large-stick",
      "kind": "unit",
      "label": "1 large stick"
    }
  ],
  "name": "Breadsticks, soft, with parmesan cheese, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 43.8,
    "energy_kcal": 344.0,
    "fat_g": 13.2,
    "fibre_g": 2.3,
    "folate_ug": 144.0,
    "iron_mg": 4.56,
    "magnesium_mg": 22.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 139.0,
    "potassium_mg": 133.0,
    "protein_g": 12.5,
    "salt_g": 1.5925,
    "sat_fat_g": 3.2,
    "sodium_mg": 637.0,
    "sugar_g": 1.09,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 20.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707695",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "milk-dairy-and-eggs",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
