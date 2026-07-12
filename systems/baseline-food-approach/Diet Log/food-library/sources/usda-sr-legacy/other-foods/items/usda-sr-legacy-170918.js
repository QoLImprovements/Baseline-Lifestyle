/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170918",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 6.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, caraway seed",
  "nutritionPerBasis": {
    "calcium_mg": 689.0,
    "carbs_g": 49.9,
    "energy_kcal": 333.0,
    "fat_g": 14.6,
    "fibre_g": 38.0,
    "folate_ug": 10.0,
    "iron_mg": 16.2,
    "magnesium_mg": 258.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 568.0,
    "potassium_mg": 1350.0,
    "protein_g": 19.8,
    "salt_g": 0.0425,
    "sat_fat_g": 0.62,
    "sodium_mg": 17.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170918",
  "state": "Raw",
  "subcategory": "Spices and Herbs",
  "tags": [
    "other-foods",
    "raw",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
