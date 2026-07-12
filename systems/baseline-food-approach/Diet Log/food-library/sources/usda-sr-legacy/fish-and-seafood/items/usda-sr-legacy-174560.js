/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 586.0,
      "key": "can-10-5-oz-prepared",
      "kind": "unit",
      "label": "can (10.5 oz), prepared"
    }
  ],
  "name": "Soup, oyster stew, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.69,
    "energy_kcal": 24.0,
    "fat_g": 1.59,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.41,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 20.0,
    "protein_g": 0.87,
    "salt_g": 1.0175,
    "sat_fat_g": 1.04,
    "sodium_mg": 407.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174560",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fish-and-seafood",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
