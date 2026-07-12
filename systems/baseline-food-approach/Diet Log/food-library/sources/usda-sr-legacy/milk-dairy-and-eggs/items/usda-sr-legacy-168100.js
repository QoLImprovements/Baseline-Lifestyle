/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-168100",
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
      "gramsPerUnit": 234.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Creamy dressing, made with sour cream and/or buttermilk and oil, reduced calorie, cholesterol-free",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 16.0,
    "energy_kcal": 140.0,
    "fat_g": 8.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.26,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 49.0,
    "protein_g": 1.0,
    "salt_g": 2.33,
    "sat_fat_g": 1.36,
    "sodium_mg": 932.0,
    "sugar_g": 3.28,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.92,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168100",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
