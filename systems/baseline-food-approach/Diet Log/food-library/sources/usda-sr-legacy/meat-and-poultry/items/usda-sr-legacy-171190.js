/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171190",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 528.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, beef and vegetables, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 6.16,
    "energy_kcal": 200.0,
    "fat_g": 1.16,
    "fibre_g": 1.2,
    "folate_ug": 9.0,
    "iron_mg": 0.51,
    "magnesium_mg": 10.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 48.0,
    "potassium_mg": 174.0,
    "protein_g": 3.18,
    "salt_g": 0.815,
    "sat_fat_g": 0.407,
    "sodium_mg": 326.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171190",
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
