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
  "id": "usda-sr-legacy-171551",
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
  "name": "Soup, onion, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 6.68,
    "energy_kcal": 46.0,
    "fat_g": 1.42,
    "fibre_g": 0.7,
    "folate_ug": 12.0,
    "iron_mg": 0.55,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 56.0,
    "protein_g": 3.06,
    "salt_g": 1.29,
    "sat_fat_g": 0.21,
    "sodium_mg": 516.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171551",
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
