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
  "id": "usda-sr-legacy-171546",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, chicken and vegetable, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 4.68,
    "energy_kcal": 33.0,
    "fat_g": 0.73,
    "fibre_g": 0.9,
    "folate_ug": 13.0,
    "iron_mg": 0.25,
    "magnesium_mg": 8.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 35.0,
    "potassium_mg": 133.0,
    "protein_g": 1.97,
    "salt_g": 0.5725,
    "sat_fat_g": 0.121,
    "sodium_mg": 229.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171546",
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
