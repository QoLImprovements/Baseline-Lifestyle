/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172920",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "can-11-oz-prepared",
      "kind": "unit",
      "label": "can (11 oz), prepared"
    }
  ],
  "name": "Soup, tomato rice, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 8.54,
    "energy_kcal": 195.0,
    "fat_g": 1.06,
    "fibre_g": 0.7,
    "folate_ug": 6.0,
    "iron_mg": 0.31,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 129.0,
    "protein_g": 0.82,
    "salt_g": 0.7975,
    "sat_fat_g": 0.2,
    "sodium_mg": 319.0,
    "sugar_g": 2.95,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172920",
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
