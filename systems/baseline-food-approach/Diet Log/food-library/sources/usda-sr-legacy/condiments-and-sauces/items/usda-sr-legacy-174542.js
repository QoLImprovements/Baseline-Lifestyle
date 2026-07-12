/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, white, thin, prepared-from-recipe, with butter",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 8.29,
    "energy_kcal": 301.0,
    "fat_g": 2.56,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.22,
    "magnesium_mg": 12.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 110.0,
    "potassium_mg": 167.0,
    "protein_g": 3.95,
    "salt_g": 0.46,
    "sat_fat_g": 1.6,
    "sodium_mg": 184.0,
    "sugar_g": 5.29,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174542",
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
