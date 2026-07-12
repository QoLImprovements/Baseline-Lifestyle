/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "2-tablespoons",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171826",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "2-tablespoons",
      "kind": "unit",
      "label": "2 tablespoons"
    }
  ],
  "name": "Sauce, tartar, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 13.3,
    "energy_kcal": 883.0,
    "fat_g": 16.7,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.25,
    "magnesium_mg": 6.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 17.0,
    "potassium_mg": 68.0,
    "protein_g": 1.0,
    "salt_g": 1.6675,
    "sat_fat_g": 3.33,
    "sodium_mg": 667.0,
    "sugar_g": 4.25,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 50.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171826",
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
