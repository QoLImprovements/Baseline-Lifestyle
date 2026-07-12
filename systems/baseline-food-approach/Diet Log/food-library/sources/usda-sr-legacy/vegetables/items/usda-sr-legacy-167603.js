/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-25-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-167603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Seaweed, Canadian Cultivated EMI-TSUNOMATA, rehydrated",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 5.62,
    "energy_kcal": 132.0,
    "fat_g": 0.17,
    "fibre_g": 4.5,
    "folate_ug": 23.0,
    "iron_mg": 8.07,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 358.0,
    "protein_g": 1.86,
    "salt_g": 1.315,
    "sat_fat_g": 0.05,
    "sodium_mg": 526.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167603",
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
