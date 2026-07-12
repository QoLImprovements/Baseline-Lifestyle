/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "4-fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168144",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "4-fl-oz",
      "kind": "unit",
      "label": "4 fl oz"
    }
  ],
  "name": "Babyfood, grape juice, no sugar, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 15.4,
    "energy_kcal": 62.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 90.0,
    "protein_g": 0.0,
    "salt_g": 0.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 10.0,
    "sugar_g": 15.3,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 33.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 16.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168144",
  "state": "Canned",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "canned"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
