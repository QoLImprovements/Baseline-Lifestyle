/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cheeseburger",
  "description": "Burgers",
  "id": "usda-fndds-2706893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheeseburger, from school cafeteria",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 23.4,
    "energy_kcal": 250.0,
    "fat_g": 8.64,
    "fibre_g": 2.7,
    "folate_ug": 42.0,
    "iron_mg": 2.68,
    "magnesium_mg": 40.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 215.0,
    "potassium_mg": 233.0,
    "protein_g": 18.7,
    "salt_g": 0.7825,
    "sat_fat_g": 3.42,
    "sodium_mg": 313.0,
    "sugar_g": 2.68,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706893",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
