/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg, creamed",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 5.52,
    "energy_kcal": 148.0,
    "fat_g": 10.4,
    "fibre_g": 0.1,
    "folate_ug": 24.0,
    "iron_mg": 0.72,
    "magnesium_mg": 12.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 135.0,
    "potassium_mg": 143.0,
    "protein_g": 7.79,
    "salt_g": 0.9075,
    "sat_fat_g": 4.02,
    "sodium_mg": 363.0,
    "sugar_g": 3.02,
    "vitamin_a_ug": 143.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707179",
  "state": "Unspecified",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
