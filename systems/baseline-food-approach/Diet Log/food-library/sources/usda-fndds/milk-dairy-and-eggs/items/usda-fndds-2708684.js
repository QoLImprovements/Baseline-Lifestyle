/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pizza",
  "id": "usda-fndds-2708684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 424.0,
      "key": "1-calzone-or-stromboli",
      "kind": "unit",
      "label": "1 calzone or stromboli"
    }
  ],
  "name": "Calzone, with cheese, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 390.0,
    "carbs_g": 29.5,
    "energy_kcal": 389.0,
    "fat_g": 22.5,
    "fibre_g": 1.3,
    "folate_ug": 69.0,
    "iron_mg": 2.12,
    "magnesium_mg": 26.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 313.0,
    "potassium_mg": 135.0,
    "protein_g": 17.6,
    "salt_g": 1.68,
    "sat_fat_g": 9.55,
    "sodium_mg": 672.0,
    "sugar_g": 0.36,
    "vitamin_a_ug": 187.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708684",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "milk-dairy-and-eggs",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
