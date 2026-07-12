/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171402",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving (2 tbsp)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Salad dressing, thousand island, commercial, regular",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 14.6,
    "energy_kcal": 1580.0,
    "fat_g": 35.1,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 1.18,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 107.0,
    "protein_g": 1.09,
    "salt_g": 2.405,
    "sat_fat_g": 5.09,
    "sodium_mg": 962.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.0,
    "vitamin_k_ug": 69.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171402",
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
