/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beverages, almond milk, chocolate, ready-to-drink",
  "nutritionPerBasis": {
    "calcium_mg": 188.0,
    "carbs_g": 9.38,
    "energy_kcal": 209.0,
    "fat_g": 1.25,
    "fibre_g": 0.4,
    "folate_ug": 1.0,
    "iron_mg": 0.53,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 75.0,
    "protein_g": 0.63,
    "salt_g": 0.1775,
    "sat_fat_g": 0.0,
    "sodium_mg": 71.0,
    "sugar_g": 8.75,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 2.81,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174820",
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
