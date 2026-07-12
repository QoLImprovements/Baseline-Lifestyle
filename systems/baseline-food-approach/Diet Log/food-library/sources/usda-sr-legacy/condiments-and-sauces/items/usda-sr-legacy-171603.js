/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, alfredo mix, dry",
  "nutritionPerBasis": {
    "calcium_mg": 467.0,
    "carbs_g": 36.5,
    "energy_kcal": 535.0,
    "fat_g": 36.4,
    "fibre_g": 2.0,
    "folate_ug": 4.0,
    "iron_mg": 0.94,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 415.0,
    "potassium_mg": 254.0,
    "protein_g": 15.3,
    "salt_g": 6.475,
    "sat_fat_g": 13.2,
    "sodium_mg": 2590.0,
    "sugar_g": 5.4,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171603",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "condiments-and-sauces",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
