/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 257.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "can-11-oz-undiluted",
      "kind": "unit",
      "label": "can (11 oz), undiluted"
    }
  ],
  "name": "Soup, black bean, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 15.4,
    "energy_kcal": 91.0,
    "fat_g": 1.32,
    "fibre_g": 6.8,
    "folate_ug": 66.0,
    "iron_mg": 1.5,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 250.0,
    "protein_g": 4.83,
    "salt_g": 2.425,
    "sat_fat_g": 0.34,
    "sodium_mg": 970.0,
    "sugar_g": 2.49,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171141",
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
