/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle-8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "bottle-8-fl-oz",
      "kind": "unit",
      "label": "bottle 8 fl oz"
    },
    {
      "gramsPerUnit": 30.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, lemonade, frozen concentrate, pink, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.8,
    "energy_kcal": 43.0,
    "fat_g": 0.15,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.02,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 17.0,
    "protein_g": 0.05,
    "salt_g": 0.01,
    "sat_fat_g": 0.006,
    "sodium_mg": 4.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173667",
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
