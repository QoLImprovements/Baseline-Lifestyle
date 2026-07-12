/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 2.3,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, paprika",
  "nutritionPerBasis": {
    "calcium_mg": 229.0,
    "carbs_g": 54.0,
    "energy_kcal": 282.0,
    "fat_g": 12.9,
    "fibre_g": 34.9,
    "folate_ug": 49.0,
    "iron_mg": 21.1,
    "magnesium_mg": 178.0,
    "omega3_g": 0.453,
    "phosphorus_mg": 314.0,
    "potassium_mg": 2280.0,
    "protein_g": 14.1,
    "salt_g": 0.17,
    "sat_fat_g": 2.14,
    "sodium_mg": 68.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 2460.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 29.1,
    "vitamin_k_ug": 80.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171329",
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
