/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-envelope",
  "description": "Beverages",
  "id": "usda-sr-legacy-171887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "serving-1-envelope",
      "kind": "unit",
      "label": "serving 1 envelope"
    }
  ],
  "name": "Cocoa mix, NESTLE, Rich Chocolate Hot Cocoa Mix",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 75.0,
    "energy_kcal": 1670.0,
    "fat_g": 15.0,
    "fibre_g": 4.0,
    "folate_ug": 0.0,
    "iron_mg": 1.8,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.0,
    "salt_g": 2.125,
    "sat_fat_g": 10.0,
    "sodium_mg": 850.0,
    "sugar_g": 60.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171887",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
