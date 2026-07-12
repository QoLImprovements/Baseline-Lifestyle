/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171602",
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
  "name": "Soup, cream of chicken, canned, condensed, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 9.5,
    "energy_kcal": 243.0,
    "fat_g": 1.3,
    "fibre_g": 0.4,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 2.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 23.0,
    "potassium_mg": 272.0,
    "protein_g": 1.8,
    "salt_g": 0.8925,
    "sat_fat_g": 0.5,
    "sodium_mg": 357.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171602",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "meat-and-poultry",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
