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
  "id": "usda-sr-legacy-167693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, french dressing, reduced calorie",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 27.0,
    "energy_kcal": 227.0,
    "fat_g": 13.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.4,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 79.0,
    "protein_g": 0.4,
    "salt_g": 2.01,
    "sat_fat_g": 1.87,
    "sodium_mg": 804.0,
    "sugar_g": 25.9,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.86,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167693",
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
