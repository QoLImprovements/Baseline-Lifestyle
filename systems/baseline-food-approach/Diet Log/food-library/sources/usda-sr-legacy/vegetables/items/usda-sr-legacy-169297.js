/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169297",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    }
  ],
  "name": "Squash, winter, hubbard, cooked, boiled, mashed, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.46,
    "energy_kcal": 125.0,
    "fat_g": 0.37,
    "fibre_g": 2.9,
    "folate_ug": 10.0,
    "iron_mg": 0.28,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 214.0,
    "protein_g": 1.48,
    "salt_g": 0.0125,
    "sat_fat_g": 0.076,
    "sodium_mg": 5.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 200.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169297",
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
