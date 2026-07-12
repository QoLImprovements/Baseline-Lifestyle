/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    }
  ],
  "name": "Peppers, sweet, red, sauteed",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 6.57,
    "energy_kcal": 133.0,
    "fat_g": 12.8,
    "fibre_g": 1.8,
    "folate_ug": 2.0,
    "iron_mg": 0.47,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 193.0,
    "protein_g": 1.04,
    "salt_g": 0.0525,
    "sat_fat_g": 1.56,
    "sodium_mg": 21.0,
    "sugar_g": 4.28,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 163.0,
    "vitamin_e_mg": 3.09,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168550",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
