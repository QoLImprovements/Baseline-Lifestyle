/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "can",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 294.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, tomato, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 15.2,
    "energy_kcal": 66.0,
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
    "sat_fat_g": 0.115,
    "sodium_mg": 377.0,
    "sugar_g": 8.23,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 12.9,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172882",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "soups",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
