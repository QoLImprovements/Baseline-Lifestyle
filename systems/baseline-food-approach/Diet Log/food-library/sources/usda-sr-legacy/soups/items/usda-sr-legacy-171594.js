/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171594",
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
  "name": "Soup, vegetable soup, condensed, low sodium, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 6.06,
    "energy_kcal": 137.0,
    "fat_g": 0.45,
    "fibre_g": 1.1,
    "folate_ug": 6.0,
    "iron_mg": 0.33,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 217.0,
    "protein_g": 1.1,
    "salt_g": 0.485,
    "sat_fat_g": 0.074,
    "sodium_mg": 194.0,
    "sugar_g": 2.15,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171594",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "soups",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
