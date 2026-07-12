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
  "id": "usda-sr-legacy-169996",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Collards, frozen, chopped, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 210.0,
    "carbs_g": 7.1,
    "energy_kcal": 36.0,
    "fat_g": 0.41,
    "fibre_g": 2.8,
    "folate_ug": 76.0,
    "iron_mg": 1.12,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 251.0,
    "protein_g": 2.97,
    "salt_g": 0.125,
    "sat_fat_g": 0.06,
    "sodium_mg": 50.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 575.0,
    "vitamin_c_mg": 26.4,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 623.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169996",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
