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
  "id": "usda-sr-legacy-171044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Salad dressing, poppyseed, creamy",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 23.7,
    "energy_kcal": 399.0,
    "fat_g": 33.3,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 0.25,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 61.0,
    "protein_g": 0.92,
    "salt_g": 2.3325,
    "sat_fat_g": 6.06,
    "sodium_mg": 933.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.36,
    "vitamin_k_ug": 50.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171044",
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
