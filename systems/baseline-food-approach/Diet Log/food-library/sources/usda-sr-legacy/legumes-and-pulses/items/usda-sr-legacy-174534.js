/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174534",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Split pea soup, canned, reduced sodium, prepared with water or ready-to serve",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 11.8,
    "energy_kcal": 297.0,
    "fat_g": 0.92,
    "fibre_g": 1.9,
    "folate_ug": 20.0,
    "iron_mg": 0.77,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 183.0,
    "protein_g": 3.85,
    "salt_g": 0.415,
    "sat_fat_g": 0.3,
    "sodium_mg": 166.0,
    "sugar_g": 5.06,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 36.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174534",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
