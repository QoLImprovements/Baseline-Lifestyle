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
  "id": "usda-sr-legacy-174808",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, hot and sour, Chinese restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.35,
    "energy_kcal": 39.0,
    "fat_g": 1.21,
    "fibre_g": 0.5,
    "folate_ug": 8.0,
    "iron_mg": 0.64,
    "magnesium_mg": 9.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 32.0,
    "potassium_mg": 55.0,
    "protein_g": 2.58,
    "salt_g": 0.94,
    "sat_fat_g": 0.229,
    "sodium_mg": 376.0,
    "sugar_g": 0.42,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174808",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "soups",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
