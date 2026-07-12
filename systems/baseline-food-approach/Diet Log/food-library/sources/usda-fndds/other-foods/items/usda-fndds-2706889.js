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
  "id": "usda-fndds-2706889",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheeseburger, from fast food, 1 small patty",
  "nutritionPerBasis": {
    "calcium_mg": 237.0,
    "carbs_g": 24.0,
    "energy_kcal": 299.0,
    "fat_g": 14.8,
    "fibre_g": 0.8,
    "folate_ug": 53.0,
    "iron_mg": 2.51,
    "magnesium_mg": 23.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 215.0,
    "potassium_mg": 192.0,
    "protein_g": 16.4,
    "salt_g": 1.275,
    "sat_fat_g": 6.53,
    "sodium_mg": 510.0,
    "sugar_g": 3.86,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706889",
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
