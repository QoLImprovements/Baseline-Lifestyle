/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-popcorn-chicken",
  "description": "Chicken patties, nuggets and tenders",
  "id": "usda-fndds-2706101",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-popcorn-chicken",
      "kind": "unit",
      "label": "1 popcorn chicken"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-strip",
      "kind": "unit",
      "label": "1 strip"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-tender-or-finger",
      "kind": "unit",
      "label": "1 tender or finger"
    }
  ],
  "name": "Chicken tenders or strips, breaded, from school lunch",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 22.9,
    "energy_kcal": 270.0,
    "fat_g": 12.9,
    "fibre_g": 2.2,
    "folate_ug": 11.0,
    "iron_mg": 1.99,
    "magnesium_mg": 24.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 183.0,
    "potassium_mg": 231.0,
    "protein_g": 15.7,
    "salt_g": 1.2775,
    "sat_fat_g": 2.83,
    "sodium_mg": 511.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706101",
  "state": "Unspecified",
  "subcategory": "Chicken patties, nuggets and tenders",
  "tags": [
    "chicken-patties-nuggets-and-tenders",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
