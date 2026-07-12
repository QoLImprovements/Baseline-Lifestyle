/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-tender-or-finger",
  "description": "Chicken patties, nuggets and tenders",
  "id": "usda-fndds-2706102",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-tender-or-finger",
      "kind": "unit",
      "label": "1 tender or finger"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-strip",
      "kind": "unit",
      "label": "1 strip"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-popcorn-chicken",
      "kind": "unit",
      "label": "1 popcorn chicken"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-chicken-fry",
      "kind": "unit",
      "label": "1 chicken fry"
    }
  ],
  "name": "Chicken tenders or strips, breaded, from frozen",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 14.9,
    "energy_kcal": 240.0,
    "fat_g": 13.6,
    "fibre_g": 1.7,
    "folate_ug": 28.0,
    "iron_mg": 0.84,
    "magnesium_mg": 29.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 200.0,
    "potassium_mg": 281.0,
    "protein_g": 14.6,
    "salt_g": 1.3175,
    "sat_fat_g": 2.44,
    "sodium_mg": 527.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 2.22,
    "vitamin_k_ug": 17.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706102",
  "state": "Frozen",
  "subcategory": "Chicken patties, nuggets and tenders",
  "tags": [
    "chicken-patties-nuggets-and-tenders",
    "frozen",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
