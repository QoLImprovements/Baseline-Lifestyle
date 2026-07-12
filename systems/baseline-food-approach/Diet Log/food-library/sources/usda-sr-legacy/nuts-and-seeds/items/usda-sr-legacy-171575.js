/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171575",
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
    }
  ],
  "name": "Sauce, peanut, made from coconut, water, sugar, peanuts",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 28.5,
    "energy_kcal": 749.0,
    "fat_g": 6.34,
    "fibre_g": 1.1,
    "folate_ug": 4.0,
    "iron_mg": 0.38,
    "magnesium_mg": 19.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 35.0,
    "potassium_mg": 99.0,
    "protein_g": 2.02,
    "salt_g": 0.7975,
    "sat_fat_g": 3.53,
    "sodium_mg": 319.0,
    "sugar_g": 18.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171575",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "nuts-and-seeds",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
