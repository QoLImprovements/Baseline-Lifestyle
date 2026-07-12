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
  "id": "usda-sr-legacy-171320",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.6,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 7.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, cinnamon, ground",
  "nutritionPerBasis": {
    "calcium_mg": 1000.0,
    "carbs_g": 80.6,
    "energy_kcal": 1040.0,
    "fat_g": 1.24,
    "fibre_g": 53.1,
    "folate_ug": 6.0,
    "iron_mg": 8.32,
    "magnesium_mg": 60.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 64.0,
    "potassium_mg": 431.0,
    "protein_g": 3.99,
    "salt_g": 0.025,
    "sat_fat_g": 0.345,
    "sodium_mg": 10.0,
    "sugar_g": 2.17,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 31.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171320",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "herbs-spices-and-seasonings",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
