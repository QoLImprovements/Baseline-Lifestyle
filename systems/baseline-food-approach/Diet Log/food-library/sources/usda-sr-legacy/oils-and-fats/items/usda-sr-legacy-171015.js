/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171015",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.5,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 13.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Oil, palm",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.0,
    "energy_kcal": 884.0,
    "fat_g": 100.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.01,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 0.0,
    "sat_fat_g": 49.3,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 15.9,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171015",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
