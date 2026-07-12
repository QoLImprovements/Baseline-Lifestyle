/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sauce, chili, peppers, hot, immature green, canned",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 5.0,
    "energy_kcal": 20.0,
    "fat_g": 0.1,
    "fibre_g": 1.9,
    "folate_ug": 12.0,
    "iron_mg": 0.4,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 564.0,
    "protein_g": 0.7,
    "salt_g": 0.0625,
    "sat_fat_g": 0.013,
    "sodium_mg": 25.0,
    "sugar_g": 2.55,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 68.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171605",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
