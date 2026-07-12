/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "2-tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Salad dressing, honey mustard, regular",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 23.3,
    "energy_kcal": 1940.0,
    "fat_g": 40.8,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.29,
    "magnesium_mg": 5.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 22.0,
    "potassium_mg": 20.0,
    "protein_g": 0.87,
    "salt_g": 1.28,
    "sat_fat_g": 5.0,
    "sodium_mg": 512.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 70.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171043",
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
