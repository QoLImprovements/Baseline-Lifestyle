/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 437.0,
      "key": "can-12-fl-oz",
      "kind": "unit",
      "label": "can (12 fl oz)"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "can-6-fl-oz",
      "kind": "unit",
      "label": "can (6 fl oz)"
    }
  ],
  "name": "Lemonade, frozen concentrate, pink",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 48.9,
    "energy_kcal": 804.0,
    "fat_g": 0.69,
    "fibre_g": 0.3,
    "folate_ug": 11.0,
    "iron_mg": 0.08,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 76.0,
    "protein_g": 0.22,
    "salt_g": 0.01,
    "sat_fat_g": 0.026,
    "sodium_mg": 4.0,
    "sugar_g": 46.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.1,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173666",
  "state": "Frozen",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
