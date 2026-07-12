/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "can-12-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174152",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 418.0,
      "key": "can-12-fl-oz",
      "kind": "unit",
      "label": "can (12 fl oz)"
    },
    {
      "gramsPerUnit": 34.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, Fruit punch drink, frozen concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 41.4,
    "energy_kcal": 162.0,
    "fat_g": 0.0,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.3,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 44.0,
    "protein_g": 0.2,
    "salt_g": 0.02,
    "sat_fat_g": 0.003,
    "sodium_mg": 8.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 156.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174152",
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
