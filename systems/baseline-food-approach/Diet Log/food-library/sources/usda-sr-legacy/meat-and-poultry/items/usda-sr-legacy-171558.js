/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can-18-75-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 532.0,
      "key": "can-18-75-oz",
      "kind": "unit",
      "label": "can (18.75 oz)"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Soup, turkey, chunky, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 5.96,
    "energy_kcal": 57.0,
    "fat_g": 1.87,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.81,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 153.0,
    "protein_g": 4.33,
    "salt_g": 0.9775,
    "sat_fat_g": 0.52,
    "sodium_mg": 391.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 152.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171558",
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
