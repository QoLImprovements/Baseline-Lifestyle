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
  "id": "usda-sr-legacy-172231",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 9.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, turmeric, ground",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 67.1,
    "energy_kcal": 312.0,
    "fat_g": 3.25,
    "fibre_g": 22.7,
    "folate_ug": 20.0,
    "iron_mg": 55.0,
    "magnesium_mg": 208.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 299.0,
    "potassium_mg": 2080.0,
    "protein_g": 9.68,
    "salt_g": 0.0675,
    "sat_fat_g": 1.84,
    "sodium_mg": 27.0,
    "sugar_g": 3.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 4.43,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172231",
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
