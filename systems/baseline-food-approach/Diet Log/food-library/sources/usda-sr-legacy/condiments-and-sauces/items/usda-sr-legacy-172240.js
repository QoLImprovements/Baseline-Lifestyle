/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-172240",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.9,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 239.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Vinegar, red wine",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.27,
    "energy_kcal": 19.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.45,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 39.0,
    "protein_g": 0.04,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172240",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "condiments-and-sauces",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
