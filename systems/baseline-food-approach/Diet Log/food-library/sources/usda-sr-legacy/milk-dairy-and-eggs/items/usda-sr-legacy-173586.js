/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Margarine-like spread with yogurt, approximately 40% fat, tub, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 2.0,
    "energy_kcal": 330.0,
    "fat_g": 35.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.02,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 64.0,
    "protein_g": 2.0,
    "salt_g": 1.575,
    "sat_fat_g": 7.0,
    "sodium_mg": 630.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 93.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173586",
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
