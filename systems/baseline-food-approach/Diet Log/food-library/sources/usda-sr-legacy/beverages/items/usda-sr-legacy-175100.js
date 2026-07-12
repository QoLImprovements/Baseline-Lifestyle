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
  "id": "usda-sr-legacy-175100",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 436.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Beverages, Orange drink, breakfast type, with juice and pulp, frozen concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 399.0,
    "carbs_g": 39.0,
    "energy_kcal": 153.0,
    "fat_g": 0.0,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.26,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 465.0,
    "protein_g": 0.4,
    "salt_g": 0.065,
    "sat_fat_g": 0.002,
    "sodium_mg": 26.0,
    "sugar_g": 38.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 190.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175100",
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
