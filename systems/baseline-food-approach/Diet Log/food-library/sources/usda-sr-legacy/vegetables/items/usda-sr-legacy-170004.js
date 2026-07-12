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
  "id": "usda-sr-legacy-170004",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    }
  ],
  "name": "Onions, yellow, sauteed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 7.86,
    "energy_kcal": 516.0,
    "fat_g": 10.8,
    "fibre_g": 1.7,
    "folate_ug": 2.0,
    "iron_mg": 0.27,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 133.0,
    "protein_g": 0.95,
    "salt_g": 0.03,
    "sat_fat_g": 1.48,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 21.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170004",
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
