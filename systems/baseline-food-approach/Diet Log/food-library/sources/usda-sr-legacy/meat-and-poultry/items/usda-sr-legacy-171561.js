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
  "id": "usda-sr-legacy-171561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.6,
      "key": "cube",
      "kind": "unit",
      "label": "cube"
    }
  ],
  "name": "Soup, beef broth, cubed, dry",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 16.1,
    "energy_kcal": 170.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 2.23,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 225.0,
    "potassium_mg": 403.0,
    "protein_g": 17.3,
    "salt_g": 60.0,
    "sat_fat_g": 1.99,
    "sodium_mg": 24000.0,
    "sugar_g": 14.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171561",
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
