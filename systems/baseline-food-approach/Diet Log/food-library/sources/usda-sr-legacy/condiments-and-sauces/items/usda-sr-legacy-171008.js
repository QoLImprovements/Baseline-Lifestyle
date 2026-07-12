/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving (2 tbsp)"
    }
  ],
  "name": "Salad dressing, thousand island dressing, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 24.1,
    "energy_kcal": 195.0,
    "fat_g": 11.3,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 202.0,
    "protein_g": 0.83,
    "salt_g": 2.3875,
    "sat_fat_g": 0.746,
    "sodium_mg": 955.0,
    "sugar_g": 17.3,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 27.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171008",
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
