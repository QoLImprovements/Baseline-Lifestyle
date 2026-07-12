/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "0-25-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171185",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Sauce, pesto, MEZZETTA, NAPA VALLEY BISTRO, basil pesto, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 202.0,
    "carbs_g": 5.12,
    "energy_kcal": 496.0,
    "fat_g": 49.9,
    "fibre_g": 1.3,
    "folate_ug": 26.0,
    "iron_mg": 0.99,
    "magnesium_mg": 43.0,
    "omega3_g": 1.202,
    "phosphorus_mg": 149.0,
    "potassium_mg": 205.0,
    "protein_g": 6.69,
    "salt_g": 2.2425,
    "sat_fat_g": 8.01,
    "sodium_mg": 897.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 13.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171185",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "herbs-spices-and-seasonings",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
