/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171555",
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
    },
    {
      "gramsPerUnit": 539.0,
      "key": "can-19-oz",
      "kind": "unit",
      "label": "can (19 oz)"
    }
  ],
  "name": "Soup, pea, split with ham, canned, chunky, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 11.2,
    "energy_kcal": 77.0,
    "fat_g": 1.66,
    "fibre_g": 1.7,
    "folate_ug": 2.0,
    "iron_mg": 0.89,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 127.0,
    "protein_g": 4.62,
    "salt_g": 0.7525,
    "sat_fat_g": 0.66,
    "sodium_mg": 301.0,
    "sugar_g": 1.91,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171555",
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
