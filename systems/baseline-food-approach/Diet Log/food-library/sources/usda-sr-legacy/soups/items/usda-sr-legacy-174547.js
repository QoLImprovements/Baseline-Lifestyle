/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "0-5-cup-condensed",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-cup-condensed",
      "kind": "unit",
      "label": "0.5 cup condensed"
    }
  ],
  "name": "CAMPBELL'S, Tomato Soup, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 15.2,
    "energy_kcal": 296.0,
    "fat_g": 0.44,
    "fibre_g": 1.1,
    "folate_ug": 0.0,
    "iron_mg": 0.59,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 562.0,
    "protein_g": 1.46,
    "salt_g": 0.9425,
    "sat_fat_g": 0.0,
    "sodium_mg": 377.0,
    "sugar_g": 8.23,
    "vitamin_a_ug": 323.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174547",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "soups",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
