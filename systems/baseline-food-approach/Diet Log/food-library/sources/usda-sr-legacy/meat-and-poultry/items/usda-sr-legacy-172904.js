/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    },
    {
      "gramsPerUnit": 33.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, bean with pork, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 8.31,
    "energy_kcal": 63.0,
    "fat_g": 2.16,
    "fibre_g": 2.9,
    "folate_ug": 12.0,
    "iron_mg": 0.75,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 147.0,
    "protein_g": 2.88,
    "salt_g": 0.8725,
    "sat_fat_g": 0.558,
    "sodium_mg": 349.0,
    "sugar_g": 1.47,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172904",
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
