/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-triangular-piece",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2708598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
    }
  ],
  "name": "Quesadilla, egg, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 19.1,
    "energy_kcal": 249.0,
    "fat_g": 13.9,
    "fibre_g": 1.3,
    "folate_ug": 61.0,
    "iron_mg": 2.22,
    "magnesium_mg": 17.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 217.0,
    "potassium_mg": 139.0,
    "protein_g": 11.4,
    "salt_g": 1.26,
    "sat_fat_g": 4.5,
    "sodium_mg": 504.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708598",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
