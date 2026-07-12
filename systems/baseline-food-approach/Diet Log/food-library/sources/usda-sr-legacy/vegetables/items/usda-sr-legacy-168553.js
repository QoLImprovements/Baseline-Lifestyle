/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "frond-6-1-2-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168553",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "frond-6-1-2-long",
      "kind": "unit",
      "label": "frond (6-1/2\" long)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    }
  ],
  "name": "Tree fern, cooked, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 10.8,
    "energy_kcal": 40.0,
    "fat_g": 0.07,
    "fibre_g": 3.7,
    "folate_ug": 15.0,
    "iron_mg": 0.16,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 5.0,
    "protein_g": 0.29,
    "salt_g": 0.6025,
    "sat_fat_g": 0.0,
    "sodium_mg": 241.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168553",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
