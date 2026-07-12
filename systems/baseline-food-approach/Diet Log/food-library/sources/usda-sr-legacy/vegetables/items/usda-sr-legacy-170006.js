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
  "id": "usda-sr-legacy-170006",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "stalk",
      "kind": "unit",
      "label": "stalk"
    }
  ],
  "name": "Onions, young green, tops only",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 5.74,
    "energy_kcal": 112.0,
    "fat_g": 0.47,
    "fibre_g": 1.8,
    "folate_ug": 30.0,
    "iron_mg": 0.51,
    "magnesium_mg": 16.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 25.0,
    "potassium_mg": 159.0,
    "protein_g": 0.97,
    "salt_g": 0.0375,
    "sat_fat_g": 0.165,
    "sodium_mg": 15.0,
    "sugar_g": 3.91,
    "vitamin_a_ug": 200.0,
    "vitamin_c_mg": 13.4,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 156.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170006",
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
