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
  "id": "usda-sr-legacy-171019",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 14.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Salad dressing, italian dressing, commercial, regular",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 12.1,
    "energy_kcal": 1000.0,
    "fat_g": 21.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.26,
    "magnesium_mg": 5.0,
    "omega3_g": 1.43,
    "phosphorus_mg": 15.0,
    "potassium_mg": 84.0,
    "protein_g": 0.41,
    "salt_g": 2.4825,
    "sat_fat_g": 2.95,
    "sodium_mg": 993.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 56.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171019",
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
