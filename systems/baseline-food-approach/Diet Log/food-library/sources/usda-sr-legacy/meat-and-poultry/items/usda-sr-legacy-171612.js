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
  "id": "usda-sr-legacy-171612",
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
  "name": "Soup, beef stroganoff, canned, chunky style, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 9.0,
    "energy_kcal": 98.0,
    "fat_g": 4.6,
    "fibre_g": 0.6,
    "folate_ug": 67.0,
    "iron_mg": 0.88,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 140.0,
    "protein_g": 5.1,
    "salt_g": 1.0875,
    "sat_fat_g": 2.32,
    "sodium_mg": 435.0,
    "sugar_g": 1.68,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 103.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171612",
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
