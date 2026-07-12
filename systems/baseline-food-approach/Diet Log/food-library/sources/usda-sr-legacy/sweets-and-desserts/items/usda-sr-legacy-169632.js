/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-2-5-fl-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "bar-2-5-fl-oz",
      "kind": "unit",
      "label": "bar (2.5 fl oz)"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "bar-3-fl-oz",
      "kind": "unit",
      "label": "bar (3 fl oz)"
    }
  ],
  "name": "Frozen novelties, fruit and juice bars",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 20.2,
    "energy_kcal": 362.0,
    "fat_g": 0.1,
    "fibre_g": 1.0,
    "folate_ug": 7.0,
    "iron_mg": 0.19,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 53.0,
    "protein_g": 1.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 17.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169632",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
