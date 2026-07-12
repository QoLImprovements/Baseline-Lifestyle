/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "packet-0-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "packet-0-5-oz",
      "kind": "unit",
      "label": "packet (0.5 oz)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "serving-1-tbsp",
      "kind": "unit",
      "label": "serving 1 tbsp"
    }
  ],
  "name": "Jellies",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 70.0,
    "energy_kcal": 266.0,
    "fat_g": 0.02,
    "fibre_g": 1.0,
    "folate_ug": 2.0,
    "iron_mg": 0.19,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 54.0,
    "protein_g": 0.15,
    "salt_g": 0.075,
    "sat_fat_g": 0.005,
    "sodium_mg": 30.0,
    "sugar_g": 51.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169642",
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
