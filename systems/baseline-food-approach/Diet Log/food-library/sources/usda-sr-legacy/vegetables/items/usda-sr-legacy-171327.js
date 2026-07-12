/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.9,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 2.4,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, onion powder",
  "nutritionPerBasis": {
    "calcium_mg": 384.0,
    "carbs_g": 79.1,
    "energy_kcal": 341.0,
    "fat_g": 1.04,
    "fibre_g": 15.2,
    "folate_ug": 64.0,
    "iron_mg": 3.9,
    "magnesium_mg": 113.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 322.0,
    "potassium_mg": 985.0,
    "protein_g": 10.4,
    "salt_g": 0.1825,
    "sat_fat_g": 0.219,
    "sodium_mg": 73.0,
    "sugar_g": 6.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 23.4,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171327",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "spices-and-herbs",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
