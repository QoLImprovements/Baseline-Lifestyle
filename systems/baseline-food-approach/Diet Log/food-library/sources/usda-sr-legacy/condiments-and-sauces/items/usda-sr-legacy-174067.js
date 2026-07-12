/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "0-25-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Sauce, cocktail, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 28.2,
    "energy_kcal": 128.0,
    "fat_g": 1.05,
    "fibre_g": 1.8,
    "folate_ug": 17.0,
    "iron_mg": 0.83,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 309.0,
    "protein_g": 1.36,
    "salt_g": 3.15,
    "sat_fat_g": 0.0,
    "sodium_mg": 1260.0,
    "sugar_g": 11.8,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 11.6,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174067",
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
