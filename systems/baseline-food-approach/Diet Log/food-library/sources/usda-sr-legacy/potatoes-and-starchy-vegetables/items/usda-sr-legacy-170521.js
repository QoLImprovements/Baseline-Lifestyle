/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "potato-2-1-3-x-4-3-4",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170521",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "potato-2-1-3-x-4-3-4",
      "kind": "unit",
      "label": "potato (2-1/3\" x 4-3/4\")"
    }
  ],
  "name": "Potatoes, microwaved, cooked, in skin, flesh and skin, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 24.2,
    "energy_kcal": 105.0,
    "fat_g": 0.1,
    "fibre_g": 2.3,
    "folate_ug": 12.0,
    "iron_mg": 1.24,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 447.0,
    "protein_g": 2.44,
    "salt_g": 0.61,
    "sat_fat_g": 0.026,
    "sodium_mg": 244.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 15.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170521",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
