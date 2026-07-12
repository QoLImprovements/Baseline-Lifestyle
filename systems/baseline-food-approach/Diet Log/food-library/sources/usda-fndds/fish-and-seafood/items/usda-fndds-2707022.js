/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-submarine",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
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
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    }
  ],
  "name": "Crab cake sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 19.4,
    "energy_kcal": 231.0,
    "fat_g": 11.2,
    "fibre_g": 1.0,
    "folate_ug": 68.0,
    "iron_mg": 1.66,
    "magnesium_mg": 28.0,
    "omega3_g": 0.082,
    "phosphorus_mg": 166.0,
    "potassium_mg": 180.0,
    "protein_g": 12.7,
    "salt_g": 1.09,
    "sat_fat_g": 1.92,
    "sodium_mg": 436.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707022",
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
