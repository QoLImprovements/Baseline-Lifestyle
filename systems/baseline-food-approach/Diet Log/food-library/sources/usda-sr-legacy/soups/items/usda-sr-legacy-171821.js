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
  "id": "usda-sr-legacy-171821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, wonton, Chinese restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 5.25,
    "energy_kcal": 133.0,
    "fat_g": 0.26,
    "fibre_g": 0.2,
    "folate_ug": 13.0,
    "iron_mg": 0.21,
    "magnesium_mg": 3.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 18.0,
    "potassium_mg": 32.0,
    "protein_g": 2.08,
    "salt_g": 1.015,
    "sat_fat_g": 0.062,
    "sodium_mg": 406.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171821",
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
