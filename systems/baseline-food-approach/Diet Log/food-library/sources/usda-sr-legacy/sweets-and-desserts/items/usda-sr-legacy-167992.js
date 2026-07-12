/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-625-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167992",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "bar-1-625-oz",
      "kind": "unit",
      "label": "bar (1.625 oz)"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "bar-1-5-oz",
      "kind": "unit",
      "label": "bar (1.5 oz)"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "bar-miniature-35-oz",
      "kind": "unit",
      "label": "bar, miniature (.35 oz)"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "bar-3-375-oz",
      "kind": "unit",
      "label": "bar (3.375 oz)"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "bar-2-8-oz",
      "kind": "unit",
      "label": "bar (2.8 oz)"
    }
  ],
  "name": "Candies, KIT KAT Wafer Bar",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 64.6,
    "energy_kcal": 518.0,
    "fat_g": 26.0,
    "fibre_g": 1.0,
    "folate_ug": 14.0,
    "iron_mg": 1.0,
    "magnesium_mg": 37.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 135.0,
    "potassium_mg": 231.0,
    "protein_g": 6.51,
    "salt_g": 0.135,
    "sat_fat_g": 18.0,
    "sodium_mg": 54.0,
    "sugar_g": 48.7,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167992",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
