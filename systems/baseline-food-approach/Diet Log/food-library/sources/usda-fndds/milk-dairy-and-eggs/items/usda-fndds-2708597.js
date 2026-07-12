/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-full-circle",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2708597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-full-circle",
      "kind": "unit",
      "label": "1 full circle"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-triangular-piece",
      "kind": "unit",
      "label": "1 triangular piece"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-half-circle",
      "kind": "unit",
      "label": "1 half circle"
    }
  ],
  "name": "Quesadilla, egg",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 20.1,
    "energy_kcal": 249.0,
    "fat_g": 13.7,
    "fibre_g": 1.4,
    "folate_ug": 64.0,
    "iron_mg": 2.28,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 215.0,
    "potassium_mg": 126.0,
    "protein_g": 10.9,
    "salt_g": 1.175,
    "sat_fat_g": 4.43,
    "sodium_mg": 470.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708597",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
