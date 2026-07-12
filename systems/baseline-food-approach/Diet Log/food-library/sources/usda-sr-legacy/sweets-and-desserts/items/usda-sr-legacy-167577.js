/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-2-75-fl-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "bar-2-75-fl-oz",
      "kind": "unit",
      "label": "bar (2.75 fl oz)"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    }
  ],
  "name": "Sherbet, orange",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 30.4,
    "energy_kcal": 144.0,
    "fat_g": 2.0,
    "fibre_g": 1.3,
    "folate_ug": 4.0,
    "iron_mg": 0.14,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 96.0,
    "protein_g": 1.1,
    "salt_g": 0.115,
    "sat_fat_g": 1.16,
    "sodium_mg": 46.0,
    "sugar_g": 24.3,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167577",
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
