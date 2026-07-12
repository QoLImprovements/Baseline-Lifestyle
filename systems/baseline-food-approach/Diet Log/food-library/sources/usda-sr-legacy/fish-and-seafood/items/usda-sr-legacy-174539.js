/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "serving-1-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174539",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, clam chowder, new england, canned, prepared with equal volume low fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 7.46,
    "energy_kcal": 254.0,
    "fat_g": 2.02,
    "fibre_g": 0.3,
    "folate_ug": 9.0,
    "iron_mg": 1.21,
    "magnesium_mg": 12.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 173.0,
    "potassium_mg": 179.0,
    "protein_g": 3.24,
    "salt_g": 0.6825,
    "sat_fat_g": 1.09,
    "sodium_mg": 273.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174539",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fish-and-seafood",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
