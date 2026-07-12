/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can-20-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 567.0,
      "key": "can-20-oz",
      "kind": "unit",
      "label": "can (20 oz)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Soup, lentil with ham, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.16,
    "energy_kcal": 234.0,
    "fat_g": 1.12,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.07,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 144.0,
    "protein_g": 3.74,
    "salt_g": 1.33,
    "sat_fat_g": 0.45,
    "sodium_mg": 532.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171549",
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
