/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, chicken vegetable with potato and cheese, chunky, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 5.2,
    "energy_kcal": 272.0,
    "fat_g": 4.46,
    "fibre_g": 0.3,
    "folate_ug": 9.0,
    "iron_mg": 0.16,
    "magnesium_mg": 5.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 19.0,
    "potassium_mg": 73.0,
    "protein_g": 1.16,
    "salt_g": 1.04,
    "sat_fat_g": 1.64,
    "sodium_mg": 416.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172892",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
