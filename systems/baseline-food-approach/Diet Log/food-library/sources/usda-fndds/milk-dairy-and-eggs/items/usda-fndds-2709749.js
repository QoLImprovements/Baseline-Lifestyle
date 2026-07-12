/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Pasta sauces, tomato-based",
  "id": "usda-fndds-2709749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vodka sauce with tomatoes and cream",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 3.56,
    "energy_kcal": 75.0,
    "fat_g": 6.57,
    "fibre_g": 1.3,
    "folate_ug": 6.0,
    "iron_mg": 0.58,
    "magnesium_mg": 10.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 25.0,
    "potassium_mg": 190.0,
    "protein_g": 1.15,
    "salt_g": 0.6175,
    "sat_fat_g": 3.02,
    "sodium_mg": 247.0,
    "sugar_g": 2.49,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709749",
  "state": "Unspecified",
  "subcategory": "Pasta sauces, tomato-based",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-sauces-tomato-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
