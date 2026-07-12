/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can-11-oz-prepared",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "can-11-oz-prepared",
      "kind": "unit",
      "label": "can (11 oz), prepared"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, black bean, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 7.71,
    "energy_kcal": 191.0,
    "fat_g": 0.66,
    "fibre_g": 3.4,
    "folate_ug": 33.0,
    "iron_mg": 0.75,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 125.0,
    "protein_g": 2.42,
    "salt_g": 1.2175,
    "sat_fat_g": 0.17,
    "sodium_mg": 487.0,
    "sugar_g": 1.24,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172903",
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
