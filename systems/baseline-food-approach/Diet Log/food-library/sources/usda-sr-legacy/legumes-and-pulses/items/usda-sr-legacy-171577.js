/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "10-oz-1-pouch",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "10-oz-1-pouch",
      "kind": "unit",
      "label": "10 oz 1 pouch"
    }
  ],
  "name": "SMART SOUP, French Lentil",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 9.5,
    "energy_kcal": 53.0,
    "fat_g": 1.06,
    "fibre_g": 2.9,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 2.9,
    "salt_g": 0.3275,
    "sat_fat_g": 0.0,
    "sodium_mg": 131.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171577",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "legumes-and-pulses",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
