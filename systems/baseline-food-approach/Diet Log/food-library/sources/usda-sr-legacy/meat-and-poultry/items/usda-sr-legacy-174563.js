/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174563",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
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
  "name": "Soup, turkey vegetable, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 3.58,
    "energy_kcal": 30.0,
    "fat_g": 1.26,
    "fibre_g": 0.2,
    "folate_ug": 2.0,
    "iron_mg": 0.32,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 73.0,
    "protein_g": 1.28,
    "salt_g": 0.94,
    "sat_fat_g": 0.37,
    "sodium_mg": 376.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174563",
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
