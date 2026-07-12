/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken patties, nuggets and tenders",
  "id": "usda-fndds-2706099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-chicken-fry",
      "kind": "unit",
      "label": "1 chicken fry"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-popcorn-chicken",
      "kind": "unit",
      "label": "1 popcorn chicken"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-tender-strip-or-finger",
      "kind": "unit",
      "label": "1 tender, strip, or finger"
    }
  ],
  "name": "Chicken tenders or strips, breaded, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 17.2,
    "energy_kcal": 271.0,
    "fat_g": 14.0,
    "fibre_g": 1.2,
    "folate_ug": 19.0,
    "iron_mg": 0.73,
    "magnesium_mg": 28.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 282.0,
    "potassium_mg": 373.0,
    "protein_g": 19.2,
    "salt_g": 1.9225,
    "sat_fat_g": 2.49,
    "sodium_mg": 769.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 3.17,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706099",
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
