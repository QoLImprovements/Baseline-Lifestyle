/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "serving-2-tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171404",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving (2 tbsp)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, french dressing, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 31.2,
    "energy_kcal": 928.0,
    "fat_g": 11.5,
    "fibre_g": 1.5,
    "folate_ug": 2.0,
    "iron_mg": 0.73,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 107.0,
    "protein_g": 0.58,
    "salt_g": 2.095,
    "sat_fat_g": 0.842,
    "sodium_mg": 838.0,
    "sugar_g": 16.9,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 17.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171404",
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
