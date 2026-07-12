/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "1-ice-cream-roll-12-oz",
      "kind": "unit",
      "label": "1 ice cream roll (12 oz)"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-piece-1-10-of-roll",
      "kind": "unit",
      "label": "1 piece (1/10 of roll)"
    },
    {
      "gramsPerUnit": 9.6,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Ice cream cake",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 39.3,
    "energy_kcal": 283.0,
    "fat_g": 12.7,
    "fibre_g": 0.5,
    "folate_ug": 14.0,
    "iron_mg": 0.48,
    "magnesium_mg": 9.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 112.0,
    "potassium_mg": 121.0,
    "protein_g": 2.95,
    "salt_g": 0.49,
    "sat_fat_g": 4.8,
    "sodium_mg": 196.0,
    "sugar_g": 31.2,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707877",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
