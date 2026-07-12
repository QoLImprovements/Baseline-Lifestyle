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
  "id": "usda-sr-legacy-174136",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Beverages, OCEAN SPRAY, Light Cranberry and Raspberry Flavored Juice",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 5.77,
    "energy_kcal": 109.0,
    "fat_g": 0.0,
    "fibre_g": 0.7,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 47.0,
    "protein_g": 0.73,
    "salt_g": 0.005,
    "sat_fat_g": 0.001,
    "sodium_mg": 2.0,
    "sugar_g": 5.02,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 32.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174136",
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
