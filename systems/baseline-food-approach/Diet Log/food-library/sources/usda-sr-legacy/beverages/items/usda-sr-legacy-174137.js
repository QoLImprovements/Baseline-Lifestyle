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
  "id": "usda-sr-legacy-174137",
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
  "name": "Beverages, OCEAN SPRAY, White Cranberry Strawberry Flavored Juice Drink",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 12.0,
    "energy_kcal": 49.0,
    "fat_g": 0.01,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.04,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 14.0,
    "protein_g": 0.22,
    "salt_g": 0.0075,
    "sat_fat_g": 0.001,
    "sodium_mg": 3.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 26.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174137",
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
