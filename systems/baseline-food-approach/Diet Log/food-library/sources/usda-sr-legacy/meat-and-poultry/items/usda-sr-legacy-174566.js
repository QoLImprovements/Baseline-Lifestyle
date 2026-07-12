/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174566",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "cube-6-fl-oz-prepared",
      "kind": "unit",
      "label": "cube (6 fl oz prepared)"
    }
  ],
  "name": "Soup, chicken broth cubes, dry, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.62,
    "energy_kcal": 5.0,
    "fat_g": 0.12,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.05,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 10.0,
    "protein_g": 0.39,
    "salt_g": 0.815,
    "sat_fat_g": 0.03,
    "sodium_mg": 326.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174566",
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
