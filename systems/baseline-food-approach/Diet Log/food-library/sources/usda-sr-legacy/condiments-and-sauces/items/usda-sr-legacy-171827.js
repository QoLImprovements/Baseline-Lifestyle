/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171827",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sauce, barbecue, SWEET BABY RAY'S, original",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 46.1,
    "energy_kcal": 803.0,
    "fat_g": 0.43,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.33,
    "magnesium_mg": 11.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 22.0,
    "potassium_mg": 235.0,
    "protein_g": 0.95,
    "salt_g": 1.9125,
    "sat_fat_g": 0.037,
    "sodium_mg": 765.0,
    "sugar_g": 38.4,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171827",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "condiments-and-sauces",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
