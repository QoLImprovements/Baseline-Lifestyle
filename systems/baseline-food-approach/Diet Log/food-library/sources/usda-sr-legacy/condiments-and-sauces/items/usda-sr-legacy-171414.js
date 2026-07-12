/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "individual-packet",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.3,
      "key": "individual-packet",
      "kind": "unit",
      "label": "individual packet"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Salad dressing, french dressing, commercial, regular",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 18.8,
    "energy_kcal": 1750.0,
    "fat_g": 39.1,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 0.32,
    "magnesium_mg": 7.0,
    "omega3_g": 2.781,
    "phosphorus_mg": 25.0,
    "potassium_mg": 108.0,
    "protein_g": 0.87,
    "salt_g": 1.6525,
    "sat_fat_g": 6.09,
    "sodium_mg": 661.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 121.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171414",
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
