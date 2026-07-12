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
  "id": "usda-sr-legacy-171005",
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
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, russian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 31.9,
    "energy_kcal": 355.0,
    "fat_g": 26.2,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.6,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 173.0,
    "protein_g": 0.69,
    "salt_g": 2.825,
    "sat_fat_g": 2.39,
    "sodium_mg": 1130.0,
    "sugar_g": 17.7,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 3.32,
    "vitamin_k_ug": 53.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171005",
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
