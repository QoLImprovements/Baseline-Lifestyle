/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-oz-dry-yields",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708369",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "1-packet-dry-yields",
      "kind": "unit",
      "label": "1 packet, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Grits, with cheese, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 11.4,
    "energy_kcal": 108.0,
    "fat_g": 5.28,
    "fibre_g": 0.6,
    "folate_ug": 19.0,
    "iron_mg": 0.42,
    "magnesium_mg": 9.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 64.0,
    "potassium_mg": 27.0,
    "protein_g": 3.56,
    "salt_g": 0.3575,
    "sat_fat_g": 2.7,
    "sodium_mg": 143.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708369",
  "state": "Unspecified",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "grits-and-other-cooked-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
