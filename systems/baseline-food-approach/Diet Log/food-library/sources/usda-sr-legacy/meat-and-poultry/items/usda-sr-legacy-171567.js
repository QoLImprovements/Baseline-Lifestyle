/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Gravy, chicken, dry",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 62.1,
    "energy_kcal": 1590.0,
    "fat_g": 9.73,
    "fibre_g": 0.0,
    "folate_ug": 125.0,
    "iron_mg": 1.33,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 249.0,
    "potassium_mg": 404.0,
    "protein_g": 11.3,
    "salt_g": 10.375,
    "sat_fat_g": 2.92,
    "sodium_mg": 4150.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171567",
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
