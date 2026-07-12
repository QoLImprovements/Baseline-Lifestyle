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
  "id": "usda-sr-legacy-173652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Beverages, Orange-flavor drink, breakfast type, with pulp, frozen concentrate, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 12.2,
    "energy_kcal": 205.0,
    "fat_g": 0.14,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.08,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 124.0,
    "protein_g": 0.03,
    "salt_g": 0.025,
    "sat_fat_g": 0.022,
    "sodium_mg": 10.0,
    "sugar_g": 11.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 69.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173652",
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
