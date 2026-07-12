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
  "id": "usda-sr-legacy-174567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 261.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup 8 fl oz"
    },
    {
      "gramsPerUnit": 32.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, cream of chicken, dry, mix, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 5.11,
    "energy_kcal": 41.0,
    "fat_g": 2.04,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.1,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 82.0,
    "protein_g": 0.68,
    "salt_g": 1.135,
    "sat_fat_g": 1.3,
    "sodium_mg": 454.0,
    "sugar_g": 1.59,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174567",
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
