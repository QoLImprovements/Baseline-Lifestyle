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
  "id": "usda-sr-legacy-173472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Horseradish, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 11.3,
    "energy_kcal": 48.0,
    "fat_g": 0.69,
    "fibre_g": 3.3,
    "folate_ug": 57.0,
    "iron_mg": 0.42,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 246.0,
    "protein_g": 1.18,
    "salt_g": 1.05,
    "sat_fat_g": 0.09,
    "sodium_mg": 420.0,
    "sugar_g": 7.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 24.9,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173472",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "other-foods",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
