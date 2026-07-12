/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-4-fl-oz",
  "description": "Baby juice",
  "id": "usda-fndds-2709378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "1-bottle-4-fl-oz",
      "kind": "unit",
      "label": "1 bottle (4 fl oz)"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Baby Toddler juice, fruit and vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 11.4,
    "energy_kcal": 47.0,
    "fat_g": 0.1,
    "fibre_g": 0.5,
    "folate_ug": 3.0,
    "iron_mg": 0.3,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 137.0,
    "protein_g": 0.3,
    "salt_g": 0.0125,
    "sat_fat_g": 0.03,
    "sodium_mg": 5.0,
    "sugar_g": 9.6,
    "vitamin_a_ug": 154.0,
    "vitamin_c_mg": 34.1,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709378",
  "state": "Unspecified",
  "subcategory": "Baby juice",
  "tags": [
    "baby-juice",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
