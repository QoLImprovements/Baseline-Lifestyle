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
  "id": "usda-sr-legacy-174549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 593.0,
      "key": "can-10-75-oz-prepared",
      "kind": "unit",
      "label": "can (10.75 oz), prepared"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Soup, cream of asparagus, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 4.38,
    "energy_kcal": 35.0,
    "fat_g": 1.68,
    "fibre_g": 0.2,
    "folate_ug": 9.0,
    "iron_mg": 0.33,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 71.0,
    "protein_g": 0.94,
    "salt_g": 1.005,
    "sat_fat_g": 0.43,
    "sodium_mg": 402.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174549",
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
