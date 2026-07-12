/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "can-10-75-oz-prepared",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 602.0,
      "key": "can-10-75-oz-prepared",
      "kind": "unit",
      "label": "can (10.75 oz), prepared"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Soup, cream of celery, canned, prepared with equal volume milk",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 5.86,
    "energy_kcal": 66.0,
    "fat_g": 3.91,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 0.28,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 125.0,
    "protein_g": 2.29,
    "salt_g": 0.68,
    "sat_fat_g": 1.59,
    "sodium_mg": 272.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 186.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172893",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
