/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 279.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Sauce, barbecue",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 40.8,
    "energy_kcal": 172.0,
    "fat_g": 0.63,
    "fibre_g": 0.9,
    "folate_ug": 2.0,
    "iron_mg": 0.64,
    "magnesium_mg": 13.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 20.0,
    "potassium_mg": 232.0,
    "protein_g": 0.82,
    "salt_g": 2.575,
    "sat_fat_g": 0.045,
    "sodium_mg": 1030.0,
    "sugar_g": 33.2,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174523",
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
