/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171828",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 291.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sauce, barbecue, BULL'S-EYE, original",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 40.0,
    "energy_kcal": 170.0,
    "fat_g": 0.67,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.69,
    "magnesium_mg": 16.0,
    "omega3_g": 0.057,
    "phosphorus_mg": 22.0,
    "potassium_mg": 263.0,
    "protein_g": 0.91,
    "salt_g": 2.525,
    "sat_fat_g": 0.101,
    "sodium_mg": 1010.0,
    "sugar_g": 35.3,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171828",
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
