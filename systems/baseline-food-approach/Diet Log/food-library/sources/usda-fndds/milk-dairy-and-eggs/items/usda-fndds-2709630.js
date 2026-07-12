/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach and cheese casserole",
  "nutritionPerBasis": {
    "calcium_mg": 235.0,
    "carbs_g": 9.86,
    "energy_kcal": 130.0,
    "fat_g": 7.59,
    "fibre_g": 2.8,
    "folate_ug": 71.0,
    "iron_mg": 1.74,
    "magnesium_mg": 62.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 127.0,
    "potassium_mg": 247.0,
    "protein_g": 7.05,
    "salt_g": 0.7775,
    "sat_fat_g": 3.86,
    "sodium_mg": 311.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 427.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 355.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709630",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
