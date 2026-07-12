/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "packet-2-3-tbsp",
      "kind": "unit",
      "label": "packet (2/3 tbsp)"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pickle relish, sweet",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 35.1,
    "energy_kcal": 544.0,
    "fat_g": 0.47,
    "fibre_g": 1.1,
    "folate_ug": 1.0,
    "iron_mg": 0.87,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 25.0,
    "protein_g": 0.37,
    "salt_g": 2.0275,
    "sat_fat_g": 0.054,
    "sodium_mg": 811.0,
    "sugar_g": 29.1,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 83.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168561",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
