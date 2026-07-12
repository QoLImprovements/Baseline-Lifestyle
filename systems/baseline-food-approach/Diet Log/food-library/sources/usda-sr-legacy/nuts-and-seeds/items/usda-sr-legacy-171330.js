/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171330",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.8,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 8.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, poppy seed",
  "nutritionPerBasis": {
    "calcium_mg": 1440.0,
    "carbs_g": 28.1,
    "energy_kcal": 2200.0,
    "fat_g": 41.6,
    "fibre_g": 19.5,
    "folate_ug": 82.0,
    "iron_mg": 9.76,
    "magnesium_mg": 347.0,
    "omega3_g": 0.273,
    "phosphorus_mg": 870.0,
    "potassium_mg": 719.0,
    "protein_g": 18.0,
    "salt_g": 0.065,
    "sat_fat_g": 4.52,
    "sodium_mg": 26.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.77,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171330",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "nuts-and-seeds",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
