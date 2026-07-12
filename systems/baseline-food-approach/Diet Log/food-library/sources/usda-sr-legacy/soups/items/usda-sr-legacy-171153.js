/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "can-10-5-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171153",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "can-10-5-oz",
      "kind": "unit",
      "label": "can (10.5 oz)"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    }
  ],
  "name": "Soup, minestrone, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 9.17,
    "energy_kcal": 68.0,
    "fat_g": 2.05,
    "fibre_g": 0.8,
    "folate_ug": 29.0,
    "iron_mg": 0.75,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 255.0,
    "protein_g": 3.48,
    "salt_g": 1.29,
    "sat_fat_g": 0.44,
    "sodium_mg": 516.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171153",
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
