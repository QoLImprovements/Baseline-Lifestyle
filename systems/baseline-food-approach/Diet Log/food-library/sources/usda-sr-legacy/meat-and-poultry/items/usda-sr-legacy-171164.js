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
  "id": "usda-sr-legacy-171164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "can-10-5-oz",
      "kind": "unit",
      "label": "can (10.5 oz)"
    }
  ],
  "name": "Soup, vegetable with beef broth, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 10.7,
    "energy_kcal": 66.0,
    "fat_g": 1.56,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.79,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 157.0,
    "protein_g": 2.42,
    "salt_g": 1.2875,
    "sat_fat_g": 0.36,
    "sodium_mg": 515.0,
    "sugar_g": 1.64,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171164",
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
