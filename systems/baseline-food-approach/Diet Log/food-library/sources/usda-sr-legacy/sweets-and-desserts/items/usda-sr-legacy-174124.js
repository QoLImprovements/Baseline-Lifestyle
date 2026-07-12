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
  "id": "usda-sr-legacy-174124",
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
  "name": "Beverages, Cocoa mix, NESTLE, Hot Cocoa Mix Rich Chocolate With Marshmallows",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 75.0,
    "energy_kcal": 400.0,
    "fat_g": 15.0,
    "fibre_g": 3.7,
    "folate_ug": 0.0,
    "iron_mg": 1.8,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 2.8,
    "salt_g": 2.0,
    "sat_fat_g": 15.0,
    "sodium_mg": 800.0,
    "sugar_g": 65.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174124",
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
