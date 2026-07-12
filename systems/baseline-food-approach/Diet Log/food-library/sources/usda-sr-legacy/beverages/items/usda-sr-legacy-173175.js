/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "2-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "2-fl-oz",
      "kind": "unit",
      "label": "2 fl oz"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Beverages, Acai berry drink, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 12.8,
    "energy_kcal": 62.0,
    "fat_g": 0.83,
    "fibre_g": 1.2,
    "folate_ug": 4.0,
    "iron_mg": 0.16,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 130.0,
    "protein_g": 0.83,
    "salt_g": 0.0325,
    "sat_fat_g": 0.0,
    "sodium_mg": 13.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 485.0,
    "vitamin_c_mg": 42.1,
    "vitamin_e_mg": 11.1,
    "vitamin_k_ug": 16.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173175",
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
