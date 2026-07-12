/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171611",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 251.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, beef and mushroom, low sodium, chunk style",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 9.58,
    "energy_kcal": 289.0,
    "fat_g": 2.3,
    "fibre_g": 0.2,
    "folate_ug": 5.0,
    "iron_mg": 0.97,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 140.0,
    "protein_g": 4.3,
    "salt_g": 0.0625,
    "sat_fat_g": 1.62,
    "sodium_mg": 25.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171611",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "fungi",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
