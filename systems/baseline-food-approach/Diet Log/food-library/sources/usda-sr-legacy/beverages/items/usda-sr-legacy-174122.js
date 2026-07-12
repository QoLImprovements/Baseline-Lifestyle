/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-3-heaping-tsp-or-1-envelope",
  "description": "Beverages",
  "id": "usda-sr-legacy-174122",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving-3-heaping-tsp-or-1-envelope",
      "kind": "unit",
      "label": "serving (3 heaping tsp or 1 envelope)"
    }
  ],
  "name": "Beverages, Cocoa mix, powder",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 83.7,
    "energy_kcal": 1660.0,
    "fat_g": 4.0,
    "fibre_g": 3.7,
    "folate_ug": 6.0,
    "iron_mg": 1.19,
    "magnesium_mg": 83.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 315.0,
    "potassium_mg": 712.0,
    "protein_g": 6.67,
    "salt_g": 1.26,
    "sat_fat_g": 2.38,
    "sodium_mg": 504.0,
    "sugar_g": 65.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174122",
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
