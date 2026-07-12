/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can-11-25-oz-prepared",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 607.0,
      "key": "can-11-25-oz-prepared",
      "kind": "unit",
      "label": "can (11.25 oz), prepared"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Soup, bean with frankfurters, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 8.8,
    "energy_kcal": 75.0,
    "fat_g": 2.79,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.94,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 191.0,
    "protein_g": 3.99,
    "salt_g": 1.0925,
    "sat_fat_g": 0.85,
    "sodium_mg": 437.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172905",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
