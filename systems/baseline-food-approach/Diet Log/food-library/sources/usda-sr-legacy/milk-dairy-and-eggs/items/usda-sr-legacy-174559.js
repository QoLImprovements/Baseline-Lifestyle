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
  "id": "usda-sr-legacy-174559",
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
  "name": "Soup, cream of onion, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.2,
    "energy_kcal": 44.0,
    "fat_g": 2.16,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.26,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 49.0,
    "protein_g": 1.13,
    "salt_g": 0.95,
    "sat_fat_g": 0.6,
    "sodium_mg": 380.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174559",
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
