/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can-10-75-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "can-10-75-oz",
      "kind": "unit",
      "label": "can (10.75 oz)"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    }
  ],
  "name": "Soup, cream of chicken, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.16,
    "energy_kcal": 90.0,
    "fat_g": 5.77,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.06,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 49.0,
    "protein_g": 2.38,
    "salt_g": 1.755,
    "sat_fat_g": 1.7,
    "sodium_mg": 702.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171146",
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
