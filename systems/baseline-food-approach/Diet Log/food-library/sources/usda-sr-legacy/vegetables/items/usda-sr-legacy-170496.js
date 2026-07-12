/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "2-tbsp-1-8-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170496",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "2-tbsp-1-8-cup",
      "kind": "unit",
      "label": "2 tbsp (1/8 cup)"
    }
  ],
  "name": "Seaweed, wakame, raw",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 9.14,
    "energy_kcal": 188.0,
    "fat_g": 0.64,
    "fibre_g": 0.5,
    "folate_ug": 196.0,
    "iron_mg": 2.18,
    "magnesium_mg": 107.0,
    "omega3_g": 0.186,
    "phosphorus_mg": 80.0,
    "potassium_mg": 50.0,
    "protein_g": 3.03,
    "salt_g": 2.18,
    "sat_fat_g": 0.13,
    "sodium_mg": 872.0,
    "sugar_g": 0.65,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170496",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
