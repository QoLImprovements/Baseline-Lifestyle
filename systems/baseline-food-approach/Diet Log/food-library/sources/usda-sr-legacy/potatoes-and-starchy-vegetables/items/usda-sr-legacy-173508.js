/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "jar-gerber-graduate-4-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-graduate-4-5-oz",
      "kind": "unit",
      "label": "jar Gerber Graduate (4.5 oz)"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, potatoes, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 11.7,
    "energy_kcal": 217.0,
    "fat_g": 0.1,
    "fibre_g": 0.9,
    "folate_ug": 6.0,
    "iron_mg": 0.2,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 110.0,
    "protein_g": 1.0,
    "salt_g": 0.1425,
    "sat_fat_g": 0.015,
    "sodium_mg": 57.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173508",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
