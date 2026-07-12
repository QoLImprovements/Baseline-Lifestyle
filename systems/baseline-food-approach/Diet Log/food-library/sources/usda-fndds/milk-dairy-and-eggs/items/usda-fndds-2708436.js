/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-packet-1-oz-dry-yields",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708436",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-packet-1-oz-dry-yields",
      "kind": "unit",
      "label": "1 packet (1 oz), dry, yields"
    },
    {
      "gramsPerUnit": 965.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cream of wheat, instant, made with water, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 14.4,
    "energy_kcal": 67.0,
    "fat_g": 0.21,
    "fibre_g": 0.5,
    "folate_ug": 51.0,
    "iron_mg": 4.11,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 17.0,
    "protein_g": 1.52,
    "salt_g": 0.2125,
    "sat_fat_g": 0.032,
    "sodium_mg": 85.0,
    "sugar_g": 3.64,
    "vitamin_a_ug": 193.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708436",
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
