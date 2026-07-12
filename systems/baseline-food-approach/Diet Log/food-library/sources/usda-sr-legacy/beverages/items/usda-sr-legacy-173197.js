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
  "id": "usda-sr-legacy-173197",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Beverages, Mixed vegetable and fruit juice drink, with added nutrients",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 7.47,
    "energy_kcal": 122.0,
    "fat_g": 0.01,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 19.0,
    "protein_g": 0.04,
    "salt_g": 0.0525,
    "sat_fat_g": 0.0,
    "sodium_mg": 21.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 32.5,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173197",
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
