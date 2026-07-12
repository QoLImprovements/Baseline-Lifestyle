/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-roll",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707660",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "1-roll",
      "kind": "unit",
      "label": "1 roll"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Roll, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 204.0,
    "carbs_g": 49.6,
    "energy_kcal": 315.0,
    "fat_g": 7.85,
    "fibre_g": 1.9,
    "folate_ug": 97.0,
    "iron_mg": 3.54,
    "magnesium_mg": 26.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 139.0,
    "potassium_mg": 136.0,
    "protein_g": 11.5,
    "salt_g": 1.19,
    "sat_fat_g": 2.27,
    "sodium_mg": 476.0,
    "sugar_g": 5.29,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707660",
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
