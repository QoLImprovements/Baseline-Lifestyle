/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172913",
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
  "name": "Soup, minestrone, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 4.66,
    "energy_kcal": 34.0,
    "fat_g": 1.04,
    "fibre_g": 0.4,
    "folate_ug": 15.0,
    "iron_mg": 0.38,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 130.0,
    "protein_g": 1.77,
    "salt_g": 0.635,
    "sat_fat_g": 0.23,
    "sodium_mg": 254.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172913",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "soups",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
