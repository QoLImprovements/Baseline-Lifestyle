/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171158",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Soup, cream of potato, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 12.8,
    "energy_kcal": 308.0,
    "fat_g": 1.88,
    "fibre_g": 1.3,
    "folate_ug": 2.0,
    "iron_mg": 0.34,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 165.0,
    "protein_g": 1.51,
    "salt_g": 1.51,
    "sat_fat_g": 0.97,
    "sodium_mg": 604.0,
    "sugar_g": 1.44,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171158",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "potatoes-and-starchy-vegetables",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
