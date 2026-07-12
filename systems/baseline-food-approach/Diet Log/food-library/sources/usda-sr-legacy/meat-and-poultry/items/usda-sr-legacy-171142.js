/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can-11-5-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171142",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 326.0,
      "key": "can-11-5-oz",
      "kind": "unit",
      "label": "can 11.5 oz"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Soup, bean with pork, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 17.0,
    "energy_kcal": 129.0,
    "fat_g": 4.42,
    "fibre_g": 5.9,
    "folate_ug": 24.0,
    "iron_mg": 1.53,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 375.0,
    "protein_g": 5.88,
    "salt_g": 1.68,
    "sat_fat_g": 1.14,
    "sodium_mg": 672.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171142",
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
