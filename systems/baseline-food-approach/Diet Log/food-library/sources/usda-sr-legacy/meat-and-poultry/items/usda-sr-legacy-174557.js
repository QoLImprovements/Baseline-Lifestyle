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
  "id": "usda-sr-legacy-174557",
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
  "name": "Soup, beef broth, bouillon, consomme, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.73,
    "energy_kcal": 12.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.22,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 64.0,
    "protein_g": 2.22,
    "salt_g": 0.66,
    "sat_fat_g": 0.0,
    "sodium_mg": 264.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174557",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "meat-and-poultry",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
