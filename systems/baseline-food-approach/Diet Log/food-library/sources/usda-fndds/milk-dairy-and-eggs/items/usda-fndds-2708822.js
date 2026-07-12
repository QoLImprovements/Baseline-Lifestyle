/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or noodles with cheese and egg",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 19.0,
    "energy_kcal": 185.0,
    "fat_g": 9.52,
    "fibre_g": 0.8,
    "folate_ug": 44.0,
    "iron_mg": 0.81,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 112.0,
    "potassium_mg": 62.0,
    "protein_g": 5.91,
    "salt_g": 0.44,
    "sat_fat_g": 3.38,
    "sodium_mg": 176.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708822",
  "state": "Unspecified",
  "subcategory": "Macaroni and cheese",
  "tags": [
    "macaroni-and-cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
