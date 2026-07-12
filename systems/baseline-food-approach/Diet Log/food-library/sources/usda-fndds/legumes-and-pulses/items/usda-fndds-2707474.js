/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-can-13-oz",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2707474",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "1-can-13-oz",
      "kind": "unit",
      "label": "1 can (13 oz)"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-steak-with-gravy",
      "kind": "unit",
      "label": "1 steak with gravy"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "1-cup-with-gravy",
      "kind": "unit",
      "label": "1 cup, with gravy"
    }
  ],
  "name": "Swiss steak, with gravy, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 14.1,
    "energy_kcal": 180.0,
    "fat_g": 8.09,
    "fibre_g": 4.0,
    "folate_ug": 101.0,
    "iron_mg": 2.09,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 269.0,
    "protein_g": 12.7,
    "salt_g": 1.7225,
    "sat_fat_g": 1.55,
    "sodium_mg": 689.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707474",
  "state": "Unspecified",
  "subcategory": "Bean, pea, legume dishes",
  "tags": [
    "bean-pea-legume-dishes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
