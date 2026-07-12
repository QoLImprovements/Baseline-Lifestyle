/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-regular-sandwich",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707023",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Salmon cake sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 19.4,
    "energy_kcal": 279.0,
    "fat_g": 15.9,
    "fibre_g": 1.0,
    "folate_ug": 55.0,
    "iron_mg": 1.59,
    "magnesium_mg": 24.0,
    "omega3_g": 0.883,
    "phosphorus_mg": 170.0,
    "potassium_mg": 227.0,
    "protein_g": 13.9,
    "salt_g": 1.0475,
    "sat_fat_g": 2.97,
    "sodium_mg": 419.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707023",
  "state": "Unspecified",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "seafood-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
