/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "16-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 473.0,
      "key": "16-fl-oz",
      "kind": "unit",
      "label": "16 fl oz"
    }
  ],
  "name": "Beverages, Kiwi Strawberry Juice Drink",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 12.3,
    "energy_kcal": 195.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.15,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 14.0,
    "protein_g": 0.0,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 24.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174111",
  "state": "Raw",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
