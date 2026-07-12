/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "can-11-oz-prepared",
      "kind": "unit",
      "label": "can (11 oz), prepared"
    }
  ],
  "name": "Soup, cheese, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 4.26,
    "energy_kcal": 63.0,
    "fat_g": 4.24,
    "fibre_g": 0.4,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 62.0,
    "protein_g": 2.19,
    "salt_g": 0.97,
    "sat_fat_g": 2.7,
    "sodium_mg": 388.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174550",
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
