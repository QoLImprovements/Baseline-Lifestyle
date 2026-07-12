/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 319.0,
      "key": "can-11-2-oz",
      "kind": "unit",
      "label": "can (11.2 oz)"
    }
  ],
  "name": "Soup, pea, green, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 20.2,
    "energy_kcal": 125.0,
    "fat_g": 2.23,
    "fibre_g": 3.9,
    "folate_ug": 1.0,
    "iron_mg": 1.48,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 145.0,
    "protein_g": 6.54,
    "salt_g": 1.7,
    "sat_fat_g": 1.07,
    "sodium_mg": 680.0,
    "sugar_g": 6.52,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171554",
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
