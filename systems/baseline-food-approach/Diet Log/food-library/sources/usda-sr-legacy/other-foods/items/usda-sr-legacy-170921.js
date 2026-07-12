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
  "id": "usda-sr-legacy-170921",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.6,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, coriander leaf, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1250.0,
    "carbs_g": 52.1,
    "energy_kcal": 279.0,
    "fat_g": 4.78,
    "fibre_g": 10.4,
    "folate_ug": 274.0,
    "iron_mg": 42.5,
    "magnesium_mg": 694.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 481.0,
    "potassium_mg": 4470.0,
    "protein_g": 21.9,
    "salt_g": 0.5275,
    "sat_fat_g": 0.115,
    "sodium_mg": 211.0,
    "sugar_g": 7.27,
    "vitamin_a_ug": 293.0,
    "vitamin_c_mg": 567.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 1360.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170921",
  "state": "Dried",
  "subcategory": "Spices and Herbs",
  "tags": [
    "dried",
    "other-foods",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
