/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar-1-4-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "bar-1-4-oz",
      "kind": "unit",
      "label": "bar (1.4 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "bar-1-75-fl-oz",
      "kind": "unit",
      "label": "bar (1.75 fl oz)"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "bar-1-6-oz",
      "kind": "unit",
      "label": "bar (1.6 oz)"
    }
  ],
  "name": "Candies, peanut bar",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 47.4,
    "energy_kcal": 2180.0,
    "fat_g": 33.7,
    "fibre_g": 4.1,
    "folate_ug": 75.0,
    "iron_mg": 0.97,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 308.0,
    "potassium_mg": 407.0,
    "protein_g": 15.5,
    "salt_g": 0.39,
    "sat_fat_g": 4.68,
    "sodium_mg": 156.0,
    "sugar_g": 42.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169585",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
