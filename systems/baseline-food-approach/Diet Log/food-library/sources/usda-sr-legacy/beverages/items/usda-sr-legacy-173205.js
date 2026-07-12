/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "drink-large-32-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173205",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 982.0,
      "key": "drink-large-32-fl-oz",
      "kind": "unit",
      "label": "drink, large (32 fl oz)"
    },
    {
      "gramsPerUnit": 675.0,
      "key": "drink-medium-22-fl-oz",
      "kind": "unit",
      "label": "drink, medium (22 fl oz)"
    },
    {
      "gramsPerUnit": 491.0,
      "key": "drink-small-16-fl-oz",
      "kind": "unit",
      "label": "drink, small (16 fl oz)"
    },
    {
      "gramsPerUnit": 1351.0,
      "key": "drink-extra-large-44-fl-oz",
      "kind": "unit",
      "label": "drink, extra large (44 fl oz)"
    },
    {
      "gramsPerUnit": 30.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 368.0,
      "key": "drink-12-fl-oz",
      "kind": "unit",
      "label": "drink (12 fl oz)"
    }
  ],
  "name": "Beverages, carbonated, lemon-lime soda, no caffeine",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 10.4,
    "energy_kcal": 41.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 1.0,
    "protein_g": 0.09,
    "salt_g": 0.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 10.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173205",
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
