/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171149",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 303.0,
      "key": "can-10-7-oz",
      "kind": "unit",
      "label": "can (10.7 oz)"
    }
  ],
  "name": "Soup, chicken vegetable, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.01,
    "energy_kcal": 61.0,
    "fat_g": 2.32,
    "fibre_g": 0.7,
    "folate_ug": 4.0,
    "iron_mg": 0.71,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 126.0,
    "protein_g": 2.94,
    "salt_g": 1.765,
    "sat_fat_g": 0.69,
    "sodium_mg": 706.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 109.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171149",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "meat-and-poultry",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
