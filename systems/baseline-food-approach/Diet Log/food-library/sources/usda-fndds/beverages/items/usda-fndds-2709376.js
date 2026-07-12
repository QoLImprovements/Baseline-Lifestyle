/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby juice",
  "id": "usda-fndds-2709376",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "1-bottle-4-fl-oz",
      "kind": "unit",
      "label": "1 bottle (4 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Baby Toddler juice, mixed fruit",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 11.7,
    "energy_kcal": 47.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.57,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 91.0,
    "protein_g": 0.0,
    "salt_g": 0.02,
    "sat_fat_g": 0.018,
    "sodium_mg": 8.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 33.8,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709376",
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
