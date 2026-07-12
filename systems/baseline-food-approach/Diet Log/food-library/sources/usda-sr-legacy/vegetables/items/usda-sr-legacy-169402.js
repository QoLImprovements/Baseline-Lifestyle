/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169402",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushrooms, white, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.04,
    "energy_kcal": 35.0,
    "fat_g": 0.46,
    "fibre_g": 2.5,
    "folate_ug": 16.0,
    "iron_mg": 0.33,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 488.0,
    "protein_g": 3.91,
    "salt_g": 0.0425,
    "sat_fat_g": 0.06,
    "sodium_mg": 17.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169402",
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
