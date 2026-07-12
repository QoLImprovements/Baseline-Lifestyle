/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174149",
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
  "name": "Beverages, OCEAN SPRAY, White Cranberry Peach",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 11.9,
    "energy_kcal": 187.0,
    "fat_g": 0.01,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.05,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 22.0,
    "protein_g": 0.13,
    "salt_g": 0.0275,
    "sat_fat_g": 0.002,
    "sodium_mg": 11.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 27.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174149",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
