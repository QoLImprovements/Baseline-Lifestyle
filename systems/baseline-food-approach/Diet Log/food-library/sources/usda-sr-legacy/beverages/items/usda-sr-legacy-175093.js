/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-small-16-fl-oz-without-ice",
  "description": "Beverages",
  "id": "usda-sr-legacy-175093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 347.0,
      "key": "serving-small-16-fl-oz-without-ice",
      "kind": "unit",
      "label": "serving small 16 fl oz, without ice"
    },
    {
      "gramsPerUnit": 722.0,
      "key": "serving-large-32-fl-oz-without-ice",
      "kind": "unit",
      "label": "serving large 32 fl oz, without ice"
    },
    {
      "gramsPerUnit": 486.0,
      "key": "serving-medium-21-fl-oz-without-ice",
      "kind": "unit",
      "label": "serving medium 21 fl oz, without ice"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "serving-child-12-fl-oz-without-ice",
      "kind": "unit",
      "label": "serving child 12 fl oz, without ice"
    }
  ],
  "name": "Beverages, carbonated, cola, fast-food cola",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 9.56,
    "energy_kcal": 157.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.11,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 2.0,
    "protein_g": 0.07,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 8.97,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175093",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
