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
  "id": "usda-sr-legacy-168093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Salad dressing, peppercorn dressing, commercial, regular",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 3.5,
    "energy_kcal": 564.0,
    "fat_g": 61.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.35,
    "magnesium_mg": 2.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 26.0,
    "potassium_mg": 176.0,
    "protein_g": 1.2,
    "salt_g": 2.75,
    "sat_fat_g": 10.5,
    "sodium_mg": 1100.0,
    "sugar_g": 2.45,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 4.23,
    "vitamin_k_ug": 125.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168093",
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
