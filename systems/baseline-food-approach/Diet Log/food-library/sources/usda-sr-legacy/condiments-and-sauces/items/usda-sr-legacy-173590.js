/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 231.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, italian dressing, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 8.75,
    "energy_kcal": 195.0,
    "fat_g": 0.87,
    "fibre_g": 0.6,
    "folate_ug": 12.0,
    "iron_mg": 0.4,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 102.0,
    "protein_g": 0.97,
    "salt_g": 2.825,
    "sat_fat_g": 0.295,
    "sodium_mg": 1130.0,
    "sugar_g": 8.85,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173590",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "condiments-and-sauces",
    "fats-and-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
