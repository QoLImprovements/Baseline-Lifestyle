/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle-20-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175110",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 613.0,
      "key": "bottle-20-fl-oz",
      "kind": "unit",
      "label": "bottle 20 fl oz"
    },
    {
      "gramsPerUnit": 30.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "8-bottle-8-fl-oz",
      "kind": "unit",
      "label": "8 bottle 8 fl oz"
    },
    {
      "gramsPerUnit": 368.0,
      "key": "bottle-12-fl-oz",
      "kind": "unit",
      "label": "bottle 12 fl oz"
    }
  ],
  "name": "Beverages, ARIZONA, tea, ready-to-drink, lemon",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 9.77,
    "energy_kcal": 164.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 10.0,
    "protein_g": 0.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 9.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175110",
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
