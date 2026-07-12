/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "teaspoon",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171831",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "teaspoon",
      "kind": "unit",
      "label": "teaspoon"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Wasabi",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 46.1,
    "energy_kcal": 1220.0,
    "fat_g": 10.9,
    "fibre_g": 6.1,
    "folate_ug": 10.0,
    "iron_mg": 0.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.155,
    "phosphorus_mg": 26.0,
    "potassium_mg": 182.0,
    "protein_g": 2.23,
    "salt_g": 8.475,
    "sat_fat_g": 2.03,
    "sodium_mg": 3390.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.91,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171831",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "other-foods",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
