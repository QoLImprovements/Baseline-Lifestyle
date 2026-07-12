/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "2-tablespoon",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-foundation-746777",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.7,
      "key": "2-tablespoon",
      "kind": "unit",
      "label": "2 tablespoon"
    }
  ],
  "name": "Sauce, salsa, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 6.74,
    "energy_kcal": 122.0,
    "fat_g": 0.19,
    "fibre_g": 1.8,
    "folate_ug": 0.0,
    "iron_mg": 0.42,
    "magnesium_mg": 15.2,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 258.0,
    "protein_g": 1.44,
    "salt_g": 1.64,
    "sat_fat_g": 0.0,
    "sodium_mg": 656.0,
    "sugar_g": 3.81,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746777",
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
