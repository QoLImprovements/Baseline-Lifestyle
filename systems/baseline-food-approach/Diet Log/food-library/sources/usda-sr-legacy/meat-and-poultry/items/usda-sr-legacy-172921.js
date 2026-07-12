/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can-10-5-oz-prepared",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172921",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 586.0,
      "key": "can-10-5-oz-prepared",
      "kind": "unit",
      "label": "can (10.5 oz), prepared"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Soup, vegetable with beef broth, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.35,
    "energy_kcal": 33.0,
    "fat_g": 0.78,
    "fibre_g": 0.7,
    "folate_ug": 4.0,
    "iron_mg": 0.4,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 79.0,
    "protein_g": 1.21,
    "salt_g": 0.6325,
    "sat_fat_g": 0.18,
    "sodium_mg": 253.0,
    "sugar_g": 0.82,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172921",
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
