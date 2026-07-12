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
  "id": "usda-sr-legacy-174856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Beverages, OCEAN SPRAY, Ruby Red cranberry",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 11.6,
    "energy_kcal": 187.0,
    "fat_g": 0.01,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.04,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 39.0,
    "protein_g": 0.07,
    "salt_g": 0.0275,
    "sat_fat_g": 0.003,
    "sodium_mg": 11.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 27.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174856",
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
