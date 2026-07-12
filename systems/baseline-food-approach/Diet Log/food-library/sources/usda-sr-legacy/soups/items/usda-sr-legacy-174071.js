/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, chunky vegetable, reduced sodium, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 10.3,
    "energy_kcal": 211.0,
    "fat_g": 0.51,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 349.0,
    "protein_g": 1.16,
    "salt_g": 0.345,
    "sat_fat_g": 0.217,
    "sodium_mg": 138.0,
    "sugar_g": 2.78,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174071",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "soups",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
