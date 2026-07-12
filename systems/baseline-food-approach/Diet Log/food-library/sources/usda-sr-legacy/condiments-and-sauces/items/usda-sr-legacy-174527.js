/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "0-25-tsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.2,
      "key": "0-25-tsp",
      "kind": "unit",
      "label": "0.25 tsp"
    },
    {
      "gramsPerUnit": 4.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Sauce, ready-to-serve, pepper or hot",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.75,
    "energy_kcal": 46.0,
    "fat_g": 0.37,
    "fibre_g": 0.3,
    "folate_ug": 6.0,
    "iron_mg": 0.48,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 144.0,
    "protein_g": 0.51,
    "salt_g": 6.6,
    "sat_fat_g": 0.052,
    "sodium_mg": 2640.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 74.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174527",
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
