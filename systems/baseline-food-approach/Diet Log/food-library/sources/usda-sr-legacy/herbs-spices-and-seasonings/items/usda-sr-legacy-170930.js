/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170930",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 1.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, parsley, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1140.0,
    "carbs_g": 50.6,
    "energy_kcal": 1220.0,
    "fat_g": 5.48,
    "fibre_g": 26.7,
    "folate_ug": 180.0,
    "iron_mg": 22.0,
    "magnesium_mg": 400.0,
    "omega3_g": 1.86,
    "phosphorus_mg": 436.0,
    "potassium_mg": 2680.0,
    "protein_g": 26.6,
    "salt_g": 1.13,
    "sat_fat_g": 1.38,
    "sodium_mg": 452.0,
    "sugar_g": 7.27,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 125.0,
    "vitamin_e_mg": 8.96,
    "vitamin_k_ug": 1360.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170930",
  "state": "Dried",
  "subcategory": "Spices and Herbs",
  "tags": [
    "dried",
    "herbs-spices-and-seasonings",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
