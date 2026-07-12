/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 261.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 32.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, chili beef, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 9.23,
    "energy_kcal": 57.0,
    "fat_g": 1.24,
    "fibre_g": 1.2,
    "folate_ug": 4.0,
    "iron_mg": 0.79,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 196.0,
    "protein_g": 2.49,
    "salt_g": 0.97,
    "sat_fat_g": 0.608,
    "sodium_mg": 388.0,
    "sugar_g": 2.49,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172911",
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
