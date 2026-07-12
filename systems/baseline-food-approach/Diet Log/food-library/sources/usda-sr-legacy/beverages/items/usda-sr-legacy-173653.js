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
  "id": "usda-sr-legacy-173653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 435.0,
      "key": "can-12-fl-oz",
      "kind": "unit",
      "label": "can (12 fl oz)"
    },
    {
      "gramsPerUnit": 36.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Cranberry juice cocktail, frozen concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 51.4,
    "energy_kcal": 841.0,
    "fat_g": 0.0,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.3,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 49.0,
    "protein_g": 0.05,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 42.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 45.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173653",
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
