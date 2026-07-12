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
  "id": "usda-foundation-332282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, pasta, spaghetti/marinara, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 8.05,
    "energy_kcal": 45.0,
    "fat_g": 1.48,
    "fibre_g": 1.8,
    "folate_ug": 0.0,
    "iron_mg": 0.78,
    "magnesium_mg": 18.5,
    "omega3_g": 0.079,
    "phosphorus_mg": 34.0,
    "potassium_mg": 319.0,
    "protein_g": 1.41,
    "salt_g": 1.0475,
    "sat_fat_g": 0.17,
    "sodium_mg": 419.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "332282",
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
