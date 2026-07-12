/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "teaspoon",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "teaspoon",
      "kind": "unit",
      "label": "teaspoon"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "cube",
      "kind": "unit",
      "label": "cube"
    }
  ],
  "name": "Soup, chicken broth or bouillon, dry",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 18.0,
    "energy_kcal": 267.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 1.03,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 309.0,
    "protein_g": 16.7,
    "salt_g": 59.75,
    "sat_fat_g": 3.43,
    "sodium_mg": 23900.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171562",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "meat-and-poultry",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
