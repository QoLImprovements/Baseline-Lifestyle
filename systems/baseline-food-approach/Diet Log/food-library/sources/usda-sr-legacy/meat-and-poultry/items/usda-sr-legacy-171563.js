/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cube",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171563",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.8,
      "key": "cube",
      "kind": "unit",
      "label": "cube"
    }
  ],
  "name": "Soup, chicken broth cubes, dry",
  "nutritionPerBasis": {
    "calcium_mg": 190.0,
    "carbs_g": 23.5,
    "energy_kcal": 198.0,
    "fat_g": 4.7,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 1.87,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 374.0,
    "protein_g": 14.6,
    "salt_g": 60.0,
    "sat_fat_g": 1.2,
    "sodium_mg": 24000.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171563",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "meat-and-poultry",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
