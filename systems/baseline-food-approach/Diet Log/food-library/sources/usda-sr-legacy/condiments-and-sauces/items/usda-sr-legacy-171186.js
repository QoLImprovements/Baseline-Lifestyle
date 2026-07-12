/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171186",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Sauce, hot chile, sriracha",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 19.2,
    "energy_kcal": 388.0,
    "fat_g": 0.93,
    "fibre_g": 2.2,
    "folate_ug": 22.0,
    "iron_mg": 1.64,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 321.0,
    "protein_g": 1.93,
    "salt_g": 5.3,
    "sat_fat_g": 0.0,
    "sodium_mg": 2120.0,
    "sugar_g": 15.1,
    "vitamin_a_ug": 129.0,
    "vitamin_c_mg": 26.9,
    "vitamin_e_mg": 4.8,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171186",
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
