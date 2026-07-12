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
  "id": "usda-sr-legacy-171596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, vegetable chicken, canned, prepared with water, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 8.76,
    "energy_kcal": 289.0,
    "fat_g": 2.0,
    "fibre_g": 0.4,
    "folate_ug": 18.0,
    "iron_mg": 0.61,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 153.0,
    "protein_g": 5.1,
    "salt_g": 0.0875,
    "sat_fat_g": 0.597,
    "sodium_mg": 35.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171596",
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
