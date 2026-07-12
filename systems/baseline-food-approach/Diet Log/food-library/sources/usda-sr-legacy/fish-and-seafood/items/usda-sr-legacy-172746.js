/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cracker-square",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "cracker-square",
      "kind": "unit",
      "label": "cracker square"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "cup-oyster-crackers",
      "kind": "unit",
      "label": "cup oyster crackers"
    },
    {
      "gramsPerUnit": 14.9,
      "key": "5-crackers",
      "kind": "unit",
      "label": "5 crackers"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "5-crackers-square-1-serving",
      "kind": "unit",
      "label": "5 crackers square (1 serving)"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "cracker-round-large",
      "kind": "unit",
      "label": "cracker, round large"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "cracker-oyster",
      "kind": "unit",
      "label": "cracker, oyster"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "cracker-rectangle",
      "kind": "unit",
      "label": "cracker, rectangle"
    }
  ],
  "name": "Crackers, saltines (includes oyster, soda, soup)",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 74.0,
    "energy_kcal": 1750.0,
    "fat_g": 8.64,
    "fibre_g": 2.8,
    "folate_ug": 134.0,
    "iron_mg": 5.57,
    "magnesium_mg": 23.0,
    "omega3_g": 0.535,
    "phosphorus_mg": 102.0,
    "potassium_mg": 152.0,
    "protein_g": 9.46,
    "salt_g": 2.3525,
    "sat_fat_g": 1.65,
    "sodium_mg": 941.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 25.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172746",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
