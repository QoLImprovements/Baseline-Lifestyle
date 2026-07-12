/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169299",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Squash, winter, spaghetti, cooked, boiled, drained, or baked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 6.46,
    "energy_kcal": 27.0,
    "fat_g": 0.26,
    "fibre_g": 1.4,
    "folate_ug": 8.0,
    "iron_mg": 0.34,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 117.0,
    "protein_g": 0.66,
    "salt_g": 0.045,
    "sat_fat_g": 0.062,
    "sodium_mg": 18.0,
    "sugar_g": 2.53,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169299",
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
