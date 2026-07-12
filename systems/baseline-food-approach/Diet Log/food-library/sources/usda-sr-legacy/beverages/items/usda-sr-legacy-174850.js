/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "drink-medium-22-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 651.0,
      "key": "drink-medium-22-fl-oz",
      "kind": "unit",
      "label": "drink, medium (22 fl oz)"
    },
    {
      "gramsPerUnit": 1302.0,
      "key": "drink-extra-large-44-fl-oz",
      "kind": "unit",
      "label": "drink, extra large (44 fl oz)"
    },
    {
      "gramsPerUnit": 474.0,
      "key": "can-or-bottle-16-fl-oz",
      "kind": "unit",
      "label": "can or bottle (16 fl oz)"
    },
    {
      "gramsPerUnit": 474.0,
      "key": "drink-small-16-fl-oz",
      "kind": "unit",
      "label": "drink, small (16 fl oz)"
    },
    {
      "gramsPerUnit": 355.0,
      "key": "can-12-fl-oz",
      "kind": "unit",
      "label": "can (12 fl oz)"
    },
    {
      "gramsPerUnit": 29.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 947.0,
      "key": "drink-large-32-fl-oz",
      "kind": "unit",
      "label": "drink, large (32 fl oz)"
    }
  ],
  "name": "Beverages, carbonated, low calorie, cola or pepper-type, with aspartame, without caffeine",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.12,
    "energy_kcal": 1.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 7.0,
    "protein_g": 0.12,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174850",
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
