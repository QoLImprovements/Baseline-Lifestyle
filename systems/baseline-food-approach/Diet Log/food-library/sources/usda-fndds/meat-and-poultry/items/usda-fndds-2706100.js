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
  "id": "usda-fndds-2706100",
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
      "gramsPerUnit": 100.0,
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
      "gramsPerUnit": 50.0,
      "key": "1-tender-strip-or-finger",
      "kind": "unit",
      "label": "1 tender, strip, or finger"
    }
  ],
  "name": "Chicken tenders or strips, breaded, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 16.9,
    "energy_kcal": 283.0,
    "fat_g": 15.6,
    "fibre_g": 1.2,
    "folate_ug": 19.0,
    "iron_mg": 0.72,
    "magnesium_mg": 27.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 276.0,
    "potassium_mg": 365.0,
    "protein_g": 18.8,
    "salt_g": 1.9775,
    "sat_fat_g": 3.02,
    "sodium_mg": 791.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 3.16,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706100",
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
