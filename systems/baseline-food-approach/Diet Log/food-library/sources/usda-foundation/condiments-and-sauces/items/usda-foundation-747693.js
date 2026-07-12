/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-747693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ketchup, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 26.8,
    "energy_kcal": 117.0,
    "fat_g": 0.55,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.43,
    "magnesium_mg": 13.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 249.0,
    "protein_g": 1.11,
    "salt_g": 2.3725,
    "sat_fat_g": 0.0,
    "sodium_mg": 949.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "747693",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
