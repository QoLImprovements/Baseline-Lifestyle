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
  "id": "usda-sr-legacy-169056",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 289.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 22.4,
    "energy_kcal": 404.0,
    "fat_g": 34.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.33,
    "magnesium_mg": 3.0,
    "omega3_g": 2.47,
    "phosphorus_mg": 42.0,
    "potassium_mg": 35.0,
    "protein_g": 0.85,
    "salt_g": 2.125,
    "sat_fat_g": 5.34,
    "sodium_mg": 850.0,
    "sugar_g": 21.2,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 3.08,
    "vitamin_k_ug": 66.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169056",
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
