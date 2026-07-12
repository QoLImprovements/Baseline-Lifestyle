/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "serving-1-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172915",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, cream of mushroom, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 3.33,
    "energy_kcal": 39.0,
    "fat_g": 2.59,
    "fibre_g": 0.3,
    "folate_ug": 1.0,
    "iron_mg": 0.09,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 31.0,
    "protein_g": 0.66,
    "salt_g": 0.85,
    "sat_fat_g": 0.472,
    "sodium_mg": 340.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172915",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fungi",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
