/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "package",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 6.7,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Gravy, brown instant, dry",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 59.8,
    "energy_kcal": 380.0,
    "fat_g": 11.8,
    "fibre_g": 3.2,
    "folate_ug": 69.0,
    "iron_mg": 7.4,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 212.0,
    "potassium_mg": 367.0,
    "protein_g": 8.53,
    "salt_g": 12.625,
    "sat_fat_g": 5.87,
    "sodium_mg": 5050.0,
    "sugar_g": 9.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171588",
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
