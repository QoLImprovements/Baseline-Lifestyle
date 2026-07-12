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
  "id": "usda-sr-legacy-171912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 423.0,
      "key": "can-12-fl-oz",
      "kind": "unit",
      "label": "can (12 fl oz)"
    }
  ],
  "name": "Beverages, citrus fruit juice drink, frozen concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 40.2,
    "energy_kcal": 162.0,
    "fat_g": 0.1,
    "fibre_g": 0.2,
    "folate_ug": 26.0,
    "iron_mg": 3.94,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 393.0,
    "protein_g": 1.2,
    "salt_g": 0.0075,
    "sat_fat_g": 0.007,
    "sodium_mg": 3.0,
    "sugar_g": 28.6,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 95.3,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171912",
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
