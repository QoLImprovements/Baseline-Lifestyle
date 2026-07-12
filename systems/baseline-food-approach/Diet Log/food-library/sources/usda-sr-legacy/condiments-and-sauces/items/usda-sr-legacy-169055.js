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
  "id": "usda-sr-legacy-169055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving (2 tbsp)"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, caesar dressing, regular",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 3.3,
    "energy_kcal": 542.0,
    "fat_g": 57.8,
    "fibre_g": 0.5,
    "folate_ug": 2.0,
    "iron_mg": 1.08,
    "magnesium_mg": 2.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 19.0,
    "potassium_mg": 29.0,
    "protein_g": 2.17,
    "salt_g": 3.025,
    "sat_fat_g": 8.79,
    "sodium_mg": 1210.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 4.74,
    "vitamin_k_ug": 105.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169055",
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
