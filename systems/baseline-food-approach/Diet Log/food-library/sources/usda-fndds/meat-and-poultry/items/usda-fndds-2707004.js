/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-slider",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707004",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    }
  ],
  "name": "Chicken fillet sandwich, fried, from fast food, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 24.7,
    "energy_kcal": 291.0,
    "fat_g": 15.3,
    "fibre_g": 1.5,
    "folate_ug": 47.0,
    "iron_mg": 1.61,
    "magnesium_mg": 26.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 208.0,
    "potassium_mg": 202.0,
    "protein_g": 13.2,
    "salt_g": 1.565,
    "sat_fat_g": 4.74,
    "sodium_mg": 626.0,
    "sugar_g": 3.03,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 16.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707004",
  "state": "Fried",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
