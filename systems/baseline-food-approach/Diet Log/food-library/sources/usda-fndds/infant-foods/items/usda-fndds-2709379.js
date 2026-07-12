/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: mixtures",
  "id": "usda-fndds-2709379",
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
  "name": "Baby Toddler juice, fruit and yogurt blend",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 12.7,
    "energy_kcal": 69.0,
    "fat_g": 1.48,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 0.22,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 178.0,
    "protein_g": 1.56,
    "salt_g": 0.035,
    "sat_fat_g": 0.727,
    "sodium_mg": 14.0,
    "sugar_g": 8.59,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 21.2,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709379",
  "state": "Unspecified",
  "subcategory": "Baby food: mixtures",
  "tags": [
    "baby-food-mixtures",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
